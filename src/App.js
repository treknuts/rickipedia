import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Characters from './Characters';
const axios = require('axios');


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character', { params: { page: 1 } }).then(function (response) {
      console.log(response.data.results);
      setCharacters(response.data.results);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);

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
            <Route exact path="/" component={this}/>
            <Route path="/characters" component={Characters}/>
            <Route exact path="/episodes" component={this}/>
            <Route exact path="/Locations" component={this}/>
          </Switch>
        </div>
      </BrowserRouter>
      

      {/* <div className="content">
        { characters.map((character) => <CharacterCard key={character.id} character={character}/> )}
      </div> */}
    </div>
  );
}

export default App;
