import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component{
  constructor(props){
    super(props);
    this.state={count:0};
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(e){
      var count=this.state.count+1;
      this.state.count=count;
  }
  render(){
    return (
      this.props.todoList.map((todo,index)=> (<Todo onClick={(e)=>this.handleClick(e)} delete={(e)=>this.props.delete(e)} index={index} key={todo.count.toString()} id={todo.count} todo={todo.input}/>))
    )
  }
}
export default TodoList;
