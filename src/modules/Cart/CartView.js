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
    <div>
      <h2>YOUR CART NOW IS FULL OF:</h2>
      <ul className={styles.container}>
        {menu.map(({ id, name, price, image, amount }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img src={image} width="100" height="100" alt="menuItemPhoto" />
            <div>
              <button type="button" onClick={() => decrementAmount(id)}>
                -
              </button>
              <span className={styles.amount}>{amount}</span>
              <button type="button" onClick={() => incrementAmount(id)}>
                +
              </button>
            </div>
            <div>
              <p>
                Price:
                <span>{price}</span>
                UAH
              </p>
            </div>
            <div>
              <button type="button" onClick={() => removeFromCart(id)}>
                DELETE
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p>
        Total Price:
        <span>{totalPrice}</span>
        UAH
      </p>
    </div>
  ) : (
    <h2>Cart is empty yet</h2>
  );
export default CartView;
