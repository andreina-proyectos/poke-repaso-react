import React from 'react';
import PropTypes from 'prop-types';

const PokeCard = (props) => {
  const {name, url, types, id} = props;
  return(
    <div className="card-container">
      <h2 className="poke-name">{name}</h2>
      <div className="img-container">
        <img src={url} alt={`Foto de ${name}`} className="poke-img"/>
      </div>
      {types.map(type=>
        <p key={`${id}-type-${type}`} className="poke-type">{type}</p>
      )}
    </div>
  )
}

PokeCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default PokeCard;