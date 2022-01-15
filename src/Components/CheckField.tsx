import React, { useState } from "react";

export const CheckField: React.FC<{ value: string }> = ({ ...props }) => {
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
        {props.value}
      </label>
      <div className="checkmark"></div>
    </div>
  );
};
