import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../styles/Search.css";
import getImages from "../requests/getImages.js";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(searchValue));
  };

  return (
    <div className="Search" data-testid="Search">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
        data-testid="nasa-logo"
      />
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
    </div>
  );
};

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
}
export default Search;
