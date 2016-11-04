// @flow

import React from 'react';

import Canvas from '../components/Canvas'
import LeftPaneItem from '../components/LeftPaneItem';
import CustomDiv from '../components/CustomDiv';
import CanvasButton from '../components/CanvasButton';
import CanvasTextbox from '../components/CanvasTextbox';
//import canvasMap from '../../../constants/Maps';

export default class CenterPane extends React.Component {

    //using the identifier 'kids' instead of 'children' to avoid confusion with react's special prop 'children'
    state: {
        numKids: number,
        kids: Object[],
    }

    constructor(props: any) {
        super(props);
        this.state = {
            numKids: 0,
            kids: [],
        };
    }

    render() {
        const canvasKids = [];

        // for (var i = 0; i < this.state.numKids; i++) {
        //     canvasKids.push(<CanvasTextbox key={i} name={'a' + i} />);
        // };

        //this map is needed for JSX syntax. Dynamic naming of comps needs function names.
        const components = {
            'CanvasTextbox': CanvasTextbox,
            'CanvasButton': CanvasButton,
        };



        for (var i = 0; i < this.state.numKids; i++) {
            let kid = this.state.kids[i];
            let CanvasComp = components[kid.type];
            canvasKids.push(<CanvasComp key={i} id={kid.id} />);
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

                    {canvasKids}


                </Canvas>
            </div>
        );
    }

    onAddChild(itemSign: Object) {
        // console.log('itemSign', itemSign)

        //move this elsewhere
        const leftpaneToCanvasMap = new Map([
            ['Button', 'CanvasButton'],
            ['Textbox', 'CanvasTextbox'],
        ])

        const name = itemSign.name;
        const compToBeAdded = leftpaneToCanvasMap.get(name);
        const compId = compToBeAdded ? compToBeAdded.toString() + '1' : '1';

        const newKid = {'type': compToBeAdded,  'id': compId};

        const newKidArray = [...this.state.kids, newKid]


        this.setState({
            numKids: this.state.numKids + 1,
            kids: newKidArray,
        });
    }
}
