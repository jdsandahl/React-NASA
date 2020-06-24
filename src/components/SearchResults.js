import React from "react";
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

export default SearchResults;
