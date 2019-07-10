import React from 'react';
// styles
import styles from './HomePage.module.css';

const HomePage = () => (
  <div>
    <div className={styles.home}>
      <h1 className={styles.head}>
        Enjoy your favourite dishes with <br />
        <span className={styles.span}>our restaurant</span>
      </h1>
    </div>
    <div className={styles.wrapper}>
      <h3 className={styles.about}>
        <span className={styles.span}>About our</span> restaurant
      </h3>
      <div className={styles.descr}>
        Featuring Asia and European cuisines as diverse as they are authentic,
        enjoy delectable dishes, selection of grilled meat, seafood and sushi
        bar. Serving a wide selection of snacks, sandwiches, salads and light
        dished throughout the day in the city’s favorite meeting place The Lobby
        Lounge Bar. Modern decor and sophisticated ambience, allowing visitors
        to relax and enjoy at the Bar On 8 with big variety of special cocktails
        and European Cuisine.
      </div>
    </div>
  </div>
);

export default HomePage;
