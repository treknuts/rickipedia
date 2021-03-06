import React, { useState } from 'react';
import './app.scss';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Locations from './components/Locations';
import MyNavbar from './components/Navbar';
import { Container } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        {/* <div id="header" className="header surface1">
          <Link to="/" className="text-blue"><h1>Rickipedia</h1></Link>
          <div className="nav-list">
            <Link id="characters" to='/characters' className="nav-item text2">Characters</Link>
            <Link id="episodes" to='/episodes' className="nav-item text2">Episodes</Link>
            <Link id="locations" to='/locations' className="nav-item text2">Locations</Link>
          </div>
        </div> */}
        <MyNavbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </BrowserRouter>
</Container>
  );
}

export default App;
