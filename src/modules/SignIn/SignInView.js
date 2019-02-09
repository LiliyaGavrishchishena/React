import React from 'react';

import styles from './SignIn.module.css';

const SignInView = ({ email, password, onChange, onSubmit }) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <input
      className={styles.input}
      type="text"
      name="email"
      value={email}
      placeholder="My email"
      onChange={onChange}
      required
    />
    <input
      className={styles.input}
      type="password"
      name="password"
      value={password}
      placeholder="My password"
      onChange={onChange}
      required
    />
    <button type="submit" className={styles.button}>
      Sign In
    </button>
  </form>
);

export default SignInView;
