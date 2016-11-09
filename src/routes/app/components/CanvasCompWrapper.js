// @flow

import React from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash.flow';

import ItemTypes from '../../../constants/itemTypes';


const ccSource = {
    beginDrag(props) {
        return {'index': props.index};
    },

    endDrag(props, monitor, component) {
        return {};
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        hovered: monitor.getItemType(),
    }
}

const ccTarget = {
    // drop(props, monitor, component) {
    //
    //     return {}
    // },

    drop(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Determine rectangle on screen
        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // // Dragging downwards
        // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        //     return;
        // }
        //
        // // Dragging upwards
        // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        //     return;
        // }

        props.reorderComps(dragIndex, hoverIndex);

        return {'fromDrop': 123}
    },

};

//react-DnD collector function
function collectTarget(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        droppedItemType: monitor.getItemType(),
    };
}

class CanvasCompWrapper extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const { connectDragSource, isDragging, hovered } = this.props;
        const { connectDropTarget, isOver, droppedItemType } = this.props;
        return connectDragSource(connectDropTarget(
            <div className = 'canvasCompWrapper'>
                {this.props.children}
            </div>
        ));
    }
}

export default flow(
  DragSource(ItemTypes.CANVASCOMPONENT, ccSource, collectSource),
  DropTarget(ItemTypes.CANVASCOMPONENT, ccTarget, collectTarget)
)(CanvasCompWrapper)
