// @flow

import React from 'react';

import { FormRadioButton } from "./FormRadioButton.js"



class FormRadioGroup extends React.Component {

    static defaultProps: {
        groupLabelName: string
    };

    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.getComponentData(this.currentItems)
    }

    render() {
        let elementId = this.props.id;
        let elementDataObj = this.props.dataForGeneratingElements;
        if(typeof elementDataObj == 'undefined'){
            elementDataObj = {
                elementData:[
                    {labelName:'Default Value 1'},
                    {labelName:'Default Value 2'}
                ],
                label:'Default Radio Group Label'
            }

        }

        this.currentItems = {
          id:this.props.id,
          component:'FormRadioGroup',
          elementData:elementDataObj.elementData,
          label:elementDataObj.label
        }

        const listOfItems = elementDataObj.elementData.map((item,index) =>
            <FormRadioButton name={elementId} key = { index } labelName = { item.labelName } />
        );

        return (
            <div className='formComponent' onClick={this.handleClick}>
                <h3> { elementDataObj.label } </h3>
                {listOfItems}
            </div>
        );
    }
}

FormRadioGroup.defaultProps = {
   groupLabelName:'Default Radio Label'
};

FormRadioGroup.propTypes = {
    id: React.PropTypes.string,
};



//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormRadioGroup//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormRadioGroup);
