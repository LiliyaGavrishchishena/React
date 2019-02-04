import React from 'react';

import passProps from '../../enhancers/passProps';

import styles from './Account.module.css';

const Account = ({ onSubmit, img, name, phone, email }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <img className={styles.avatar} src={img} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.phone}>{phone}</span>
      <span className={styles.email}>{email}</span>
    </div>
    <form className={styles.form} onSubmit={onSubmit}>
      <input className={styles.input} placeholder="URL fofo" />
      <input className={styles.input} placeholder="Enter your name" />
      <input className={styles.input} placeholder="Enter your phone" />
      <input className={styles.input} placeholder="Enter your email" />
      <button className={styles.button} type="submit">
        Update
      </button>
    </form>
  </div>
);

export default passProps({
  name: 'Dan Abramov',
  phone: '777-77-77',
  email: 'dan.abramov@me.com',
  img: 'https://avatars0.githubusercontent.com/u/810438?s=400&v=4.jpg',
})(Account);
