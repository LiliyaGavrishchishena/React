import React from 'react';
// components
import AppNav from './AppNav';
import navItems from '../configs/nav';
import styles from './AppHeader.module.css';

// styles

const AppHeader = () => (
  <header className={styles.header}>
    <AppNav items={navItems} />
  </header>
);

export default AppHeader;
