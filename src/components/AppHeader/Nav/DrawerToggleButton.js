import React from 'react';
// styles
import styles from './DrawerToggleButton.module.css';

const DrawerToggleButton = ({ click }) => (
  <button className={styles.toggle} onClick={click}>
    <div className={styles.button} />
    <div className={styles.button} />
    <div className={styles.button} />
  </button>
);

export default DrawerToggleButton;
