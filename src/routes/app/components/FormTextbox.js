// @flow

import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';



class FormTextbox extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ControlLabel>{this.props.id}</ControlLabel>
                <FormControl
                    type="text"
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
