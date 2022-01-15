export const addToList = (val: string, list: string[]) => {
  list.push(val);
  return list;
};

export const deleteFromList = (val: string, list: string[]) => {
  return list.filter((item) => item !== val);
};

export const clearList = (list: string[]) => {
  return list.filter((item) => item.length > 0);
};
