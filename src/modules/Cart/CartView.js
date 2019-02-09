import React from 'react';

import styles from './Cart.module.css';

const CartView = ({
  menu = [],
  totalPrice,
  removeFromCart,
  incrementAmount,
  decrementAmount,
}) =>
  menu.length > 0 ? (
    <div className={styles.cart}>
      <h2 className={styles.full}>YOUR CART NOW IS FULL OF:</h2>
      <ul className={styles.list}>
        {menu.map(({ id, name, price, image, amount }) => (
          <li key={id} className={styles.item}>
            <h3 className={styles.name}>{name}</h3>
            <img
              className={styles.image}
              src={image}
              width="100"
              height="100"
              alt="menuItemPhoto"
            />
            <div className={styles.wrapper}>
              <button type="button" onClick={() => decrementAmount(id)}>
                -
              </button>
              <span className={styles.amount}>{amount}</span>
              <button type="button" onClick={() => incrementAmount(id)}>
                +
              </button>
            </div>
            <div className={styles.amountWrap}>
              <p>
                Price:
                <span className={styles.price}>{price}</span>
                UAH
              </p>
            </div>
            <div>
              <button
                type="button"
                className={styles.button}
                onClick={() => removeFromCart(id)}
              >
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>
        Total Price:
        <span className={styles.total}>{totalPrice}</span>
        UAH
      </p>
    </div>
  ) : (
    <h2>Cart is empty yet</h2>
  );
export default CartView;
