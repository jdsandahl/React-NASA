import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
        data-testid="nasa-logo"
      />
      <Search setSearchResults={setSearchResults} />
      <div className="flex-wrapper">
        {searchResults && searchResults.length > 0 && ( searchResults.map((element) => <SearchResults key={element} image={element} /> ))}
      </div>
    </div>
  );
}

export default App;
