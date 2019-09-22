import React from 'react';
import PokeList from './PokeList';
import Filters from './Filters';
import PropTypes from 'prop-types';

const Home = (props) => {
  const {handleChangeInput,query,pokeData} = props;
  return(
    <React.Fragment>
      <Filters 
        handleChangeInput={handleChangeInput}
        query={query}
      />

      <PokeList 
        pokeData={pokeData}
        query={query}
      />
    </React.Fragment>
  )
}

Home.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  pokeData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home;