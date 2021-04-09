import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDo extends Component {
    
  render() {
    return this.props.todo.map((todos) =>(
        <ToDoItem key ={todos.id} todos ={todos} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
    ));

      

  }
}

// PropTypes
ToDo.propTypes = {
  todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default ToDo;