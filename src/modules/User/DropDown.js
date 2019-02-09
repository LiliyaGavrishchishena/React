import React from 'react';
import { Link } from 'react-router-dom';

import userNav from '../../configs/user-nav';

import styles from './DropDown.module.css';

const DropDown = ({ signOut = () => null }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {userNav.map(({ name, path }) => (
        <li key={name}>
          <Link className={styles.link} to={path}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
    <button type="button" onClick={signOut}>
      Loggout
    </button>
  </div>
);

export default DropDown;
