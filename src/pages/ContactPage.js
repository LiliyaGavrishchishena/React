import React from 'react';
import Map from '../modules/Map/Map';
// styles
import styles from './ContactPage.module.css';

const ContactPage = () => (
  <div>
    <h2 className={styles.about}>Keep in touch with us</h2>
    <p className={styles.descr}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae
      eros eget tellus tristique bibendum. Donec rutrum sed sem quis venenatis.
    </p>
    <Map />
  </div>
);

export default ContactPage;
