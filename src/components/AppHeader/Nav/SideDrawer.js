import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './SideDrawer.module.css';

const SideDrawer = ({ items = [], show, onClose }) => (
  <nav className={show ? styles.open : styles.close}>
    <ul className={styles.list}>
      {items.map(({ name, path }) => (
        <li key={name} className={styles.item}>
          <NavLink
            exact
            to={path}
            activeClassName={styles.active}
            className={styles.link}
            onClick={onClose}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default SideDrawer;
