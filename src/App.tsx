import React from "react";
import "./App.css";
import {
  AddButton,
  ClearAllButton,
  DeleteButton,
  EditButton,
} from "./Components";

function App() {
  return (
    <div className="App">
      <AddButton onClick={() => null} />
      <ClearAllButton onClick={() => null} />
      <DeleteButton onClick={() => null} />
      <EditButton onClick={() => null} />
    </div>
  );
}

export default App;
