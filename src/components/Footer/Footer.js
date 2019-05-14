import React from 'react';
import About from './About';
import Contacts from './Contacts';
// styles
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <About />

      <Contacts />
    </div>
  </footer>
);

export default Footer;
