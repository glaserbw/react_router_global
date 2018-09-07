import React, { Component } from 'react';
import './App.css';


class Blog extends Component {
  render() {
    return (
      <div className="container">
        <h2>{this.props.post.title}</h2>
        <h3>Concoted by: {this.props.post.author}</h3>
        <p>{this.props.post.body}</p>
        <h4>Comments: </h4> 
        <q>{this.props.post.comments}</q>
      </div>
    );
  }
}

export default Blog;