import React from 'react';
import styles from './Footer.module.css';

const About = () => (
  <div>
    <div className={styles.about}>
      <div className={styles.address}>
        <h3 className={styles.footer_header}>We work</h3>
        <div>Mon- Thur, 8a ~ 2a</div>
        <div>Fri – Sat, 9a ~ 4a</div>
        <div>Sun, 9a ~ 12a</div>
      </div>
      <h3 className={styles.footer_header}>Contact</h3>
      <div>
        1264 Myrtle Ave <br />
        Brooklyn, NY 11221
        <br />
        United States
      </div>
    </div>
  </div>
);

export default About;
