import React from 'react';
import { Button } from 'react-bootstrap';
import BasicInputText from './BasicInputText';

class EditableSection extends React.Component{
    constructor(props){
      super(props);
      this.deleteItem =  this.deleteItem.bind(this);
      this.updatedValue = this.updatedValue.bind(this);
      this.moveElementUp = this.moveElementUp.bind(this);
      this.moveElementDown = this.moveElementDown.bind(this);
    }
    moveElementUp(){
        if(this.props.itemIndex > 0){
            this.props.moveElementUp(this.props.itemIndex);
        }
    }
    moveElementDown(){

    }
    deleteItem(){
      this.props.deleteItem(this.props.itemIndex);
    }
    updatedValue(currentValue, type){
        this.props.updatedValue(currentValue, type, this.props.itemIndex);
    }
    render() {
        return(
          <div>
            <BasicInputText type={this.props.type} value={this.props.value} updatedValue={this.updatedValue} />
            <Button onClick={this.moveElementUp}><div className='arrowUp'></div></Button>
            <Button onClick={this.moveElementDown}><div className='arrowDown'></div></Button>
            <Button onClick={this.deleteItem}><div className='deleteEditableEl'>X</div></Button>
          </div>
        );
      }
  }

  export default EditableSection;
