import React from 'react';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {handleChangeInput, query} = props;
  
  return (
    <div className="filters-container">
      <input onChange={handleChangeInput} type="text" className="input" value={query}/>     
    </div>
  )
}

Filters.propTypes = {
  handleChangeInput: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

export default Filters;