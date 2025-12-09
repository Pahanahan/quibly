import { useState } from "react";

import styles from "./TopicBtn.module.scss";

interface TopicBtnProps {
  category: string;
  categoryRus: string;
}

function TopicBtn({ category, categoryRus }: TopicBtnProps) {
  const [btnActive, setBtnActive] = useState<boolean>(false);

  const className = `${styles.btn} ${btnActive ? styles.btn__active : ""}`;

  return (
    <button
      onClick={() => setBtnActive(!btnActive)}
      type="button"
      key={category}
      className={className}
    >
      {categoryRus}
    </button>
  );
}

export default TopicBtn;
