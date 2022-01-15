import React, { useMemo, useState } from "react";
import "./App.css";
import { ListContext } from "./Context";
import { InputForm } from "./Components/InputForm";
import { ToDoItem } from "./Components";

function App() {
  const [list, updateList] = useState<string[]>([]);
  const value = useMemo(() => ({ list, updateList }), [list]);
  return (
    <ListContext.Provider value={value}>
      <div className="App">
        <InputForm />
        <ToDoItem value="My name is Jeff" />
      </div>
    </ListContext.Provider>
  );
}

export default App;
