// @flow

import React from 'react';
import { DragSource } from 'react-dnd';
import { ComponentLabel } from './ComponentLabel';
import { Row, Col } from 'react-bootstrap';

import ItemTypes from '../../../constants/itemTypes';

//react-DnD spec: can contain 'beginDrag', 'endDrag', 'canDrag' and 'isDragging' methods
const lpiSource = {
    beginDrag(props) {
        return {'name': props.name};
    },

    endDrag(props, monitor, component) {
        // console.log('endDrag')
        // console.log(monitor.getItemType()) // LeftPaneItem
        // console.log(monitor.getItem()) // {'name': someName}
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
            <div className='leftpaneitem w3-theme-action'>
                <img
                    src = { require("../assets/" + this.props.imagePath) }
                    title = { this.props.componentTitle }
                    className = 'leftPaneItemImage'
                />
                <span
                    className = 'leftPaneItemText'
                >
                    {this.props.componentTitle}
                </span>
            </div>
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
