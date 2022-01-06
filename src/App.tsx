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
      <AddButton />
      <ClearAllButton />
      <DeleteButton />
      <EditButton />
    </div>
  );
}

export default App;
