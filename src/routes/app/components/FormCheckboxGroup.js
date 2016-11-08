import React from 'react';
import {FormCheckbox} from "./FormCheckbox.js"

class FormCheckboxGroup extends React.Component{
	render() {
      /*
       Ideally the dataForGeneratingElements property
       that is being passed to CheckboxGroup Component
       should have data on the lines of this format:
       [{name:'gender', labelName:'Male', value:'male'},{name:'gender', labelName:'Female', value:'female'}]
      */
      let elementData = this.props.dataForGeneratingElements;
      if(typeof elementData == 'undefined' || elementData.length == 0){
        elementData = [
          {name:'defaultCheckbox', labelName:'Default Value 1', value:'default1'},
          {name:'defaultCheckbox', labelName:'Default Value 2', value:'default2'}
        ];
      }
      const listOfItems = elementData.map((item,index) =>
      	<FormCheckbox key = { index } labelName = { item.labelName } />
      );
      return(
        <div>
          <h3>{this.props.groupLabelName || CheckboxGroup.defaultProps.groupLabelName}</h3>
  	      {listOfItems}
        </div>
      );
  	}
}

FormCheckboxGroup.defaultProps = {
   groupLabelName:'Default Checkbox Label'
};

FormCheckboxGroup.propTypes = {
	groupLabelName: React.PropTypes.string
};

export default FormCheckboxGroup;
