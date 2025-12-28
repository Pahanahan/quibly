import Image from "next/image";

import { formatObstruction } from "./formatObstruction";

import styles from "./ObstructionItem.module.scss";

interface ObstructionItemProps {
  keyObstr: string;
  value: boolean | number;
}

function ObstructionItem({ keyObstr, value }: ObstructionItemProps) {
  const obstructionImage: string = formatObstruction(keyObstr, value);

  if (!obstructionImage) return;

  return (
    <div className={styles.obstruction}>
      <Image src={obstructionImage} width={40} height={40} alt="obstruction" />
    </div>
  );
}

export default ObstructionItem;
