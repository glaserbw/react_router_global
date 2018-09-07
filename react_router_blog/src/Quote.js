import React, { Component } from 'react';
import './App.css';

class Quote extends Component {
  constructor(props){
    super(props);
      this.state = {
        seinField: ""
    }
  }

  componentDidMount(){
    var base = this

    let feldApi = 'https://seinfeld-quotes.herokuapp.com/random';
    fetch(feldApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
          base.setState({ 
            seinField: json.quote,
            author: json.author,
            season: json.season,
            episode: json.episode
           });
      }).catch((ex) => {
        console.log('An error occured while parsing!', ex)
      })
  }


  render() {
       let quote = this.state.seinField;
       let author = this.state.author;
       let season = this.state.season;
       let episode = this.state.episode;
       if (this.state.seinField){
         return (
           <div className="App">
             <h2>"{quote}"</h2>
             <h3>{author}</h3>
             <h4>From S{season}E{episode}</h4>
           </div>
         )
       }
       return (
         <div className="App">
           <h1>My favorite Shakespeare poem:</h1>
           Loading...
         </div>
       )
    }

  }

export default Quote;
