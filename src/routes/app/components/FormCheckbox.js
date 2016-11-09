import React from 'react';
import { Checkbox } from 'react-bootstrap';

class FormCheckbox extends React.Component{
	render() {
	    return(
			<Checkbox name={this.props.name} value = { this.props.labelName }>
		        {this.props.labelName}
	        </Checkbox>
	    );
  	}
}

FormCheckbox.defaultProps = {
  labelName:'Custom Label'
};

FormCheckbox.propTypes = {
  labelName:React.PropTypes.string
};

export { FormCheckbox };
