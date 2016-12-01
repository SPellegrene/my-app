//imports the Component attribute from react
import React, { Component } from 'react';
// import moment from 'moment';
//Component 1
class App extends Component {
  constructor(props){
    super(props)
    let listItems = JSON.parse(localStorage.getItem('todos'));
    if(!listItems || listItems.length === 0){
      listItems= [
        {
          text: <strong>Please Enter List</strong>,
          completed:false
        },
        {
          text:'Take Out Trash',
          completed:false
        },{
          text:'Clean Garage',
          completed: false
        },{
          text:'Sweep Floor',
          completed:false
        }
      ]
    }
    this.state= {
      todos: listItems,
      newItemValue: ''
    }
  }
  whenSubmit(e){
    e.preventDefault();
    console.log(this.state.newItemValue);
    let newToDo = {
      text:this.state.newItemValue,
      completed:false
    }
    this.setState({
      todos: this.state.todos.concat([newToDo]),
      newItemValue: ''
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos.concat([newToDo])))

  }

  whenClicked(index, e){
    console.log('people', index);
    var head=this.state.todos.slice(0,index);
    var tail=this.state.todos.slice(index +1, this.state.todos.length);
    this.setState({
      todos:head.concat(tail)
    })
    localStorage.setItem('todos', JSON.stringify(head.concat(tail)))
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
//We are now creating a div, this is essentially just a place where things will be placed on the page
      <div className="App">
        <h3>To-Do list. Nothing else.</h3>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <input onChange={this.whenChanged.bind(this)} value={this.state.newItemValue} type="text" placeholder=" Enter Task Here" />
          <button>Add</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo, index)=>{
            return(
              <li onClick={this.whenClicked.bind(this, index)} key={index}>{todo.text}</li>
            )
          }
        )
        }
        </ul>
        <h5>Click on items to delete.</h5>

      </div>
    );
  }
}
//This is boiler plate, however can go on the same line where the class is created as well. Personal preference.
export default App;
