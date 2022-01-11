import React from "react";
import { AddIcon, ClearIcon, DeleteIcon, EditIcon } from ".";

export const Button: React.FC = ({ ...props }) => {
  return (
    <button
      className="text-base px-5 py-3 w-fit rounded-full shadow-lg"
      title="Test"
    >
      {props.children}
    </button>
  );
};

export const AddButton: React.FC = () => {
  return (
    <Button>
      <AddIcon />
    </Button>
  );
};

export const DeleteButton: React.FC = () => {
  return (
    <Button>
      <DeleteIcon />
    </Button>
  );
};

export const EditButton: React.FC = () => {
  return (
    <Button>
      <EditIcon />
    </Button>
  );
};

export const ClearAllButton: React.FC = () => {
  return (
    <Button>
      <ClearIcon />
    </Button>
  );
};
