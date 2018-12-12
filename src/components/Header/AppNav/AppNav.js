import React from 'react';
// styles
import styles from './AppNav.module.css';

const AppNav = ({ items = [] }) => (
  <nav>
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item}>
          <a className={styles.link} href="/">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
