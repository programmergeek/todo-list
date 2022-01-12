import React from "react";
import "./App.css";
import { CheckField, ListContext } from "./Components";
import { contextObj } from "./Components/ListContext";

function App() {
  return (
    <ListContext.Provider value={contextObj}>
      <div className="App">
        <CheckField />
      </div>
    </ListContext.Provider>
  );
}

export default App;
