import { useEffect } from "react";
import Image from "next/image";

import { quizMusic } from "@/src/lib/quizMusic";

import styles from "./Movies.module.scss";

interface MoviesProps {
  questionMovie: string;
  answersMovie: [string, string, string, string];
  srcImageMovie: string;
}

function Movies({ questionMovie, answersMovie, srcImageMovie }: MoviesProps) {
  useEffect(() => {
    const music = quizMusic("/quiz-sound/tick-tock-timer.wav", true, 0.5);

    music.play();

    return () => {
      music.stop();
    };
  }, []);

  const answersElements = answersMovie.map((answer: string) => {
    return (
      <div key={answer} className={styles.movies__item}>
        {answer}
      </div>
    );
  });

  return (
    <div className={styles.movies}>
      <h2 className={styles.movies__title}>{questionMovie}</h2>
      <Image
        className={styles.movies__image}
        src={srcImageMovie}
        width={900}
        height={600}
        alt="movie"
      />
      <div className={styles.movies__answers}>{answersElements}</div>
    </div>
  );
}

export default Movies;
