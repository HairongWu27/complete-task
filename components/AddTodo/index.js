
import React, { Component } from 'react';
import {connect} from 'react-redux';
//import {setFilter, setInStock, addTodo} from '../../Reducer';





class AddTodo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {inputa: '', all:[]};
  }
  handleInput = e => {
    if(e.keyCode !=='/n'){
      this.setState({inputa: e.target.value});
      this.props.addTodo(e.target.value);
    }else{
      console.log('enter char');
    }
  };

 
 
  
  render() {
    console.log(this.props.todos);
    return (
      <form>
        <input type="text"
               placeholder="Search..."
               value={this.state.inputa} 
               onChange={this.handleInput}
         />
      
      </form>
    );
  }
  }
  export default AddTodo;
 

  
  