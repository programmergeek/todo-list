import React, { useState } from "react";
import { AddButton, TextField } from ".";

export const InputForm: React.FC = () => {
  const [input, updateInput] = useState("");

  return (
    <div>
      <form>
        <div className="flex justify-center">
          <TextField
            placeholder="To do"
            onChange={(e) => updateInput(e.target.value)}
          />
          <AddButton onClick={() => null} />
        </div>
      </form>
      <p> {input} </p>
    </div>
  );
};
