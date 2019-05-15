import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from './DrawerToggleButton';
// styles
import styles from './Toolbar.module.css';

const Toolbar = ({ items = [], drawerClickHandler }) => (
  <header className={styles.toolbar}>
    <nav className={styles.navigation}>
      <div className={styles.toggle}>
        <DrawerToggleButton click={drawerClickHandler} />
      </div>
      <div className={styles.spacer} />
      <div className={styles.items}>
        <ul className={styles.list}>
          {items.map(({ name, path }) => (
            <li key={name} className={styles.item}>
              <NavLink
                exact
                to={path}
                activeClassName={styles.active}
                className={styles.link}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
