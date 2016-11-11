// @flow

import React from 'react';
import { Panel, ControlLabel, Button, Radio } from 'react-bootstrap';
import BasicInputText from '../components/BasicInputText';
import BasicRadioButton from '../components/BasicRadioButton';
import EditableSection from '../components/EditableSection';
import PubSub from '../PubSub/PubSub';
import regexPatterns from '../../../constants/regexPatterns';

export default class RightPane extends React.Component {

    state: {
        componentToEdit: Object,
    }

    constructor(props: any) {
        super(props);

        this.state = {
            componentToEdit: {},
        }

        PubSub.subscribe('fillRightPaneWithData', this.updateStateData.bind(this))

        var self: any = this;

        self.editableItems = [];
        self.addElement = self.addElement.bind(self);
        self.onDeleteElement = self.onDeleteElement.bind(self);
        self.onUpdateValue = self.onUpdateValue.bind(self);
        self.onMoveElementUp = self.onMoveElementUp.bind(self);
        self.onMoveElementDown = self.onMoveElementDown.bind(self);
        self.radioChangeHandlerForButtonOptions = self.radioChangeHandlerForButtonOptions.bind(self);
        self.onUpdateTextAreaProps = self.onUpdateTextAreaProps.bind(self);
        self.changeHandlerForInputPatternOptions = self.changeHandlerForInputPatternOptions.bind(self);
		self.onUpdateCustomPattern = self.onUpdateCustomPattern.bind(self);
    }
	
	onUpdateCustomPattern(updatedValue){
        let currentList = this.state.componentToEdit;
        currentList.elementData[0].pattern = updatedValue;
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    changeHandlerForInputPatternOptions(value,name,labelName){
        let currentList = this.state.componentToEdit;
        currentList.elementData[0].pattern = value;
        if(labelName == 'Custom'){
            currentList.elementData[0].type = 'custom';
        } else {
            currentList.elementData[0].type = 'predefined';
        }
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }   

    onUpdateTextAreaProps(updatedValue, type){
        let currentList = this.state.componentToEdit;
        if(type == 'questionLabel'){
            currentList.label = updatedValue;
        } else if(type == 'rowsLabel') {
            currentList.elementData[0].rows = updatedValue;
        } else {
            currentList.elementData[1].maxLength = updatedValue;
        }
        this.props.receiveUpdatedData(currentList);
    }

    radioChangeHandlerForButtonOptions(value, name){
        let currentList = this.state.componentToEdit;
        if(name == 'styles'){
            currentList.elementData[0].style = value;
        } else {
            currentList.elementData[1].size = value;
        }
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    updateStateData(data){
        this.setState({componentToEdit:data});
    }

    onDeleteElement(itemIndex){
        let currentList = this.state.componentToEdit;
        currentList.elementData.splice(itemIndex,1);
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    onUpdateValue(updatedValue, type, itemIndex){
        let currentList = this.state.componentToEdit;
        if(type == 'questionLabel'){
            currentList.label = updatedValue;
        } else {
            currentList.elementData[itemIndex].labelName = updatedValue;
        }
        this.props.receiveUpdatedData(currentList);
    }

    addElement(){
        let currentList = this.state.componentToEdit;
        currentList.elementData.push({labelName:'Default Value'});
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    onMoveElementUp(itemIndex){
        let currentList = this.state.componentToEdit;
        var temp = currentList.elementData[itemIndex];
        currentList.elementData[itemIndex] = currentList.elementData[itemIndex - 1];
        currentList.elementData[itemIndex - 1] = temp;
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    onMoveElementDown(itemIndex){
        let currentList = this.state.componentToEdit;
        var temp = currentList.elementData[itemIndex];
        currentList.elementData[itemIndex] = currentList.elementData[itemIndex + 1];
        currentList.elementData[itemIndex + 1] = temp;
        this.props.receiveUpdatedData(currentList);
        this.updateStateData(currentList);
    }

    render() {
        console.log('state data in right pane', this.state.componentToEdit);
        let componentToEdit = this.state.componentToEdit;
        let itemsToDisplay = '';
        switch(componentToEdit.component){
            case 'FormCheckboxGroup':
            case 'FormRadioGroup':
                let basicItems = [];
                this.editableItems = [];
                let addBtn='';

                if(Object.keys(componentToEdit).length > 0){
                    basicItems.push(<ControlLabel
                            key={0}
                        >
                            Enter your form question:
                        </ControlLabel>
                    );

                    basicItems.push(<BasicInputText
                        key={1}
                        type="questionLabel"
                        value={componentToEdit.label}
                        updatedValue={this.onUpdateValue}
                    />);

                    basicItems.push(<ControlLabel
                            key={2}
                        >
                            Edit your options:
                        </ControlLabel>
                    );

                    for(var i=0;i<componentToEdit.elementData.length;i++){
                        this.editableItems.push(<EditableSection
                            type="optionsLabel"
                            itemsLength={componentToEdit.elementData.length}
                            key={i}
                            itemIndex={i}
                            moveElementUp={this.onMoveElementUp}
                            moveElementDown={this.onMoveElementDown}
                            updatedValue={this.onUpdateValue}
                            deleteItem={this.onDeleteElement}
                            value={componentToEdit.elementData[i].labelName}/>
                        );
                    }

                    addBtn = <Button
                            title='Add Element'
                            onClick = { this.addElement }
                        >
                        <div> + </div>
                    </Button>;

                    itemsToDisplay = <div>
                        {basicItems}
                        {this.editableItems}
                        {addBtn}
                    </div>;
                }

            break;

            case 'FormButton':
                let styles = ['Primary','Success','Info','Warning','Danger','Link','Default'];
                let sizes = ['Large','Small','XSmall'];
                let styleOptions = styles.map((item,index) => {
                    if(item.toLowerCase() == componentToEdit.elementData[0].style){
                        return <BasicRadioButton
                            checked="checked"
                            name="styles"
                            updatedValue={this.radioChangeHandlerForButtonOptions}
                            key={index}
                            value={item.toLowerCase()}
                            labelName={item}
                        />
                    } else {
                        return <BasicRadioButton
                            checked=""
                            name="styles"
                            updatedValue={this.radioChangeHandlerForButtonOptions}
                            key={index} value={item.toLowerCase()}
                            labelName={item}
                        />
                    }
                });

                let sizeOptions = sizes.map((item,index) => {
                    if(item.toLowerCase() == componentToEdit.elementData[1].size){
                        return <BasicRadioButton
                            checked="checked"
                            name="sizes"
                            updatedValue={this.radioChangeHandlerForButtonOptions}
                            key={index} value={item.toLowerCase()}
                            labelName={item}
                        />

                    } else {
                        return <BasicRadioButton
                            checked=""
                            name="sizes"
                            updatedValue={this.radioChangeHandlerForButtonOptions}
                            key={index}
                            value={item.toLowerCase()}
                            labelName={item}
                        />
                    }
                });

                itemsToDisplay = <div>
                    <ControlLabel>Button Name:</ControlLabel>
                    <BasicInputText type="questionLabel"
                        value={componentToEdit.label}
                        updatedValue={this.onUpdateValue}
                    />

                    <ControlLabel>Select Button Style:</ControlLabel>
                    {styleOptions}
                    <ControlLabel>Select Button Size:</ControlLabel>
                    {sizeOptions}
                </div>;
            break;

            case 'FormTextArea':
                itemsToDisplay = <div>
                    <ControlLabel>Enter your question here:</ControlLabel>
                    <BasicInputText
                        type="questionLabel"
                        value={componentToEdit.label}
                        updatedValue={this.onUpdateTextAreaProps}
                    />
                    <ControlLabel> Enter Number of Maximum Characters: </ControlLabel>

                    <BasicInputText
                        type="maxLengthLabel"
                        value={componentToEdit.elementData[1].maxLength}
                        updatedValue={this.onUpdateTextAreaProps}
                    />
                    <ControlLabel> Enter Number of Rows: </ControlLabel>

                    <BasicInputText
                        type="rowsLabel"
                        value={componentToEdit.elementData[0].rows}
                        updatedValue={this.onUpdateTextAreaProps}
                    />
                </div>;

            break;

            case 'FormTextbox':
				
                let patterns = [
                    {key: 'Default', type:'predefined', value:regexPatterns.defaultPattern},
                    {key: 'Email', type:'predefined', value:regexPatterns.email},
                    {key: 'Alphabet', type:'predefined', value:regexPatterns.alphabet},
                    {key: 'Alphanumeric', type:'predefined', value:regexPatterns.alphaNumeric},
                    {key: 'Numeric', type:'predefined', value:regexPatterns.numeric},
                    {key: 'Custom', type:'predefined', value:''},
                ];
				
				if(componentToEdit.elementData[0].type == 'custom'){
                    patterns.push({key: 'Custom', type:'custom', value:componentToEdit.elementData[0].pattern});
                } else {
                    patterns.push({key: 'Custom', type:'custom', value:''});
                }
				
                let patternOptions = patterns.map((item,index) => {
                    if(item.value == componentToEdit.elementData[0].pattern){
                        return <BasicRadioButton
                            checked="checked"
                            name="patterns"
                            updatedValue={this.changeHandlerForInputPatternOptions}
                            key={index} value={item.value}
                            labelName={item.key}
                        />
                    } else {
                        return <BasicRadioButton
                            checked=""
                            name="patterns"
                            updatedValue={this.changeHandlerForInputPatternOptions}
                            key={index} value={item.value}
                            labelName={item.key}
                        />
                    }
                  }
                );
				let customPatternInputBox;
                console.log('type', componentToEdit.elementData[0].type)
                if(componentToEdit.elementData[0].type == 'custom'){
                    customPatternInputBox = <div>
						<ControlLabel>
							Enter your custom pattern:
						</ControlLabel>
						<BasicInputText
							type="questionLabel"
							value={componentToEdit.elementData[0].pattern}
							updatedValue={this.onUpdateCustomPattern}
						/>
					</div>
                } else {
                    customPatternInputBox = '';
                }
                itemsToDisplay = <div>
                    <ControlLabel>Enter your question here:</ControlLabel>
                    <BasicInputText type="questionLabel" value={componentToEdit.label} updatedValue={this.onUpdateTextAreaProps}/>
                    <ControlLabel>Enter Number of Maximum Characters:</ControlLabel>
                    <BasicInputText type="maxLengthLabel" value={componentToEdit.elementData[1].maxLength} updatedValue={this.onUpdateTextAreaProps}/>
                    <ControlLabel>Select Pattern:</ControlLabel>
                    {patternOptions}
					{customPatternInputBox}
                </div>;
                break;

                default:
                    itemsToDisplay = null;
                break;

        }

        return (
            <Panel>
                {itemsToDisplay}
            </Panel>
        );
    }
}
