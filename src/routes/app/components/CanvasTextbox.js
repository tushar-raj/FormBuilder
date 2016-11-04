// @flow

import React from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';



class CanvasTextbox extends React.Component {

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

CanvasTextbox.propTypes = {
    id: React.PropTypes.number,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default CanvasTextbox//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(CanvasTextbox);
