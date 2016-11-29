import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

//Component 1
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'eCommerce Cart',
          category: 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My app
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
