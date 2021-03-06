import React, { Dispatch, SetStateAction } from "react";
import { CheckField, DeleteButton } from ".";
import { deleteFromList } from "../Context";

type ToDoItemProps = {
  value: string;
  updateList: Dispatch<SetStateAction<string[]>>;
};

export const ToDoItem: React.FC<ToDoItemProps> = ({ ...props }) => {
  return <ToDoRecord value={props.value} updateList={props.updateList} />;
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
        <DeleteButton
          onClick={() => {
            props.updateList((lst) => {
              return deleteFromList(props.value, lst);
            });
          }}
        />
      </div>
    </div>
  );
};
