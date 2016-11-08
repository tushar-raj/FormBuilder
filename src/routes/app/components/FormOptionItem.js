import React from 'react';

class FormOptionItem extends React.Component{
	render() {
			return(
				<option value = { this.props.value }>{this.props.labelName}</option>
		  );
		}
}

FormOptionItem.defaultProps = {
	labelName:'Select',
	value : '-1'
};

FormMenuItem.propTypes = {
  labelName: React.PropTypes.string,
	value: React.PropTypes.string
};

export { FormOptionItem };
