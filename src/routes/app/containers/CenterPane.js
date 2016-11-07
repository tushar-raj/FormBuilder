// @flow

import React from 'react';

import Canvas from '../components/Canvas'
import LeftPaneItem from '../components/LeftPaneItem';
import CanvasButton from '../components/CanvasButton';
import CanvasTextbox from '../components/CanvasTextbox';
import RadioButtonGroup from '../components/radioButtonGroup';
import { leftpaneToCanvasMap } from '../../../constants/Maps';

export default class CenterPane extends React.Component {

    //using the identifier 'kids' instead of 'children' to avoid confusion with react's special prop 'children'
    state: {
        numKids: number,
        kids: Object[],
        compCountMap: Object,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            numKids: 0,
            kids: [],
            compCountMap: {
                'CanvasTextbox': 0,
                'CanvasButton': 0,
                'RadioButtonGroup':0
            }

        };
    }

    render() {
        const canvasKids = [];

        //this map is needed for JSX syntax. Dynamic naming of comps needs function names.
        const components = {
            'CanvasTextbox': CanvasTextbox,
            'CanvasButton': CanvasButton,
            'RadioButtonGroup':RadioButtonGroup
        };

        for (var i = 0; i < this.state.numKids; i++) {
            let kid = this.state.kids[i];
            let CanvasComp = components[kid.type];
            canvasKids.push(<CanvasComp key={i} id={kid.id} />);
        };

        return (
            <div id='canvasWrapper'>
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

        const name = itemSign.name;
        console.log('name',name)
        const compToBeAdded = leftpaneToCanvasMap.get(name) || 'dummyKey';
console.log('compToBeAdded',compToBeAdded)
        const compCountMap = this.state.compCountMap;

        const newCountMap = Object.assign({}, compCountMap, {
            [compToBeAdded] : compCountMap[compToBeAdded] + 1
        })

        const compId = compToBeAdded ? compToBeAdded.toString() + this.state.compCountMap[compToBeAdded] : '1';
console.log('compId',compId)
        const newKid = {'type': compToBeAdded,  'id': compId};
        const newKidArray = [...this.state.kids, newKid]

        this.setState({
            numKids: this.state.numKids + 1,
            kids: newKidArray,
            compCountMap: newCountMap,
        });
    }
}
