import React from 'react';
import styles from './Footer.module.css';

const Contacts = () => (
  <div>
    <div className={styles.contacts}>
      <h3 className={styles.footer_header}>Контакты</h3>
      <div>
        luxury.restaurant@gmail.com.ua <br />
        (000) 000 00 00
      </div>
    </div>
  </div>
);

export default Contacts;
