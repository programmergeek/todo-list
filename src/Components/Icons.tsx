import React from "react";
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { Edit } from "@styled-icons/fluentui-system-filled/Edit";
import { ClearAll } from "@styled-icons/material-rounded/ClearAll";

export const Icon: React.FC = ({ ...props }) => {
  return <div className="w-14">{props.children}</div>;
};

export const AddIcon: React.FC = () => {
  return (
    <Icon>
      <Add />
    </Icon>
  );
};

export const DeleteIcon: React.FC = () => {
  return (
    <Icon>
      <Delete />
    </Icon>
  );
};

export const EditIcon: React.FC = () => {
  return (
    <Icon>
      <Edit />
    </Icon>
  );
};

export const ClearIcon: React.FC = () => {
  return (
    <Icon>
      <ClearAll />
    </Icon>
  );
};
