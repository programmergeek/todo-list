import React from "react";
import "./App.css";
import { ListContext } from "./Context";
import { InputForm } from "./Components/InputForm";
import { contextObj } from "./Context/ListContext";

function App() {
  return (
    <ListContext.Provider value={contextObj}>
      <div className="App">
        <InputForm />
      </div>
    </ListContext.Provider>
  );
}

export default App;
