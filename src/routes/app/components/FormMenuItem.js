import React from 'react';
import { MenuItem } from 'react-bootstrap';

class FormMenuItem extends React.Component{
	render() {
		if(this.props.divider){
			return(
				<MenuItem divider />
		  );
		}
		return(
			<MenuItem eventKey={this.props.eventKey} >
				{ this.props.labelName }
			</MenuItem>
	  );
  	}
}

FormMenuItem.defaultProps = {
	labelName:'Custom Label',
	eventKey : '1',
	divider : false
};

FormMenuItem.propTypes = {
  labelName: React.PropTypes.string,
	eventKey: React.PropTypes.string,
	divider: React.PropTypes.bool
};

export { FormMenuItem };
