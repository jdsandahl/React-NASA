import React from "react";
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

const SearchResults = ({ image }) => {
  return (
    <div className="SearchResults">
      <img
        className="image-card"
        src={ image }
        alt="theMoon"
      />
    </div>
  );
};

SearchResults.propTypes = {
    image: PropTypes.string.isRequired,
}

export default SearchResults;
