import React, { useState } from "react";
import { AddIcon, ClearIcon, DeleteIcon, OptionsIcon } from ".";

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
      className="text-base px-5 py-3 w-fit h-full rounded-full shadow-lg bg-white"
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

export const ClearAllButton: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <Button title="Clear" onClick={() => props.onClick()}>
      <ClearIcon />
    </Button>
  );
};

export const OptionsButton: React.FC = () => {
  const [showMenu, toggleMenu] = useState(false);
  return (
    <div className="m-0 p-0">
      <Button onClick={() => toggleMenu(!showMenu)}>
        <div className="relative">
          <OptionsIcon />
        </div>
      </Button>
      <div
        className="absolute z-10 top-16 flex flex-col -right-8 rounded-lg bg-black"
        style={{ display: showMenu ? "flex" : "none" }}
        onMouseLeave={() => toggleMenu(false)}
      >
        <button className="font-sans-serif w-20 px-4 py-3 hover:bg-neutral-800 rounded-lg text-white">
          Delete
        </button>
      </div>
    </div>
  );
};
