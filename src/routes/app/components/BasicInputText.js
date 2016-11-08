import React from 'react';
import { FormControl } from 'react-bootstrap';

class BasicInputText extends React.Component{
   constructor(props){
     super(props);
     this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event){
       console.log('current value', event.target.value, this.props.type)
       this.props.updatedValue(event.target.value, this.props.type);
   }
   render() {
       return(
           <FormControl
              type="text"
              defaultValue={this.props.value}
              placeholder="Enter text"
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
