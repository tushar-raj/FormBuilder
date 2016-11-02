// @flow

import React from 'react';
import { DropTarget } from 'react-dnd';
import { Panel } from 'react-bootstrap';

import ItemTypes from '../../../constants/itemTypes';

//react-DnD spec: can contain 'drop', 'hover' and 'canDrop' methods
const canvasTarget = {
    drop(props) {
        debugger
        console.log(props)
    }
};

//react-DnD collector function
function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class CenterPane extends React.Component {

    render() {
        const {connectDropTarget, isOver } = this.props;

        return connectDropTarget(
            <div style={{
                backgroundColor: 'salmon'
            }}>
                Canvas:
                <div id="Canvas" style={{
                    width: '90%',
                    height: '500px',
                    margin: 'auto',
                    backgroundColor: 'white'
                }}></div>
            </div>
        );
    }
}

//code for react-DnD:
//export default DropTarget(types, spec, collect)(MyComponent);
export default DropTarget(ItemTypes.LEFTPANEITEM, canvasTarget, collect)(CenterPane);

//(the canvas will be made the droptarget later, instead of the whole pane)
