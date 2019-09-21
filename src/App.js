import React from 'react';
import './App.css';
import {fetchPokeData} from './services/fetchPokeData';

class App extends React.Component {
 constructor(props) {
  super(props);
    this.state = {
     pokeData: []
    }
  }

  componentDidMount() {
    this.getPokeDataFromApi()
  }

  getPokeDataFromApi() {
    fetchPokeData()
      .then(data => {
        this.setState({
          pokeData: data
        })
      })
  }

  render() {
    console.log('me estoy pintando', this.state.pokeData)
    return (
      <div className="app">
        <ul className="poke-list">
          {this.state.pokeData.map(pokeItem => 
            <li key={pokeItem.id} className="poke-card">
              <h2 className="poke-name">{pokeItem.name}</h2>
              
              <img src={pokeItem.url} alt="" className="poke-img"/>

              {pokeItem.types.map(type=>
                <p key={`${pokeItem.id}-type-${type}`} className="poke-type">{type}</p>
              )}
            </li>         
          )}
        </ul>
      </div>
    );
  }
}

export default App;
