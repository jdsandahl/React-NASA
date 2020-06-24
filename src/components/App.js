import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Search setSearchResults={setSearchResults} />
      <div>
        {searchResults && searchResults.length > 0 && ( searchResults.map((element) => <SearchResults key={element} image={element} /> ))}
      </div>
    </div>
  );
}

export default App;
