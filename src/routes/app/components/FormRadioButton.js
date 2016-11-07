import React from 'react';

class FormRadioButton extends React.Component{
	render() {
	    return(
        <div>
  	      <label>
            <input type="radio" name={this.props.name} value={this.props.radioBtnValue} />
             {this.props.labelName}
          </label>
        </div>
	    );
  	}
}

FormRadioButton.defaultProps = {
  name:'Custom Radio Button',
  labelName:'Custom Label',
  radioBtnValue:'Custom Value'
};

FormRadioButton.propTypes = {
  name:React.PropTypes.string
};

export { FormRadioButton };
