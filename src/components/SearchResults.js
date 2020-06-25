import React from "react";
import PropTypes from 'prop-types';
import '../styles/SearchResults.css';

const SearchResults = ({ image }) => {
  console.log(image);
  return (
    <div className="SearchResults" data-testid="SearchResults">
      <img
        className="image-card"
        src={ image }
        alt={ image }
        data-testid="image-card"
      />
    </div>
  );
};

SearchResults.propTypes = {
    image: PropTypes.string.isRequired,
}

export default SearchResults;
