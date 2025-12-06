export const testCountQuestion = (questions) => {
  questions.forEach((question, i) => {
    if (question.id !== i + 1) {
      console.log(question);
    } else {
      console.log("uniq");
    }
  });
};
