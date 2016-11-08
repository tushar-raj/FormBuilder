// @flow

import React from 'react';

import { FormRadioButton } from "./FormRadioButton.js"



class FormRadioGroup extends React.Component {

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

        const listOfItems = elementData.map((item,index) =>
            <FormRadioButton key = { index } labelName = { item.labelName }
            />
        );

        return (
            <div className='formComponent' >
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
