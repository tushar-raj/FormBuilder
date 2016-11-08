// @flow

import React from 'react';
import { Panel, ControlLabel, Button } from 'react-bootstrap';
import BasicInputText from '../components/BasicInputText';
import EditableSection from '../components/EditableSection';

export default class RightPane extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          editableElements:[]
        }

        this.editableItems = [];
        this.addElement = this.addElement.bind(this);
        this.onDeleteElement = this.onDeleteElement.bind(this);
        this.onUpdateValue = this.onUpdateValue.bind(this);
    }
    onDeleteElement(itemIndex){
      let currentList = this.props.componentToEdit;
      var deletedItem = currentList.elementData.splice(itemIndex,1);
      console.log('currentList',currentList)
      console.log('deletedItem',deletedItem)
      this.props.changeListOfEditableElements(currentList);
    }
    onUpdateValue(updatedValue, type){
        console.log('updatedValue', updatedValue, 'type', type)
        let currentList = this.props.componentToEdit;
        if(type == 'questionLabel'){
            currentList.label = updatedValue;
        } else {

        }
        this.props.receiveUpdatedData(currentList)
    }
    addElement(){
      let currentList = this.props.componentToEdit;
      currentList.elementData.push({labelName:'Default Value'});
      this.props.changeListOfEditableElements(currentList);
    }
    render() {
        console.log('components data in right pane', this.props.componentToEdit);
        let componentToEdit = this.props.componentToEdit;
        let basicItems = [];
        this.editableItems = [];
        let addBtn;
        if(Object.keys(componentToEdit).length > 0){
           basicItems.push(<ControlLabel key={0}>Enter your form question:</ControlLabel>);
           basicItems.push(<BasicInputText key={1} type="questionLabel" value={componentToEdit.label} updatedValue={this.onUpdateValue}/>);
           basicItems.push(<ControlLabel key={2}>Edit your options:</ControlLabel>);
           for(var i=0;i<componentToEdit.elementData.length;i++){
             this.editableItems.push(<EditableSection type="optionsLabel" key={i} itemIndex={i} updatedValue={this.onUpdateValue} deleteItem={this.onDeleteElement} value={componentToEdit.elementData[i].labelName}/>);
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
