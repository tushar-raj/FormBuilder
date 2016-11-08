import React from 'react';
import { Button } from 'react-bootstrap';
import BasicInputText from './BasicInputText';

class EditableSection extends React.Component{
    constructor(props){
      super(props);
      this.deleteItem =  this.deleteItem.bind(this);
      this.updatedValue = this.updatedValue.bind(this);
    }
    deleteItem(){
      this.props.deleteItem(this.props.itemIndex);
    }
    updatedValue(currentValue, type){
        this.props.updatedValue(currentValue, type);
    }
    render() {
        return(
          <div>
            <BasicInputText type={this.props.type} value={this.props.value} updatedValue={this.updatedValue} />
            <Button><div className='arrowUp'></div></Button>
            <Button><div className='arrowDown'></div></Button>
            <Button onClick={this.deleteItem}><div className='deleteEditableEl'>X</div></Button>
          </div>
        );
      }
  }

  export default EditableSection;
