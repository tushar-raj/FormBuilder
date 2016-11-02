// @flow

import React from 'react';
import { DragSource } from 'react-dnd';
import { Button } from 'react-bootstrap';

import ItemTypes from '../../../constants/itemTypes';

//code for react-DnD:
const lpiSource = {
    beginDrag(props) {
        console.log('dragging')
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


class LeftPaneItem extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { connectDragSource, isDragging } = this.props;
        return connectDragSource(
            <div><Button>{this.props.name}</Button></div>
        );
    }
}

LeftPaneItem.propTypes = {
    name: React.PropTypes.string,
    connectDragSource: React.PropTypes.func.isRequired,
    isDragging: React.PropTypes.bool.isRequired
};

//code for react-DnD:
export default DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(LeftPaneItem);
