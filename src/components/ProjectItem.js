import React, { Component } from 'react';

//Component 1
class ProjectItem extends Component {
  render() {
    return (
      <li className="Projects">
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

export default ProjectItem;
