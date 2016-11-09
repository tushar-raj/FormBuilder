import React from 'react';
import { Radio } from 'react-bootstrap';

class FormRadioButton extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
	    return(
			<Radio name={this.props.name} value = { this.props.labelName }>
		      {this.props.labelName}
		    </Radio>
	    );
  	}
}

FormRadioButton.defaultProps = {
	labelName:'Custom Label'
};

FormRadioButton.propTypes = {
  labelName: React.PropTypes.string
};

export { FormRadioButton };
