import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// PAGE IMPORTS
import Home from './Home';
import Blog from './Blog';
import Quote from './Quote';
import FavMovie from './FavMovie';
import FoodFav from './FoodFav';
import About from './About';

const post = {
  title: 'Blog post',
  author: 'Brian',
  body: 'Content is King',
  comments: [ "I want to like it but I just don't" ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <Link to="/">Home</Link>{' '}
              <Link to="/Blog">Blog</Link>{' '}
              <Link to="/Quote">Words of Wisdom</Link>{' '}
              <Link to="/FavMovie">Favorite Movie</Link>{' '}
              <Link to="/FoodFav">Favorite Food</Link>{' '}
              <Link to="/About">About</Link>
            </nav>
            <Route exact path="/" component={Home} />
            <Route exact path="/Blog" component={
                () => (<Blog post={post} />) } />
            <Route exact path="/Quote" component={Quote} />
            <Route exact path="/FavMovie" component={FavMovie} />
            <Route exact path="/FoodFav" component={FoodFav} />
            <Route exact path="/About" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
