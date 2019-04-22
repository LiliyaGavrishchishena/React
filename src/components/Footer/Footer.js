import React from 'react';
import About from './About';
import Contacts from './Contacts';
import Map from './Map';
// styles
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <About />

      <Contacts />

      <Map />
    </div>
  </footer>
);

export default Footer;
