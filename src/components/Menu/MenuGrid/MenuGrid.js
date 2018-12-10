import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import styles from './MenuGrid.module.css';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li className={styles.item} key={item.id}>
        <MenuCard
          name={item.name}
          price={item.price}
          image={item.image}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
          onDelete={() => onDelete(item.id)}
        />
      </li>
    ))}
  </ul>
);

export default MenuGrid;
