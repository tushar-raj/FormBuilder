// @flow

import React from 'react';
import { Button } from 'react-bootstrap';



class FormButton extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='formComponent'><Button>{this.props.id}</Button></div>
        );
    }
}

FormButton.propTypes = {
    id: React.PropTypes.string,
};

//code for react-DnD:
//export default DragSource(type, spec, collect)(MyComponent);
export default FormButton//DragSource(ItemTypes.LEFTPANEITEM, lpiSource, collect)(FormButton);
