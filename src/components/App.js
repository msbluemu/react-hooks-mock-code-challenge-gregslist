import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [filter, setFilter] = useState("");

  function handleSearch(query){
    setFilter(query);
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer filter={filter} />
    </div>
  );
}

export default App;
