import React from 'react';
// styles
import styles from './MenuCard.module.css';

const MenuCard = ({ image, name, price, onShowMoreInfo, onDelete }) => (
  <div className={styles.card}>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}$</p>
    <div className={styles.actions}>
      <button className={styles.button} type="button" onClick={onShowMoreInfo}>
        Show more
      </button>
      <button className={styles.button} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);
export default MenuCard;
