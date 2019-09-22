import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PokeDetail = (props) => {
  return(
    <div className="poke-detail__container">
      <p>hola soy el detalle</p>
      <Link to="/">Go back!</Link>
    </div>
  );
};

export default PokeDetail;