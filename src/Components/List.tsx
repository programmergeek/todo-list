import React, { useContext } from "react";
import { ToDoItem } from ".";
import { ListContext } from "../Context";

export const List = () => {
  const context = useContext(ListContext);

  return (
    <div className="mt-8">
      {context.list.map((val, key) => {
        return (
          <div key={key} className="mt-2">
            <ToDoItem value={val} />
          </div>
        );
      })}
    </div>
  );
};
