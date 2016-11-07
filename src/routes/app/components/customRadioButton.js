import React from 'react';

class CustomRadioButton extends React.Component{
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

CustomRadioButton.defaultProps = {
  name:'Custom Radio Button',
  labelName:'Custom Label',
  radioBtnValue:'Custom Value'
};

CustomRadioButton.propTypes = {
  name:React.PropTypes.string
};

export { CustomRadioButton };
