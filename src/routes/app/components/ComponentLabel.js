import React from 'react';

class DraggableComponentLabel extends React.Component{
	render() {
	    return(
        <div className='componentLabels'>
          <img src={this.props.imagePath} title={this.props.componentTitle}/>
          <span>{this.props.componentTitle}</span>
        </div>
	    );
  	}
}

DraggableComponentLabel.propTypes = {
  imagePath:React.PropTypes.string,
  componentTitle:React.PropTypes.string
};

export { DraggableComponentLabel };
