import React from "react";
import { CheckField, OptionsButton } from ".";

export const ToDoItem: React.FC = () => {
  return <ToDoRecord />;
};

const ToDoRecord: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex mr-2 lg:w-4/12 md:w-1/2 w-4/5 rounded-full bg-gray-50 shadow-lg">
        <div className="mt-3 ml-5">
          <CheckField />
        </div>
      </div>
      <div className="relative hidden sm:flex">
        <OptionsButton />
      </div>
    </div>
  );
};
