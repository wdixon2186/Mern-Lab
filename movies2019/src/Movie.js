import React, { Component } from "react";
import './Movie.css';
import axios from "axios";
import listOfMovies from "./data/movie-data.json";
import { Route, Link, Switch } from "react-router-dom";

class Movie extends Component {
  constructor() {
    super()

    this.state = {movie: {}}
  }
  componentDidMount() {
		axios
			.get(`http://localhost:8080/${this.props.match.params.title}`)
			.then(res => {
				console.log(res);
				this.setState({ movie: res.data });
			})
			.catch(err => {
				console.error(err);
			});
	}
  render() {
    // let list = listOfMovies;
    // let movieToDisplay = list.find(element => {
    //   return element.title === this.props.match.params.title;
    // });

    return (
      // <div>
      //   <h1>{movieToDisplay.title}</h1>
      //   <img class='imgMovie' src={movieToDisplay.image}></img>
      //   <p>Director: {movieToDisplay.director}</p>
      //   <p>Writers: {movieToDisplay.writer}</p>
      //   <a class='movie' href={movieToDisplay.homePage}>Read More</a>
        
      // </div>
      <div>
      <h1>{this.state.movie.title}</h1>
      <img class='imgMovie' src={this.state.movie.image}></img>
      <p>Director: {this.state.movie.director}</p>
      <p>Writers: {this.state.movie.writer}</p>
      <a class='movie' href={this.state.movie.homePage}>Read More</a>
      
    </div>
    );
  }
}

export default Movie;
