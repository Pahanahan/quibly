export const generateCorrectSortingText = (num: number) => {
  if (num === 0) {
    return "элементов";
  } else if (num === 1) {
    return "элемент";
  } else if (num > 1 && num < 5) {
    return "элемента";
  } else {
    return "элементов";
  }
};
