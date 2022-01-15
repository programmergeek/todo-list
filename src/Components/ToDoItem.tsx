import React from "react";
import { CheckField, OptionsButton } from ".";

type ToDoItemProps = {
  value: string;
};

export const ToDoItem: React.FC<ToDoItemProps> = ({ ...props }) => {
  return <ToDoRecord value={props.value} />;
};

const ToDoRecord: React.FC<ToDoItemProps> = ({ ...props }) => {
  return (
    <div className="flex justify-center relative">
      <div className="flex mr-2 lg:w-4/12 md:w-1/2 w-4/5 rounded-full bg-gray-50 shadow-lg">
        <div className="mt-3 ml-5">
          <CheckField value={props.value} />
        </div>
      </div>
      <div className="absolute sm:relative right-[13vw] top-1.5 sm:flex sm:right-0 sm:top-0">
        <OptionsButton />
      </div>
    </div>
  );
};
