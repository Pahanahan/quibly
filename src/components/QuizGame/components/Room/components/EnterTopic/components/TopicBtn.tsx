import { useState } from "react";

import styles from "./TopicBtn.module.scss";

interface TopicBtnProps {
  category: string;
  categoryRus: string;
  topicsState: string[];
  setTopicsState: React.Dispatch<React.SetStateAction<string[]>>;
}

function TopicBtn({
  category,
  categoryRus,
  topicsState,
  setTopicsState,
}: TopicBtnProps) {
  const [btnActive, setBtnActive] = useState<boolean>(false);

  const handleSetTopicsState = (category: string) => {
    setBtnActive(!btnActive);

    if (topicsState.includes(category)) {
      setTopicsState((prevState) => {
        return prevState.filter((item) => item !== category);
      });
    } else {
      setTopicsState((prevState) => {
        return [...prevState, category];
      });
    }
  };

  const className = `${styles.btn} ${btnActive ? styles.btn__active : ""}`;

  return (
    <button
      onClick={() => handleSetTopicsState(category)}
      type="button"
      key={category}
      className={className}
    >
      {categoryRus}
    </button>
  );
}

export default TopicBtn;
