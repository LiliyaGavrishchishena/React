import React from 'react';
import styles from './Footer.module.css';

const About = () => (
  <div>
    <div className={styles.about}>
      <div className={styles.address}>
        <h3 className={styles.footer_header}>График работы</h3>
        <div>
          Пн- Пт <br />
          11:00 - 23:00
        </div>
      </div>
      <h3 className={styles.footer_header}>Адрес</h3>
      <div>
        г.Киев <br />
        ул.Счастливая, 77
      </div>
    </div>
  </div>
);

export default About;
