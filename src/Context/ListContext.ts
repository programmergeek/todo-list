/* eslint-disable @typescript-eslint/no-empty-function */
import React, { Dispatch, SetStateAction } from "react";

type contextType = {
  list: string[];
  updateList: Dispatch<SetStateAction<string[]>>;
};

export const ListContext = React.createContext({
  list: [] as string[],
  updateList: () => {},
} as contextType);
