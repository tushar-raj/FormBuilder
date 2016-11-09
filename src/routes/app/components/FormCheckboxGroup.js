// @flow

import React from 'react';
import {FormCheckbox} from "./FormCheckbox.js"

class FormCheckboxGroup extends React.Component{
	constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.getComponentData(this.currentItems)
    }
	render() {
	  let elementId = this.props.id;
  	  let elementDataObj = this.props.dataForGeneratingElements;
  	  if(typeof elementDataObj == 'undefined'){
  		  elementDataObj = {
  			  elementData:[
  				  {labelName:'Default Value 1'},
  				  {labelName:'Default Value 2'}
  			  ],
  			  label:'Default Checkbox Group Label'
  		  }

  	  }

  	  this.currentItems = {
  		id:this.props.id,
  		component:'FormCheckboxGroup',
  		elementData:elementDataObj.elementData,
  		label:elementDataObj.label
  	  }
      const listOfItems = elementDataObj.elementData.map((item,index) =>
      	<FormCheckbox name={elementId} key = { index } labelName = { item.labelName } />
      );
      return(
        <div className='formComponent' onClick={this.handleClick}>
          <h3>{ elementDataObj.label }</h3>
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
