import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages.js";

const Search = () => {
  const [searchValue, setSearchValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(searchValue);
  };

  return (
    <div className="Search">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
