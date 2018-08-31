import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp'
//import TodoApp from './components/TodoApp';
//Todo: An individual todo item. The Todo boxes we've drawn in the picture in our head will include the task text as well as an X button to delete the Todo.
//TodoList: The box around the assortment of Todos in our picture.
//InputLine: A row at the top of our app that has an input field and a submit button. This is how a user will add new Todos.
//TodoApp: A box around the whole thing. This is what we will pass into render, and later we'll choose this as a good place to put some functionality.
// class Todo extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       condition:false
//     }
//   }
//   handleClick(event){
//     event.preventDefault();
//     this.state.condition=!this.state.condition;
//     var style=this.state.condition ? ({textDecorationLine: 'line-through', textDecorationStyle: 'solid'}) : undefined;
//     this.setState({style:style})
//   }
//   render(){
//
//     return (
//       <div style={this.state.style} >
//         <button onClick={(e)=>this.handleClick(e)} >Q</button>
//         {this.props.todo}
//       </div>
//     )
//   }
// }
// class InputLine extends React.Component{
//   constructor(props){
//     super(props);
//   }
//
//   render(){
//     return(
//       <div>
//         <input onChange={(e)=>this.props.onChange(e)} type="text" name="todo" placeholder="thing to do" value={this.props.input}/>
//         <button onClick={(e) => this.props.onClick(e)}>Submit</button>
//       </div>)
//   }
// }
// class TodoList extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={count:0};
//     this.handleClick=this.handleClick.bind(this)
//   }
//   handleClick(e){
//       var count=this.state.count+1;
//       this.state.count=count;
//   }
//   render(){
//     return (
//       this.props.todoList.map((todo)=> (<Todo onClick={(e)=>this.handleClick(e)} key={todo.count.toString()} id={todo.count} todo={todo.input}/>))
//     )
//   }
// }
// class TodoApp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       todoList:[],
//       userInput:'',
//       count:0
//     }
//     this.handleClick=this.handleClick.bind(this);
//     this.handleChange=this.handleChange.bind(this);
//   }
//
//   handleChange(e){
//     console.log(this.state.userInput)
//     this.setState({userInput:e.target.value})
//   }
//
//   handleClick(event){
//     event.preventDefault();
//     console.log(this.state.userInput)
//     var presentList =this.state.todoList.slice();
//     console.log(event.target.value);
//     var count=this.state.count+1;
//     this.setState({todoList:presentList.concat({input:this.state.userInput, count:count}),  userInput:'', count:count});
//   }
//   render(){
//     return(
//     <div>
//     <InputLine onChange={this.handleChange} onClick={this.handleClick} input={this.state.userInput}/>
//     <TodoList val={this.state.count} todoList={this.state.todoList} />
//   </div>
// )
//   }
// }
ReactDOM.render(<TodoApp />, document.getElementById('root'));
