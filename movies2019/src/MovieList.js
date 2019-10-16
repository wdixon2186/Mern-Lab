import React, { Component } from "react";

import listOfMovies from "./data/movie-data.json";
import { Route, Link, Switch } from "react-router-dom";
import './MovieList.css';

class MovieList extends Component {
	render() {
		let list = listOfMovies.map(item => {
			return (
				<div key={item.title}>
					<p>
						<Link to={"/" + item.title}>
							<img class='img' src={item.image}></img>
						</Link>
					</p>
				</div>
			);
		});
		return <div>{list}</div>;
	}
}

export default MovieList;
