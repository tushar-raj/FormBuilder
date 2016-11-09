import React from 'react';
import { FormControl } from 'react-bootstrap';

class BasicInputText extends React.Component{
   constructor(props){
     super(props);
     this.state = {
         value:this.props.value
     }
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event){
       this.setState({value: event.target.value});
       this.props.updatedValue(event.target.value, this.props.type);
   }
   componentWillReceiveProps(nextProps) {
       this.setState({value: nextProps.value});       
    }
   render() {
       return(
           <FormControl
              type="text"
              placeholder="Enter text"
              value={this.state.value || ''}
              onChange={this.handleChange}
            />
       );
     }
 }

 BasicInputText.defaultProps = {
 }

 BasicInputText.propTypes = {
 }

 export default BasicInputText;
