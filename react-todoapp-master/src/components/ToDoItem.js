import React, { Component } from 'react';
import PropTypes from "prop-types";


export class ToDoItem extends Component {
    getStyle =() =>{
       return {
           background:'grey',
           padding:'10px',
           borderBottom:'1px #ccc dotted',
           textDecoration :this.props.todos.completed ? 'line-through':'none'
       }
        }
    
     
 render(){
     const { id, title}= this.props.todos;

     return (
         <div style={this.getStyle()}>
             <p> 
               <input type="checkbox" onChange ={this.props.markComplete.bind(this,id)}/>{' '}
                 {title}
                 <button onClick={this.props.delTodo.bind(this,id)}  style={btnStyle}> x</button> 
                 </p>
         </div>
     )
 }
}

ToDoItem.propTypes = { 
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };
 const btnStyle ={
     background: 'red',
     color: 'white',
     padding: '3px 7px',
     float: 'right',
     borderRadius: '50px',
     cursor: 'pointer'

 }
export default ToDoItem;
