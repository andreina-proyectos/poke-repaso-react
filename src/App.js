import React from 'react';
import './App.css';
import {fetchPokeData} from './services/fetchPokeData';
import PokeList from './components/PokeList';

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

        const newPokeData = data.map((pokeItem, index) => {
          return {...pokeItem, newid:index}
        })

        this.setState({
          pokeData: newPokeData
        })
      })
  }

  render() {
  const {pokeData} = this.state;
    return (
      <div className="app">
        <h1 className="title">mis pokemones felices</h1>
        <PokeList 
          pokeData={pokeData}
        />

      </div>
    );
  }
}
              
export default App;
