import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../configs/routes';

import styles from './Authentication.module.css';

const Authentication = () => (
  <div className={styles.wrap}>
    <Link className={styles.link} to={routes.SIGNUP}>
      Sign up
    </Link>
    <Link className={styles.link} to={routes.SIGNIN}>
      Sign in
    </Link>
  </div>
);

export default Authentication;
