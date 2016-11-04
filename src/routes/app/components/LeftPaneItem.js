// @flow

import React from 'react';
import { DragSource } from 'react-dnd';
import { Button } from 'react-bootstrap';

import ItemTypes from '../../../constants/itemTypes';

//react-DnD spec: can contain 'beginDrag', 'endDrag', 'canDrag' and 'isDragging' methods
const lpiSource = {
    beginDrag(props) {
        console.log('beginDrag')
        return {'name': props.name};
    },

    endDrag(props, monitor, component) {
        // console.log('endDrag')
        // console.log(monitor.getItemType()) // LeftPaneItem
        // console.log(monitor.getItem()) // {'abc': 123}
        // console.log(monitor.getDropResult())
        return {};
    }
};

//react-DnD collector function
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        hovered: monitor.getItemType(),
    }
}


class LeftPaneItem extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { connectDragSource, isDragging, hovered } = this.props;
        return connectDragSource(
            <div><Button>{this.props.name}</Button></div>
        );
    }
}

LeftPaneItem.propTypes = {
    name: React.PropTypes.string,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(LeftPaneItem);
