import React from "react";

export const contextObj = {
  data: {
    list: [] as string[],
  },
  functions: {
    addToList: (item: string, list: string[]) => {
      list.push(item);
    },
    deleteFromList: (item: string, list: string[]) => {
      list.filter((value) => value != item);
    },
    editList: (newItem: string, oldItem: string, list: string[]) => {
      const i = list.indexOf(oldItem);
      list[i] = newItem;
    },
    clearList: (list: string[]) => {
      list.filter((value) => value.length > 0);
    },
  },
};

export const ListContext = React.createContext(contextObj);
