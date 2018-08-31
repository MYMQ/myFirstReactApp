import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      todoList:[],
      userInput:'',
      count:0
    }
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    console.log(this.state.userInput)
    this.setState({userInput:e.target.value})
  }

  handleClick(event){
    event.preventDefault();
    console.log(this.state.userInput)
    var presentList =this.state.todoList.slice();
    console.log(event.target.value);
    var count=this.state.count+1;
    this.setState({todoList:presentList.concat({input:this.state.userInput, count:count}),  userInput:'', count:count});
  }
  handleDelete(e,i){
    event.preventDefault();
    this.state.todoList.splice(i,1);
    this.setState({todoList:this.state.todoList})
  }
  render(){
    return(
    <div>
    <InputLine onChange={this.handleChange} onClick={this.handleClick} input={this.state.userInput}/>
    <TodoList val={this.state.count} todoList={this.state.todoList} delete={(e)=>this.handleDelete(e)} />
  </div>
)
  }
}
export default TodoApp;
