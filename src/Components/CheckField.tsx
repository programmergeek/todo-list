import React from "react";

export const CheckField: React.FC = () => {
  return (
    <div className="check-field w-fit">
      <input
        type="checkbox"
        name="test"
        id="test"
        style={{ display: "none" }}
        className="self-center"
      />
      <label htmlFor="test" className="relative cursor-pointer font-sans-serif">
        This is Sparta
      </label>
      <div className="checkmark"></div>
    </div>
  );
};
