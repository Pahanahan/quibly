import type { Metadata } from "next";

import QuizGame from "@/src/components/QuizGame/QuizGame";

export const metadata: Metadata = {
  title: "Викторина онлайн",
  description:
    "Многопользовательская онлайн-викторина с вопросами и вариантами ответов. Проверяй знания и соревнуйся с друзьями.",
};

function QuizPage() {
  return <QuizGame />;
}

export default QuizPage;
