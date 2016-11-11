import React from 'react';
import { Radio } from 'react-bootstrap';

class BasicRadioButton extends React.Component{
   constructor(props){
     super(props);
     this.state = {
         value:this.props.value
     }
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event){
       this.setState({value: event.target.value});
	   this.props.updatedValue(event.target.value, this.props.name, this.props.labelName);
   }
   componentWillReceiveProps(nextProps) {
       this.setState({value: nextProps.value});
    }
   render() {
       if(this.props.checked == 'checked'){
           return(
                <Radio
                    checked
                    name={this.props.name}
                    onChange={this.handleChange}
                    value={this.state.value || ''}
                >
                    { this.props.labelName }
                </Radio>
           );
       } else {
           return(
                <Radio
                    name={this.props.name}
                    onChange={this.handleChange}
                    value={this.state.value || ''}
                >
                    { this.props.labelName }
                </Radio>
           );
       }

     }
 }

 BasicRadioButton.defaultProps = {
 }

 BasicRadioButton.propTypes = {
 }

 export default BasicRadioButton;
