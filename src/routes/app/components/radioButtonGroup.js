import React from 'react';
import {CustomRadioButton} from "./customRadioButton.js"

class RadioButtonGroup extends React.Component{
	render() {
      /*
       Ideally the dataForGeneratingElements property
       that is being passed to RadioButtonGroup Component
       should have data on the lines of this format:
       [{name:'questions', labelName:'Yes', value:'yes'},{name:'questions', labelName:'No', value:'no'}]
      */
      let elementData = this.props.dataForGeneratingElements;
      if(elementData.length == 0 || typeof elementData == 'undefined'){
        elementData = [
          {name:'defaultRadio', labelName:'Default Value 1', value:'default1'},
          {name:'defaultRadio', labelName:'Default Value 2', value:'default2'}
        ];
      }
      const listOfItems = elementData.map((item,index) =>
      /*
       Ideally some unique id should be used for key,
       for the time being index has been used,
       this should be replaced once stable Ids are available
      */
      <CustomRadioButton key={index} name={item.name} labelName={item.labelName} radioBtnValue={item.value} />
      );
      return(
        <div>
          <h3>{this.props.groupLabelName || RadioButtonGroup.defaultProps.groupLabelName}</h3>
	        {listOfItems}
        </div>
      );
  	}
}

RadioButtonGroup.defaultProps = {
   groupLabelName:'Default Radio Label'
};

RadioButtonGroup.propTypes = {

};

export {RadioButtonGroup};
