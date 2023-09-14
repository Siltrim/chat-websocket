import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Main.module.css';

const FIELDS = {
  NAME: 'name',
  ROOM: 'room',
};

const Main = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: '', [ROOM]: '' });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((v) => !v);

    if (isDisabled) e.preventDefault();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Join</h1>

        <form className={styles.form}></form>
        <div className={styles.group}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            autoComplete="off"
            value={values[NAME]}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.group}>
          <input
            placeholder="Room"
            type="text"
            name="room"
            className={styles.input}
            autoComplete="off"
            value={values[ROOM]}
            onChange={handleChange}
            required
          />
        </div>

        <Link
          className={styles.group}
          onClick={handleClick}
          to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}>
          <button type="submit" className={styles.button}>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;