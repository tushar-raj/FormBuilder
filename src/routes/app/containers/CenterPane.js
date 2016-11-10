// @flow

import React from 'react';

import Canvas from '../components/Canvas'
import LeftPaneItem from '../components/LeftPaneItem';
import FormButton from '../components/FormButton';
import FormTextbox from '../components/FormTextbox';
import FormRadioGroup from '../components/FormRadioGroup';
import FormCheckboxGroup from '../components/FormCheckboxGroup';
import FormDropdownButton from '../components/FormDropdownButton'
import FormTextArea from '../components/FormTextArea';
import FormSelectBox from '../components/FormSelectBox';

import CanvasCompWrapper from '../components/CanvasCompWrapper';

import { leftpaneToCanvasMap } from '../../../constants/Maps';
import PubSub from '../PubSub/PubSub';



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
                'FormTextbox': 0,
                'FormTextArea': 0,
                'FormButton': 0,
                'FormRadioGroup': 0,
                'FormCheckboxGroup':0,
                'FormDropdownButton':0,
                'FormSelectBox':0,
            },


        };
        PubSub.subscribe('updateCanvasComponent', this.updateSelectedComponentData.bind(this))

        const self: any = this;
        self.getComponentData = this.getComponentData.bind(this);
    }

    getComponentData(componentData: Object){
        this.props.getCurrentSelectedComponentData(componentData);
    }

    updateSelectedComponentData(updatedData: Object){
        var currentChildren = this.state.kids;
        for(var i=0; i<currentChildren.length; i++){
            if(updatedData.id == currentChildren[i].id){
                currentChildren[i].data = {
                    elementData:updatedData.elementData,
                    label:updatedData.label
                };
                break;
            }
        }
        this.setState({kids:currentChildren});
    }

    render() {
        const canvasKids: Object[] = [];

        //this map is needed for JSX syntax. Dynamic naming of comps needs function names.
        const components = {
            'FormTextbox': FormTextbox,
            'FormTextArea': FormTextArea,
            'FormButton': FormButton,
            'FormRadioGroup': FormRadioGroup,
            'FormCheckboxGroup':FormCheckboxGroup,
            'FormDropdownButton':FormDropdownButton,
            'FormSelectBox' : FormSelectBox,
        };

        for (var i = 0; i < this.state.numKids; i++) {
            let kid = this.state.kids[i];
            let CanvasComp = components[kid.type];

            canvasKids.push(
                //CanvasCompWrapper
                <CanvasCompWrapper key={i} index={i} reorderComps= { this.reorderComps.bind(this) }>
                    <CanvasComp
                        key={i}
                        id={kid.id}
                        dataForGeneratingElements={kid.data}
                        getComponentData = { this.getComponentData }
                    />
                </CanvasCompWrapper>
            );
        };

        return (
            <div id='canvasWrapper'>
                <Canvas
                    name="myCanvas"
                    addChild={this.onAddChild.bind(this)}
                    className='w3-border-theme'
                >

                    {canvasKids}

                </Canvas>
            </div>
        );
    }

    reorderComps(dragIndex: number, hoverIndex: number){
        const kids: Object[] = this.state.kids;
        const draggedKid: Object = kids[dragIndex];

        const l: number = Math.min(dragIndex, hoverIndex);
        const r: number = Math.max(dragIndex, hoverIndex);

        var newKids: Object[] = [...kids.slice(0, l), ...kids.slice(l+1, r+1), kids[l], ...kids.slice(r+1)];

        this.setState({
            kids: newKids,
        });
    }

    onAddChild(itemSign: Object) {
        const name: string = itemSign.name;
        const compToBeAdded: string = leftpaneToCanvasMap.get(name) || 'dummyKey';
        const compCountMap: Object = this.state.compCountMap;

        const newCountMap: Object = Object.assign({}, compCountMap, {
            [compToBeAdded] : compCountMap[compToBeAdded] + 1
        })
        var data;
        const compId: string = compToBeAdded ? compToBeAdded.toString() + this.state.compCountMap[compToBeAdded] : '1';
        const newKid: Object = {'type': compToBeAdded,  'id': compId, 'data':data};
        const newKidArray: Object[] = [...this.state.kids, newKid];

        this.setState({
            numKids: this.state.numKids + 1,
            kids: newKidArray,
            compCountMap: newCountMap,
        });
    }
}


CenterPane.propTypes = {
    getComponentData: React.PropTypes.func,
    updateComponentData: React.PropTypes.func,
};
