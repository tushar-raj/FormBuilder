// @flow

import React from 'react';
import { ControlLabel } from 'react-bootstrap';
import Select from 'react-select'


class FormSelectBox extends React.Component {

    constructor(props: any) {
        super(props);
    }




    render() {
      let elementId = this.props.id;
      let elementDataObj = this.props.dataForGeneratingElements;
      if(typeof elementDataObj == 'undefined'){
        elementDataObj = {
          elementData:[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ],
          label:'Default Select Label'
        }

      }

      this.currentItems = {
      id:this.props.id,
      component:'FormSelectBox',
      elementData:elementDataObj.elementData,
      label:elementDataObj.label
      }

        return (
            <div  className='formComponent' >
            <ControlLabel>{elementDataObj.label}</ControlLabel>
            <Select
                name="form-field-name"
                value="one"
                options={elementDataObj.elementData}
            />
          </div>
        );
    }
}

FormSelectBox.defaultProps = {
   groupLabelName:'Default Checkbox Label'
};


FormSelectBox.propTypes = {
    id: React.PropTypes.string,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormSelectBox//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormSelectBox);
