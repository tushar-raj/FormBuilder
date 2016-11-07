// @flow

import React from 'react';
import { Button } from 'react-bootstrap';
import { CanvasRadioButton } from "./CanvasRadioButton.js"



class CanvasRadioGroup extends React.Component {

    static defaultProps: {
        groupLabelName: string
    };

    constructor(props: any) {
        super(props);
    }



    render() {

        let elementData = this.props.dataForGeneratingElements;
        if(typeof elementData == 'undefined' || elementData.length == 0){
            elementData = [
                {name:'defaultRadio', labelName:'Default Value 1', value:'default1'},
                {name:'defaultRadio', labelName:'Default Value 2', value:'default2'}
            ];
        }

        const listOfItems = elementData.map(
            (item,index) => <CanvasRadioButton
                key={index} name={item.name}
                labelName={item.labelName}
                radioBtnValue={item.value}
            />
        );

        return (
            <div>
                <h3>{this.props.groupLabelName || CanvasRadioGroup.defaultProps.groupLabelName}</h3>

                {listOfItems}

            </div>
        );
    }
}

CanvasRadioGroup.defaultProps = {
   groupLabelName:'Default Radio Label'
};

CanvasRadioGroup.propTypes = {
    id: React.PropTypes.string,
};



//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default CanvasRadioGroup//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(CanvasRadioGroup);
