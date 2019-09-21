import React from 'react';
import PropTypes from 'prop-types';
import PokeCard from './PokeCard';

const PokeList = props => {
  const {pokeData} = props;
  return (
    <ul className="poke-list">
      {pokeData.map(pokeItem =>{
        return(
          <li key={pokeItem.id} className="poke-card">
            <PokeCard 
              name={pokeItem.name}
              url={pokeItem.url}
              types={pokeItem.types}
              id={pokeItem.id}
            />
          </li>
          )
        }        
      )}
    </ul>
  )
};

PokeList.propTypes = {
  pokeData: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;