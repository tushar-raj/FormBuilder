// @flow

import React from 'react';
import { Panel, ControlLabel, Button } from 'react-bootstrap';
import BasicInputText from '../components/BasicInputText';
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
        console.log('components data in right pane', this.state.componentToEdit);
        let componentToEdit = this.state.componentToEdit;
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
        }
        return (
            <Panel>
                <div>
                  {basicItems}
                  {this.editableItems}
                  {addBtn}
                </div>
            </Panel>
        );
    }
}
