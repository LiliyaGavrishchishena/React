import React from 'react';
import styles from './MenuCard.module.css';

const MenuCard = ({ image, name, price, onShowMoreInfo, onDelete }) => (
  <div className={styles.card}>
    <img src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}$</p>
    <div className={styles.actions}>
      <button
        className={styles.button_show}
        type="button"
        onClick={onShowMoreInfo}
      >
        Show more information
      </button>
      <button className={styles.button_delete} type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);
export default MenuCard;
