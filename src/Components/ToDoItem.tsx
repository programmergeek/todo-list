import React from "react";
import { CheckField, DeleteButton, EditButton } from ".";

export const ToDoItem: React.FC = () => {
  return (
    <div className="mt-10">
      <ToDoRecord />
    </div>
  );
};

const ToDoRecord: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex lg:w-2/5 md:w-1/2 w-4/5 rounded-full bg-gray-50 shadow-md relative">
        <div className="mt-3 ml-5">
          <CheckField />
        </div>
        <div className="absolute left-3/4 top-1">
          <EditButton onClick={() => null} />
        </div>
        <div className="absolute left-[87%] top-1">
          <DeleteButton onClick={() => null} />
        </div>
      </div>
    </div>
  );
};
