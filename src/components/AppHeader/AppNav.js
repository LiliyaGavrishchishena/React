import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// styles
import styles from './AppNav.module.css';

const AppNav = ({ items = [] }) => (
  <div className={styles.navigation}>
    <div
      type="checkbox"
      className={styles.navigation_toggle_btn}
      id={styles.navigation_toggle}
    >
      <label className={styles.navigation_toggle} htmlFor="navigation-toggle">
        <span className={styles.hamburger}>
          <span className={classNames(styles.icon_bar, styles.top_bar)} />
          <span className={classNames(styles.icon_bar, styles.middle_bar)} />
          <span className={classNames(styles.icon_bar, styles.bottom_bar)} />
        </span>
      </label>
    </div>
    <nav className={styles.navigation__items}>
      <ul className={styles.list}>
        {items.map(({ name, path }) => (
          <li key={name} className={styles.link}>
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
    </nav>
  </div>
);

export default AppNav;
