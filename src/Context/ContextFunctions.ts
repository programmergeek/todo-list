export const addToList = (val: string, list: string[]) => {
  return [...list, val];
};

export const deleteFromList = (val: string, list: string[]) => {
  return [...list.filter((item) => item !== val)];
};

export const clearList = (list: string[]) => {
  return [...list.filter((item) => item.length > 0)];
};
