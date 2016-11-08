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
        console.log('uid', this.props.id);
        this.props.getComponentData(this.currentItems)
    }

    render() {

        let elementData = this.props.dataForGeneratingElements;
        if(typeof elementData == 'undefined' || elementData.length == 0){
            elementData = [
                {labelName:'Default Value 1'},
                {labelName:'Default Value 2'}
            ];
        }

        this.currentItems = {
          id:this.props.id,
          component:'FormRadioGroup',
          elementData:elementData,
          label:this.props.groupLabelName || RadioButtonGroup.defaultProps.groupLabelName
        }

        const listOfItems = elementData.map((item,index) =>
            <FormRadioButton key = { index } labelName = { item.labelName } />
        );

        return (
            <div className='formComponent' onClick={this.handleClick}>
                <h3> { this.props.groupLabelName || FormRadioGroup.defaultProps.groupLabelName } </h3>
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
