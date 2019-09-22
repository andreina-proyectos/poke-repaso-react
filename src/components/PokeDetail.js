import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PokeCard from './PokeCard';

const PokeDetail = (props) => {
  const {routerProps, pokeData} = props;
  const pokeId =  parseInt(routerProps.match.params.pokeId);
  const clickedPokemon = pokeData.find((pokeElement)=>{
    return(
      pokeElement.id === pokeId
    )
  })

  console.log(clickedPokemon);
  const {name,url, types, id} = clickedPokemon;
  
  return(
    <div className="poke-detail__container">
      <PokeCard
        name={name}
        url={url}
        types={types}
        id = {id}
      />
      <Link to="/">Go back!</Link>
    </div>
  );
};

export default PokeDetail;