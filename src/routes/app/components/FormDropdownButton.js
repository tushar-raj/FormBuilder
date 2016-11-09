import React from 'react';
import {FormMenuItem} from "./FormMenuItem.js"
import { DropdownButton } from 'react-bootstrap';

class FormDropdownButton extends React.Component{
	render() {
      /*
       Ideally the dataForGeneratingElements property
       that is being passed to MenuItem Component
       should have data on the lines of this format:
       [{name:'menuItem1', labelName:'Menu Item 1', eventKey:'1'},{name:'menuItem2', labelName:'Menu Item 2', eventKey:'2'}]
      */
      let elementData = this.props.dataForGeneratingElements;
      if(typeof elementData == 'undefined' || elementData.length == 0){
        elementData = [
          {name:'menuItem1', labelName:'Menu Item 1', eventKey:'1'},
          {name:'menuItem2', labelName:'Menu Item 2', eventKey:'2'},
					{name:'menuItem12', divider:true},
					{name:'menuItem3', labelName:'Menu Item 3', eventKey:'3'}

        ];
      }
      const listOfItems = elementData.map((item,index) =>
					<FormMenuItem key = { index } eventKey = {index.toString()} labelName = { item.labelName } name = {item.name} divider ={item.divider} />
      );
      return(
        <div className='formComponent'>
          <h3>{this.props.groupLabelName || CheckboxGroup.defaultProps.groupLabelName}</h3>
					<DropdownButton title= 'test1' id={`dropdown-basic`}>
  	      {listOfItems}
					</DropdownButton>
        </div>
      );
  	}
}

FormDropdownButton.defaultProps = {
   groupLabelName:'Default Dropdown Label'
};

FormDropdownButton.propTypes = {
	groupLabelName: React.PropTypes.string
};

export default FormDropdownButton;
