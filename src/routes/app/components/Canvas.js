// @flow

import React from 'react';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../../../constants/itemTypes';
import LeftPaneItem from './LeftPaneItem';
import CustomDiv from './CustomDiv';

import styles from '../styles/canvas.css'

//react-DnD spec: can contain 'drop', 'hover' and 'canDrop' methods
const canvasTarget: Object = {
    drop(props, monitor, component) {
        const draggedItemSignature: Object = monitor.getItem();
        props.addChild(draggedItemSignature);
        return {}
    }
};

//react-DnD collector function
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        droppedItemType: monitor.getItemType(),
    };
}

class Canvas extends React.Component {

    constructor(props: Object) {
        super(props);
    }

    render() {
        const {connectDropTarget, isOver: boolean, droppedItemType: string } = this.props;
        return connectDropTarget(
            <div
                className = {styles.canvas + ' w3-border-theme'}
            >
                {this.props.children}

            </div>
        );
    }
}

Canvas.propTypes = {
    name: React.PropTypes.string,
};

//code for react-DnD:
//export default DropTarget(types, spec, collect)(MyComponent);
export default DropTarget(ItemTypes.LEFTPANEITEM, canvasTarget, collect)(Canvas);
