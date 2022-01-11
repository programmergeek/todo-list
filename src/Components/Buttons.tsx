import React from "react";
import { AddIcon, ClearIcon, DeleteIcon, EditIcon } from ".";

type ButtonProps = {
  onClick: () => void;
};

export const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ ...props }) => {
  return (
    <button
      className="text-base px-5 py-3 w-fit rounded-full shadow-lg"
      {...props}
    >
      {props.children}
    </button>
  );
};

export const AddButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button title="Add" onClick={() => props.onClick()}>
      <AddIcon />
    </Button>
  );
};

export const DeleteButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button title="Delete" onClick={() => props.onClick()}>
      <DeleteIcon />
    </Button>
  );
};

export const EditButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button title="Edit" onClick={() => props.onClick()}>
      <EditIcon />
    </Button>
  );
};

export const ClearAllButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button title="Clear" onClick={() => props.onClick()}>
      <ClearIcon />
    </Button>
  );
};
