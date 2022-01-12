import React from "react";

type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <input
      type="text"
      className="text-field px-5 lg:w-2/5 font-sans-serif md:w-1/2 w-4/5 rounded-full h-12 outline-none shadow-lg"
      {...props}
    />
  );
};

export const InlineTextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return <div></div>;
};
