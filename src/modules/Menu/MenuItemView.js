import React from 'react';
import styles from './MenuItemView.module.css';

const MenuItemView = ({
  data: { id, name, description, image, price, category, ingredients },
  goBack,
  addToCart,
}) => (
  <div className={styles.item}>
    <h1>{name}</h1>
    <img src={image} alt={name} width="150px" height="100px" />
    <br />
    <span>Category -{category}</span>
    <p>
      Description: <br />
      {description}
    </p>
    <ul>
      <br />
      Ingredients:
      {ingredients && ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
    </ul>
    <p>Price - {price}</p>
    <div className={styles.buttons}>
      <button className={styles.button} type="button" onClick={goBack}>
        GO BACK
      </button>
      <button
        className={styles.button}
        onClick={() => addToCart(id)}
        type="button"
      >
        ADD TO CART
      </button>
    </div>
  </div>
);

export default MenuItemView;
