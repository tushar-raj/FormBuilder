// @flow

import React from 'react';
import { DropTarget } from 'react-dnd';

import ItemTypes from '../../../constants/itemTypes';
import LeftPaneItem from './LeftPaneItem';
import CustomDiv from './CustomDiv';

//react-DnD spec: can contain 'drop', 'hover' and 'canDrop' methods
const canvasTarget = {
    drop(props, monitor, component) {
        console.log('drop monitor')
        console.log(monitor.getItem())
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

    constructor(props: any) {
        super(props);
    }

    render() {
        const {connectDropTarget, isOver, droppedItemType } = this.props;
        console.log(this.props)
        return connectDropTarget(
                id="Canvas"
                style={{
                        width: '90%',
                        height: '500px',
                        margin: 'auto',
                        backgroundColor: 'white'
                    }}
                name='abc'
                onClick={this.props.addChild}
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
