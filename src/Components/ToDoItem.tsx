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
      <div className="flex mr-2 lg:w-1/4 md:w-1/2 w-4/5 rounded-full bg-gray-50 shadow-lg">
        <div className="mt-3 ml-5">
          <CheckField />
        </div>
      </div>
      <div className="relative hidden sm:flex">
        <EditButton onClick={() => null} />
        <DeleteButton onClick={() => null} />
      </div>
    </div>
  );
};
