import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
      <div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="/">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      {/*<a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>*/}
		      <a class="nav-item nav-link" href="/Blog">Blog</a>
		      <a class="nav-item nav-link" href="/Quote">Words of Wisdom</a>
		      <a class="nav-item nav-link" href="/FavMovie">Favorite Movie</a>
		      <a class="nav-item nav-link" href="/FoodFav">Favorite Food</a>
		      <a class="nav-item nav-link" href="/About">About</a>
		    </div>
		  </div>
		</nav>
      </div>
    );
  }
}

export default NavBar;