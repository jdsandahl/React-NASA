import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/Search.css";
import getImages from "../requests/getImages.js";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    setSearchResults(await getImages(searchValue));
    setLoading(false);
  };

  return (
    <div className="Search" data-testid="Search">
      <form className="search-form" onSubmit={handleSubmit} data-testid="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchValue(e.target.value)}
          data-testid="search-input"
        />
        <button className="search-btn" type="submit" data-testid="search-btn">
          Go!
        </button>
      </form>
      {loading && (
        <div className="search-loader">
          <div className="loader" />
        </div>
      )}
    </div>
  );
};

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
}
export default Search;
