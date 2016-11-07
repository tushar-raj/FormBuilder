import React from 'react';

class CanvasRadioButton extends React.Component{
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

CanvasRadioButton.defaultProps = {
  name:'Custom Radio Button',
  labelName:'Custom Label',
  radioBtnValue:'Custom Value'
};

CanvasRadioButton.propTypes = {
  name:React.PropTypes.string
};

export { CanvasRadioButton };
