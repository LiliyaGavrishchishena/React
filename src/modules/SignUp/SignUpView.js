import React from 'react';

import styles from './SignUp.module.css';

const SignUpView = ({
  name,
  email,
  phone,
  password,
  passwordRepeate,
  onChange,
  onSubmit,
}) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input
      className={styles.input}
      type="text"
      name="name"
      value={name}
      placeholder="My name is"
      onChange={onChange}
    />
    <input
      className={styles.input}
      type="text"
      name="email"
      value={email}
      placeholder="My email"
      onChange={onChange}
    />
    <input
      className={styles.input}
      type="text"
      name="phone"
      value={phone}
      placeholder="My phone"
      onChange={onChange}
    />
    <input
      className={styles.input}
      type="password"
      name="password"
      value={password}
      placeholder="My password"
      onChange={onChange}
    />
    <input
      className={styles.input}
      type="password"
      name="passwordRepeate"
      value={passwordRepeate}
      placeholder="Password once more"
      onChange={onChange}
    />
    <button className={styles.button} type="submit">
      Sign Up
    </button>
  </form>
);

export default SignUpView;
