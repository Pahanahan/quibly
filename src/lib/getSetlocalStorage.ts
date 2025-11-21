export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getToLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  console.log(item);
  return item ? JSON.parse(item) : null;
};
