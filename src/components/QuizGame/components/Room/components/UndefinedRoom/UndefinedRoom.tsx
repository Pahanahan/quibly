import styles from "./UndefinedRoom.module.scss";

function UndefinedRoom() {
  return (
    <div className={styles.undefined}>
      <div>Комната не найдена!</div>
      <div>Введите правильный ID комнаты</div>
    </div>
  );
}

export default UndefinedRoom;
