// @flow

import React from 'react';
import { Button } from 'react-bootstrap';



class CanvasButton extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div><Button>{this.props.id}</Button></div>
        );
    }
}

CanvasButton.propTypes = {
    id: React.PropTypes.number,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default CanvasButton//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(CanvasButton);
