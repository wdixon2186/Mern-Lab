import React, { Component } from "react";
import axios from "axios";
import listOfMovies from "./data/movie-data.json";
import { Route, Link, Switch } from "react-router-dom";
import "./MovieList.css";

class MovieList extends Component {
	constructor() {
		super();

		this.state = { data: [] };
	}
	componentDidMount() {
		axios
			.get("http://localhost:8080/")
			.then(res => {
				console.log(res);
				this.setState({ data: res.data });
			})
			.catch(err => {
				console.error(err);
			});
	}
	render() {
		// let list = listOfMovies.map(item => {
		// 	return (
		// 		<div key={item.title}>
		// 			<p>
		// 				<Link to={"/" + item.title}>
		// 					<img class="img" src={item.image}></img>
		// 				</Link>
		// 			</p>
		// 		</div>
		// 	);
		// });
		let list = this.state.data.map(item => {
			return (
				<div key={item.title}>
					<p>
						<Link to={"/" + item.title}>
							<img class="img" src={item.image}></img>
						</Link>
					</p>
				</div>
			);
		});
		return (
			<div>
				{list}
				<a href=''>CREATE</a>
			</div>
		);
	}
}

export default MovieList;
