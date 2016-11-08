import React from 'react';
import {FormOptionItem} from "./FormMenuItem.js"
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

class FormSelectGroup extends React.Component{
	render() {
      let elementData = this.props.dataForGeneratingElements;
      if(typeof elementData == 'undefined' || elementData.length == 0){
        elementData = [
          {labelName:'Select', value:'-1'},
          {labelName:'Others', value:'0'}
        ];
      }
      const listOfItems = elementData.map((item,index) =>
					<FormOptionItem key = {index} value ={ item.value }  labelName = { item.labelName } />
      );
      return(
				<FormGroup controlId="formControlsSelect">
				      <ControlLabel>{ this.props.groupLabelName || FormRadioGroup.defaultProps.groupLabelName }</ControlLabel>
				      <FormControl componentClass="select" placeholder="select">
				        {listOfItems}
				      </FormControl>
				</FormGroup>
      );
  	}
}

FormSelectGroup.defaultProps = {
   groupLabelName:'Default Dropdown Label'
};

FormSelectGroup.propTypes = {
	groupLabelName: React.PropTypes.string
};

export default FormSelectGroup;
