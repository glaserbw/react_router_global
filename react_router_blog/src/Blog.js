import React, { Component } from 'react';
import './App.css';


class Blog extends Component {
  render() {
    return (
      <div className="App">
        <h2>{this.props.post.title}</h2>
        <h3>Concoted by: {this.props.post.author}</h3>
        
      </div>
    );
  }
}

export default Blog;