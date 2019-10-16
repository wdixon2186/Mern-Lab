import React, { Component } from "react";

import listOfMovies from "./data/movie-data.json";
import { Route, Link, Switch } from "react-router-dom";

class MovieList extends Component {
	render() {
		let list = listOfMovies.map(item => {
			return (
				<div key={item.name}>
					<p>
						<Link to={"/" + item.name}>
							<img src={item.image}></img>
						</Link>
					</p>
				</div>
			);
		});
		return <div>{list}</div>;
	}
}

export default MovieList;
