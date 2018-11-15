import React,{Component} from 'react';
import "./App.css"
export default class App extends Component{
  constructor(){
    super();
    this.state = {
      count : 0
    } 

  }
  handleIncrease = () =>{
    var count = this.state.count + 1;
    this.setState({count})
  }
  handleDecrease = () =>{
    var count = this.state.count - 1;
    this.setState({count})
  }
   render(){
       return (
           <div className = "box">
               <button onClick = {this.handleIncrease}>+</button>
               <button onClick = {this.handleDecrease}>-</button>
               <p>当前点击次数</p>
               <p>{this.state.count}</p>
           </div>
       )
   }
}

