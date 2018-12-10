import React from 'react';
import styles from './OrderHistoryNote.module.css';

const OrderHistoryNote = () => (
  <div className={styles.backdrop}>
    <div className={styles.modalWindow}>
      <p className={styles.title}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ipsum
        obcaecati maiores ipsam harum distinctio quia, soluta voluptatibus iste
        deserunt consectetur totam quas quidem, aliquid voluptatem nisi, nobis
        expedita quis?
      </p>
      <button className={styles.button_close} type="button">
        Close
      </button>
    </div>
  </div>
);
export default OrderHistoryNote;
