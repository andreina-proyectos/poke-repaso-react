import React from 'react';
import './App.css';
import {fetchPokeData} from './services/fetchPokeData';
import PokeList from './components/PokeList';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
     pokeData: [],
     query:''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
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

  handleChangeInput(event) {
    const query = event.currentTarget.value;

    this.setState({query:query})
  };

  render() {
  const {pokeData, query} = this.state;
    return (
      <div className="app">
        <h1 className="title">mis pokemones felices</h1>
        <input onChange={this.handleChangeInput} type="text" className="input"/>
        <PokeList 
          pokeData={pokeData}
          query={query}
        />

      </div>
    );
  }
}
              
export default App;
