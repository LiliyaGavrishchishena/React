import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartLink.module.css';
import routes from '../../configs/routes';

const CartLinkView = ({ amount }) => (
  <div className={styles.container}>
    <Link to={routes.CART}>
      <img
        className={styles.image}
        src="https://image.flaticon.com/icons/svg/263/263142.svg"
        width="10"
        alt="shoppingCart"
      />
      {amount > 0 && <span className={styles.amount}>{amount}</span>}
    </Link>
  </div>
);

export default CartLinkView;
