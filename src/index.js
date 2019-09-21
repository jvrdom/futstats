import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import './index.scss';
import HallOfFame from './containers/hallOfFame';
import CountryProfile from './containers/countryProfile';
// import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <nav className="navbar has-shadow is-dark" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
        </div>
      </div>
    </nav>
    <div>
      <Route exact path="/" component={HallOfFame} />
      <Route path="/test/:id" component={CountryProfile} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
