import React, { useContext, useState } from "react";
import { AddButton, TextField } from ".";
import { addToList, ListContext } from "../Context";

export const InputForm: React.FC = () => {
  const [input, updateInput] = useState("");
  const context = useContext(ListContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    context.updateList(() => addToList(input, context.list));
    e.preventDefault();
    updateInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <TextField
            placeholder="To do"
            onChange={(e) => updateInput(e.target.value)}
            value={input}
          />
          <AddButton onClick={() => null} />
        </div>
      </form>
    </div>
  );
};
