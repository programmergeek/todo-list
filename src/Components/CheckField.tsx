import React, { useState } from "react";

export const CheckField: React.FC = () => {
  const [isChecked, updateIsChecked] = useState(false);

  return (
    <div
      className="check-field w-fit"
      onChange={() => {
        updateIsChecked(!isChecked);
      }}
    >
      <input
        type="checkbox"
        name="test"
        id="test"
        style={{ display: "none" }}
        className="self-center"
        checked={isChecked}
        onChange={() => null}
      />
      <label htmlFor="test" className="relative cursor-pointer font-sans-serif">
        This is Sparta
      </label>
      <div className="checkmark"></div>
    </div>
  );
};
