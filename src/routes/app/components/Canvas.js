// @flow

import React from 'react';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../../../constants/itemTypes';

//react-DnD spec: can contain 'drop', 'hover' and 'canDrop' methods
const canvasTarget = {
    drop(props) {
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

class Canvas extends React.Component {

    render() {
        const {connectDropTarget, isOver } = this.props;

        return connectDropTarget(

                <div id="Canvas" style={{
                    width: '90%',
                    height: '500px',
                    margin: 'auto',
                    backgroundColor: 'white'
                }}></div>
        );
    }
}

//code for react-DnD:
//export default DropTarget(types, spec, collect)(MyComponent);
export default DropTarget(ItemTypes.LEFTPANEITEM, canvasTarget, collect)(Canvas);
