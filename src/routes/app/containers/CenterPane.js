// @flow

import React from 'react';

import Canvas from '../components/Canvas'
import LeftPaneItem from '../components/LeftPaneItem';
import CustomDiv from '../components/CustomDiv';

export default class CenterPane extends React.Component {

    state: {
        numChildren: number
    }

    constructor(props: any) {
        super(props);
        this.state = {
            numChildren: 1
        };
    }

    render() {
        const kids = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            kids.push(<LeftPaneItem key={i} name={'a' + i} />);
        };

        return (
            <div
                style={{
                    backgroundColor: 'salmon'
                }}

            >
                Canvas:
                <Canvas
                    name="myCanvas"
                    addChild={this.onAddChild.bind(this)}
                >

                    {kids}


                </Canvas>
            </div>
        );
    }

    onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}
