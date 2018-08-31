import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <input onChange={(e)=>this.props.onChange(e)} type="text" name="todo" placeholder="thing to do" value={this.props.input}/>
        <button onClick={(e) => this.props.onClick(e)}>Submit</button>
      </div>)
  }
}
export default InputLine;
