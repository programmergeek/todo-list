import React, { useState } from "react";
import { Check } from "@styled-icons/bootstrap/Check";

export const CheckField: React.FC<{ value: string }> = ({ ...props }) => {
  const [isChecked, updateIsChecked] = useState(false);

  return (
    <div
      className="relative check-field w-fit"
      onClick={() => {
        updateIsChecked(!isChecked);
      }}
    >
      <div className="absolute left-2 top-1.5 rounded-full border-2 border-black w-5 h-5">
        <Check style={{ display: isChecked ? "block" : "none" }} size={16} />
      </div>

      <p className="relative cursor-pointer font-sans-serif">{props.value}</p>
    </div>
  );
};
