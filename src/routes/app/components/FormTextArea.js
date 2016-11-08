// @flow

import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';



class FormTextArea extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div  className='formComponent' >
                <ControlLabel>{this.props.id}</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  placeholder="textarea" />            
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
