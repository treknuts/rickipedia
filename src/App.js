import './App.css';
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Characters from './Characters';
import Home from './Home';
const axios = require('axios');


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <Link to="/" className="header"><h1>Rickipedia</h1></Link>
          <div className="nav-list">
            <Link id="characters" to='/characters'>Characters</Link>
            <Link id="episodes" to='/episodes'>Episodes</Link>
            <Link id="locations" to='/locations'>Locations</Link>
          </div>
        </div>  
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/characters" component={Characters}/>
            <Route exact path="/episodes" component={this}/>
            <Route exact path="/Locations" component={this}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
