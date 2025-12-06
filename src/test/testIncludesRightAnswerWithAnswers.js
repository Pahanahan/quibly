export const testIncludesRightAnswerWithAnswers = (questions) => {
  let incorrectCount = 0;

  questions.forEach((question) => {
    if (!question.answers.includes(question.rightAnswer)) {
      console.log(question);
      incorrectCount++;
    } else {
      console.log("includes");
    }
  });

  console.log("Всего несовпадающих ответов: ", incorrectCount);
};
