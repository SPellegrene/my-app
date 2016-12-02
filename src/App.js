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

  whenDeleteClicked(index, e){
    console.log('people', index);

    var head=this.state.todos.slice(0,index);
    var tail=this.state.todos.slice(index +1, this.state.todos.length);
    this.setState({
      todos:head.concat(tail)
    })
    localStorage.setItem('todos', JSON.stringify(head.concat(tail)))
  }

  whenCompletedClicked(index, e){
    let newItems = this.state.todos.slice(0);
    newItems[index].completed=!newItems[index].completed;
    this.setState({
      todos: newItems
    })
    localStorage.setItem(
      'todos', JSON.stringify(newItems))


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
        <h3>Get Your Stuff Done</h3>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <input onChange={this.whenChanged.bind(this)} value={this.state.newItemValue} type="text" placeholder=" Enter Task Here" />
          <button>Add</button>
        </form>
        <ul>
        {
          this.state.todos.map((todo, index)=>{
            return(
              <li>
              <i className="ion-ios-close" onClick={this.whenDeleteClicked.bind(this, index)}/>
              <span onClick={this.whenCompletedClicked.bind(this, index)} style={{textDecoration: todo.completed ? 'line-through':'none'}} key={index}>{todo.text}</span>
              </li>

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
