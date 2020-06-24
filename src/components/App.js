import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  
  return (
    <div className="App">
      <Search setSearchResults={setSearchResults} />
      <SearchResults />
    </div>
  );
}

export default App;
