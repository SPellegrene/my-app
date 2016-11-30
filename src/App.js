//imports the Component attribute from react
import React, { Component } from 'react';
//Component 1
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      todos:['Take Out Trash', 'Clean Grandma','Sweep Poop'],
      newItemValue: ''
    }
  }
  whenSubmit(e){
    e.preventDefault();
    console.log(this.state.newItemValue);
    this.setState({
      todos: this.state.todos.concat([this.state.newItemValue]),
      newItemValue: ''
    })
  }

  whenClicked(index, e){
    console.log('people', index);
    var head=this.state.todos.slice(0,index);
    var tail=this.state.todos.slice(index +1, this.state.todos.length);
    this.setState({
      todos:head.concat(tail)
    })
  }

  whenChanged(e){
    this.setState({
      newItemValue: e.target.value
    })
  }
//this line is boiler plate is required in every component in React
  render() {
//return always returns the render in React
    return(
//We are now creating a div, this is essentially just a plce where things will be placed on the page
      <div className="App">
        <h3>To-Do List</h3>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <input onChange={this.whenChanged.bind(this)} value={this.state.newItemValue} type="text" placeholder="HardPoop" />
          <button>Add</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo, index)=>{
            return(
              <li onClick={this.whenClicked.bind(this, index)} key={index}>{todo}</li>
            )
          }
        )
        }
        </ul>
      </div>
    );
  }
}
//This is boiler plate as well, however can go on the same line where the class is created as well. Personal preference.
export default App;
