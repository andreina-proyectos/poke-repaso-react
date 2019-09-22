import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';
import {Link} from 'react-router-dom';


const PokeList = props => {
  const {pokeData, query} = props;
  return (
    <ul className="poke-list">
      {pokeData
        .filter(filteredPokemon => filteredPokemon.name.toUpperCase().includes(query.toUpperCase()))
        .map(pokeItem =>{
        return(
          <li key={pokeItem.id} className="poke-card">
            <Link to="/detail">
              <PokeCard 
                name={pokeItem.name}
                url={pokeItem.url}
                types={pokeItem.types}
                id={pokeItem.id}
              />
            </Link>
          </li>
          )
        }        
      )}
    </ul>
  )
};

PokeList.propTypes = {
  pokeData: PropTypes.arrayOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
}

export default PokeList;