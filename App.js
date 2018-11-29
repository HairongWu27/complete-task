import React, { Component } from 'react';
import {connect} from 'react-redux';
import AddTodo from './components/AddTodo/';
import ListTask from './components/ListTask/';
import ClearTask from './components/ClearTask';
import MarkAllTask from './components/MarkAllTask';
import  {addTodo, toggleTodo, clearTask, markAllTask} from './action';


class App extends Component {
  render() {
    var listA=this.props.state;
    return (
      <div>
        <AddTodo addTodo={this.props.addtodo}/>
        <MarkAllTask Click={this.props.markalltaskA}/>
        <ClearTask Click={this.props.cleartaskA}/>
        <ListTask list={listA} ToDoClick={this.props.toggleToDo}/>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    state: state,
  };
};


function mapDispatchToProps(dispatch) {
  return({
    addtodo: (text)=>dispatch(addTodo(text)),
    toggleToDo: (id) => dispatch(toggleTodo(id)),
    cleartaskA: () => dispatch(clearTask()),
    markalltaskA: ()=> dispatch(markAllTask()),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


