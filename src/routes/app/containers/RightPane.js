// @flow

import React from 'react';
import { Panel, ControlLabel, Button, Radio } from 'react-bootstrap';
import BasicInputText from '../components/BasicInputText';
import BasicRadioButton from '../components/BasicRadioButton';
import EditableSection from '../components/EditableSection';
import PubSub from '../PubSub/PubSub'

export default class RightPane extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          componentToEdit:{},
        }

        PubSub.subscribe('fillRightPaneWithData', this.updateStateData.bind(this))
        this.editableItems = [];
        this.addElement = this.addElement.bind(this);
        this.onDeleteElement = this.onDeleteElement.bind(this);
        this.onUpdateValue = this.onUpdateValue.bind(this);
        this.onMoveElementUp = this.onMoveElementUp.bind(this);
        this.onMoveElementDown = this.onMoveElementDown.bind(this);
        this.radioChangeHandlerForButtonOptions = this.radioChangeHandlerForButtonOptions.bind(this);
        this.onUpdateTextAreaProps = this.onUpdateTextAreaProps.bind(this);
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
                   basicItems.push(<ControlLabel key={0}>Enter your form question:</ControlLabel>);
                   basicItems.push(<BasicInputText key={1} type="questionLabel" value={componentToEdit.label} updatedValue={this.onUpdateValue}/>);
                   basicItems.push(<ControlLabel key={2}>Edit your options:</ControlLabel>);
                   for(var i=0;i<componentToEdit.elementData.length;i++){
                     this.editableItems.push(<EditableSection type="optionsLabel" itemsLength={componentToEdit.elementData.length} key={i} itemIndex={i} moveElementUp={this.onMoveElementUp} moveElementDown={this.onMoveElementDown} updatedValue={this.onUpdateValue} deleteItem={this.onDeleteElement} value={componentToEdit.elementData[i].labelName}/>);
                   }

                   addBtn = <Button title='Add Element' onClick = { this.addElement }><div>+</div></Button>;
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
                        return <BasicRadioButton checked="checked" name="styles" updatedValue={this.radioChangeHandlerForButtonOptions} key={index} value={item.toLowerCase()} labelName={item} />
                    } else {
                        return <BasicRadioButton checked="" name="styles" updatedValue={this.radioChangeHandlerForButtonOptions} key={index} value={item.toLowerCase()} labelName={item} />
                    }
                  }
                );

                let sizeOptions = sizes.map((item,index) => {
                    if(item.toLowerCase() == componentToEdit.elementData[1].size){
                        return <BasicRadioButton checked="checked" name="sizes" updatedValue={this.radioChangeHandlerForButtonOptions} key={index} value={item.toLowerCase()} labelName={item} />
                    } else {
                        return <BasicRadioButton checked="" name="sizes" updatedValue={this.radioChangeHandlerForButtonOptions} key={index} value={item.toLowerCase()} labelName={item} />
                    }
                  }
                );
                itemsToDisplay = <div>
                                  <ControlLabel>Button Name:</ControlLabel>
                                  <BasicInputText type="questionLabel" value={componentToEdit.label} updatedValue={this.onUpdateValue}/>
                                  <ControlLabel>Select Button Style:</ControlLabel>
                                  {styleOptions}
                                  <ControlLabel>Select Button Size:</ControlLabel>
                                  {sizeOptions}
                                </div>;
                break;
            case 'FormTextArea':
                itemsToDisplay = <div>
                                  <ControlLabel>Enter your question here:</ControlLabel>
                                  <BasicInputText type="questionLabel" value={componentToEdit.label} updatedValue={this.onUpdateTextAreaProps}/>
                                  <ControlLabel>Enter Number of Maximum Characters:</ControlLabel>
                                  <BasicInputText type="maxLengthLabel" value={componentToEdit.elementData[1].maxLength} updatedValue={this.onUpdateTextAreaProps}/>
                                  <ControlLabel>Enter Number of Rows:</ControlLabel>
                                  <BasicInputText type="rowsLabel" value={componentToEdit.elementData[0].rows} updatedValue={this.onUpdateTextAreaProps}/>
                                </div>;
        }

        return (
            <Panel>
                {itemsToDisplay}
            </Panel>
        );
    }
}
