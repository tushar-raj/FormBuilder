// @flow

import React from 'react';
import { Button } from 'react-bootstrap';



class FormButton extends React.Component {

    constructor(props: any) {
        super(props);
        const self: any = this;
        self.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const self: any = this;
        this.props.getComponentData(self.currentItems);
    }

    render() {
        let elementId: string = this.props.id;
        let elementDataObj: Object = this.props.dataForGeneratingElements;
        if(typeof elementDataObj == 'undefined'){
            elementDataObj = {
                elementData:[
                    {style:'default'},
                    {size:'large'}
                ],
                label:'Default Button'
            }
        }

        const self: any = this;

        self.currentItems = {
          id: this.props.id,
          component: 'FormButton',
          elementData: elementDataObj.elementData,
          label: elementDataObj.label
        }

        return (
            <div className='formComponent' onClick={this.handleClick}>
                <Button
                    bsStyle = {elementDataObj.elementData[0].style }
                    bsSize = {elementDataObj.elementData[1].size }
                >
                    {elementDataObj.label}
                </Button>
            </div>
        );
    }
}

FormButton.propTypes = {
    id: React.PropTypes.string,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormButton//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormButton);
