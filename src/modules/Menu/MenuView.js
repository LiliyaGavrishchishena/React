import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from './MenuView.module.css';

const MenuView = ({ items = [], match, location, addToCart }) => (
  <>
    <ul className={styles.list}>
      {items.map(({ id, name, image, price }) => (
        <li key={id} className={styles.item}>
          <Link
            className={styles.link}
            to={{
              pathname: `${match.url}/${id}`,
              state: { from: location },
            }}
          >
            <img className={styles.img} src={image} alt={name} />
            <h5 className={styles.head}>{name}</h5>
            <p>
              <b className={styles.price}>{price} UAH</b>
            </p>
          </Link>
          <button
            type="button"
            className={styles.button}
            onClick={() => addToCart(id)}
          >
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  </>
);

export default withRouter(MenuView);
