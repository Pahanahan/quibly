import { useEffect } from "react";

import { useMusicRound } from "./useMusicRound";

import styles from "./Musics.module.scss";

interface MusicsProps {
  questionMusic: string;
  answersMusic: string[];
  srcMusic: string;
  musicState?: 'play' | 'stop' | 'pause';
  setMusicState?: React.Dispatch<React.SetStateAction<'play' | 'stop' | 'pause'>>;
}

function Musics({ questionMusic, answersMusic, srcMusic, musicState, setMusicState }: MusicsProps) {
  useEffect(() => {
    if (setMusicState && musicState === 'play') {
      setMusicState('pause');
    }
  }, [musicState])
  useMusicRound(srcMusic);

  const equalizerItems = Array.from({ length: 16 }).map((_, index) => (
    <span
      key={index}
      className={styles['musics__equalizer-bar']}
    />
  ));

  const answers = answersMusic.map((item) => {
    return (
      <div key={item} className={styles.musics__item}>
        {item}
      </div>
    );
  });

  return (
    <div className={styles.musics}>
      <h2 className={styles.musics__title}>{questionMusic}</h2>
      <div className={styles.musics__equalizer}>
        {equalizerItems}
      </div>
      <div className={styles.musics__answers}>{answers}</div>
    </div>
  );
}

export default Musics;
