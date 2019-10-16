import React from 'react';
import { Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import MovieList from './MovieList';
import Movie from './Movie';

function App() {
  return (
    <div>
      <nav>
        <Link to='/'>
          <h1>Home</h1>
        </Link>
      </nav>
      <main>
        <Route path='/' exact={true} component={MovieList} />
        <Route path='/:title' exact={true} render={routerProps => <Movie match={routerProps.match}/>} />
      </main>
    </div>
  );
}

export default App;

