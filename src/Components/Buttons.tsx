import React from "react";

export const Button: React.FC = ({ ...props }) => {
  return (
    <button className="text-base px-5 py-3 w-fit rounded-full shadow-lg">
      {props.children}
    </button>
  );
};
