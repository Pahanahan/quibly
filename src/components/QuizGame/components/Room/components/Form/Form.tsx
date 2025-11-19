import styles from "./Form.module.scss";

interface FormProps {
  joinGame: (e: React.FormEvent) => void;
  roomId: string;
  userName: string;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

function Form({ joinGame, roomId, userName, changeName, disabled }: FormProps) {
  return (
    <form onSubmit={joinGame} className={styles.form}>
      <label className={styles.form__label}>
        ID Комнаты:
        <input
          className={styles["form__input-room"]}
          value={roomId}
          readOnly
          name="room"
          type="text"
        />
      </label>

      <label className={styles.form__label}>
        Ваше Имя:
        <input
          className={styles["form__input-name"]}
          value={userName}
          onChange={changeName}
          name="name"
          type="text"
        />
      </label>

      <button type="submit" disabled={disabled} className={styles.form__btn}>
        Присоединиться к игре!
      </button>
    </form>
  );
}

export default Form;
