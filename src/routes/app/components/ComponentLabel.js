import React from 'react';

class ComponentLabel extends React.Component{
	render() {
	    return(
        <div className='componentLabels'>
          <img src={this.props.imagePath} title={this.props.componentTitle}/>
          <span>{this.props.componentTitle}</span>
        </div>
	    );
  	}
}

ComponentLabel.propTypes = {
  imagePath:React.PropTypes.string,
  componentTitle:React.PropTypes.string,
  iconUnicode:React.PropTypes.string,
};

export { ComponentLabel };
