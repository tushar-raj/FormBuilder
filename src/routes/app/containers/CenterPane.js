// @flow

import React from 'react';

import Canvas from '../components/Canvas'

export default class CenterPane extends React.Component {

    render() {
        const {connectDropTarget, isOver } = this.props;

        return (
            <div style={{
                backgroundColor: 'salmon'
            }}>
                Canvas:
                <Canvas />
            </div>
        );
    }
}
