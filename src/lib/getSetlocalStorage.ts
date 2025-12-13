export const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getToLocalStorage = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
