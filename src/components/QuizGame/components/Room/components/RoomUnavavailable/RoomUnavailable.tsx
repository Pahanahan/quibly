import styles from "./RoomUnavailable.module.scss";

interface RoomUnavailableProps {
  title: string;
  text: string;
}

function RoomUnavailable({ title, text }: RoomUnavailableProps) {
  return (
    <div className={styles.undefined}>
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
}

export default RoomUnavailable;
