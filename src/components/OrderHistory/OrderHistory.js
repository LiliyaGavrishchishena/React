import React from 'react';
import styles from './OrderHistory.module.css';

const OrderHistory = ({ history }) => (
  <table className={styles.table}>
    <caption className={styles.title}>Order history</caption>
    <tbody>
      <tr className={styles.head}>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery address</th>
        <th>Rating</th>
      </tr>
      {history.map(item => (
        <tr className={styles.row} key={item.id}>
          <td className={styles.cell}>{item.date}</td>
          <td className={styles.cell}>{item.price}</td>
          <td className={styles.cell}>{item.address}</td>
          <td className={styles.cell}>{item.rating}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default OrderHistory;
