import React from 'react';
// styles
import styles from './Avatar.module.css';

const Avatar = ({ image = '', width = 85, height = 52 }) => (
  <img
    className={styles.avatar}
    src={image}
    alt="avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
