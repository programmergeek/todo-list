import React from "react";

export const TextField: React.FC = () => {
  return (
    <div>
      <input
        type="text"
        className="text-field px-5 lg:w-2/5 font-sans-serif md:w-1/2 w-4/5 rounded-full h-12 outline-none shadow-lg"
      />
    </div>
  );
};

export const InlineTextField: React.FC = () => {
  return <div></div>;
};
