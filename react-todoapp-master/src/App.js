import React, {
  Component
} from 'react';
import {  BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import ToDo from './components/ToDo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/Addtodo';
//import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

class App extends Component {
  state = {
    todo: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then (res=>this.setState({todo:res.data}))
  }



  markComplete = id => {
    this.setState({
      todo: this.state.todo.map(todos => {
        if (todos.id === id) {
          todos.completed = !todos.completed;
        }
        return todos;
      })
    });
  }

delTodo =(id)=> {
  axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res=> this.setState ({todo: 
   [...this.state.todo.filter(todos=> todos.id !==id) ]}));
}


addTodo=(title )=>{
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed:false 
  })
  .then (res=> this.setState({todo:

[...this.state.todo,res.data] }));
}
render() {
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header/>
      <Route exact path ="/" render ={props =>(
        <React.Fragment>

      <AddTodo addTodo ={this.addTodo}/>

      <ToDo todo={this.state.todo} markComplete={this.markComplete}
      delTodo={this.delTodo}/>
      </React.Fragment>
      )}/>
      <Route path ="/about" component ={About }/>

      </div>
      </div>
      </Router>
  );

}
}

export default App;