import React from 'react';
import PokeList from './PokeList';
import Filters from './Filters';

const Home = (props) => {
  const {handleChangeInput,query,pokeData} = props;
  return(
    <React.Fragment>
      <Filters 
        handleChangeInput={this.handleChangeInput}
        query={query}
      />

      <PokeList 
        pokeData={pokeData}
        query={query}
      />

    </React.Fragment>
  )
}