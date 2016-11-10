// @flow

import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';



class FormTextbox extends React.Component {

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.getComponentData(this.currentItems);
    }

    render() {
        let elementId = this.props.id;
        let elementDataObj = this.props.dataForGeneratingElements;
        if(typeof elementDataObj == 'undefined'){
            elementDataObj = {
                elementData:[
                    {type:'predefined', pattern:'[A-Za-z0-9]{3,}'},
                    {maxLength:20}
                ],
                label:'Default Text Box'
            }
        }

        this.currentItems = {
          id:this.props.id,
          component:'FormTextbox',
          elementData:elementDataObj.elementData,
          label:elementDataObj.label
        }
        return (
            <div className='formComponent' onClick={this.handleClick}>
                <ControlLabel>{elementDataObj.label}</ControlLabel>
                <FormControl
                    type='text'
                    pattern = {elementDataObj.elementData[0].pattern}
                    maxLength = {elementDataObj.elementData[1].maxLength}
                    placeholder="Enter text"
                />
          </div>
        );
    }
}

FormTextbox.propTypes = {
    id: React.PropTypes.string,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormTextbox//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormTextbox);
