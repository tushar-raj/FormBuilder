// @flow

import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';



class FormTextArea extends React.Component {

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
                    {rows:5},
                    {maxLength:50}
                ],
                label:'Default Text Area'
            }
        }

        this.currentItems = {
          id:this.props.id,
          component:'FormTextArea',
          elementData:elementDataObj.elementData,
          label:elementDataObj.label
        }
        return (
            <div  className='formComponent' onClick={this.handleClick}>
                <ControlLabel>{elementDataObj.label}</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  rows={elementDataObj.elementData[0].rows}
                  maxLength={elementDataObj.elementData[1].maxLength}
                  placeholder="Enter Text Here..." />
                  <ControlLabel>Maximum Characters:{elementDataObj.elementData[1].maxLength}</ControlLabel>
           </div>
        );
    }
}

FormTextArea.propTypes = {
    id: React.PropTypes.string,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormTextArea //DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormTextArea);
