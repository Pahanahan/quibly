export const generateCorrectText = (num: number) => {
  if (num === 0) {
    return "изображений";
  } else if (num === 1) {
    return "изображение";
  } else if (num > 1 && num < 5) {
    return "изображения";
  } else {
    return "изображений";
  }
};
