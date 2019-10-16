import React, { Component } from "react";
import './Movie.css';
import listOfMovies from "./data/movie-data.json";
import { Route, Link, Switch } from "react-router-dom";

class Movie extends Component {
  render() {
    let list = listOfMovies;
    let movieToDisplay = list.find(element => {
      return element.title === this.props.match.params.title;
    });

    return (
      <div>
        <h1>{movieToDisplay.title}</h1>
        <img class='imgMovie' src={movieToDisplay.image}></img>
        <p>Director: {movieToDisplay.director}</p>
        <p>Writers: {movieToDisplay.writer}</p>
        <a class='movie' href={movieToDisplay.homePage}>Read More</a>
        
      </div>
    );
  }
}

export default Movie;
