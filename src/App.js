import React from 'react';
import './styles/app.css';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Characters from './components/Characters';
import Home from './components/Home';
import Episodes from './components/Episodes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header surface1">
          <Link to="/"><h1>Rickipedia</h1></Link>
          <div className="nav-list">
            <Link id="characters" to='/characters'>Characters</Link>
            <Link id="episodes" to='/episodes'>Episodes</Link>
            <Link id="locations" to='/locations'>Locations</Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/Locations" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
