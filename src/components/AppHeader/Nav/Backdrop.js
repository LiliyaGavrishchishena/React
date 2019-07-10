import React from 'react';
// styles
import styles from './AppNav.module.css';

const Backdrop = ({ click }) => (
  <div className={styles.backdrop} onClick={click} />
);

export default Backdrop;
