import React from "react";

export const contextObj = {
  list: [] as string[],
};

export const ListContext = React.createContext(contextObj);
