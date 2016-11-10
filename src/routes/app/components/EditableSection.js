import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import BasicInputText from './BasicInputText';

import styles from '../styles/rightPane.css'

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
        if(this.props.itemIndex < this.props.itemsLength-1){
            this.props.moveElementDown(this.props.itemIndex);
        }
    }
    deleteItem(){
      this.props.deleteItem(this.props.itemIndex);
    }
    updatedValue(currentValue, type){
        this.props.updatedValue(currentValue, type, this.props.itemIndex);
    }
    render() {
        return(
          <div className={styles.editableSection}>
            <BasicInputText
                type={this.props.type}
                value={this.props.value}
                updatedValue={this.updatedValue}
                className={styles.editableSectionInput}
            />


                <Button onClick={this.moveElementUp} className={styles.editableSectionBtn}> ▲ </Button>
                <Button onClick={this.moveElementDown} className={styles.editableSectionBtn}> ▼ </Button>
                <Button onClick={this.deleteItem} className={styles.editableSectionBtn}> ❌ </Button>
          </div>
        );
      }
  }

  export default EditableSection;
