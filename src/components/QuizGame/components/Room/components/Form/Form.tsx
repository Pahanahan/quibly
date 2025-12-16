import { useEffect, useRef } from "react";

import styles from "./Form.module.scss";

interface FormProps {
  joinGame: (e: React.FormEvent) => void;
  userName: string;
  changeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  roomIdState: string;
  changeIdRoom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

function Form({
  joinGame,
  userName,
  changeName,
  roomIdState,
  changeIdRoom,
  disabled,
}: FormProps) {
  const inputRoomIdRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRoomIdRef.current?.focus();
  }, [inputRoomIdRef]);

  return (
    <form onSubmit={joinGame} className={styles.form}>
      <label className={styles.form__label}>
        ID Комнаты:
        <input
          className={styles["form__input-room"]}
          ref={inputRoomIdRef}
          value={roomIdState}
          onChange={changeIdRoom}
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
