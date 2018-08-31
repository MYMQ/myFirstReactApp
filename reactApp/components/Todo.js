import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  constructor(props){
    super(props);
    this.state={
      condition:false
    }
  }
  handleClick(event){
    event.preventDefault();
    this.state.condition=!this.state.condition;
    var style=this.state.condition ? ({textDecorationLine: 'line-through', textDecorationStyle: 'solid'}) : undefined;
    this.setState({style:style})
  }
  render(){

    return (
      <div style={this.state.style} >
        <button onClick={(e)=>this.handleClick(e)} >T</button>
        {this.props.todo}
        <button onClick={(e)=>this.props.delete(e,this.props.index)}>D</button>
      </div>
    )
  }
}
export default Todo;
