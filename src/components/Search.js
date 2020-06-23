import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  return (
    <div className="Search">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <input className="search-input" type="text" />
    </div>
  );
};

export default Search;
