import styles from "./SortingDragged.module.scss";

interface SortingDraggedProps {
  top: number;
  left: number;
  name: string;
}

function SortingDragged({ top, left, name }: SortingDraggedProps) {
  return (
    <div
      style={{
        top: top,
        left: left,
      }}
      className={styles.dragged}
    >
      {name}
    </div>
  );
}

export default SortingDragged;
