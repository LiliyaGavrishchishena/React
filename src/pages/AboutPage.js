import React from 'react';
// components
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
// styles
import styles from './AboutPage.module.css';

const AboutPage = () => (
  <div className={styles.about}>
    <div className={styles.aboutImg}>
      <img src={about1} alt="Our restaurant" />
    </div>
    <div>
      <h2>Welcome</h2>
      <p>
        Luxury Restaurant is one of the oldest Ukrainian restaurant in Kiev
        center, which offers traditional Ukrainian specialties which you can
        enjoyed in the pleasant air conditioned ambience. The traditional
        Ukrainian restaurant, of course, also include classic Europinian wine,
        so we can offer a wide selection of Moravian bottled wines and complete
        selection of barrel wines. In addition to lunch and dinner, the
        restaurant premises, for example, to organize banquets, graduations,
        weddings or birthday celebrations.
      </p>
    </div>
    <div className={styles.aboutImg}>
      <img src={about2} alt="Our restaurant" />
    </div>
    <div>
      <p>
        <strong>
          For the booking options to lunch or dinner for tourist group don’t e
          hesitate to contact us.
        </strong>
        We hope that your visit to our restaurants will be one of your pleasant
        experiences, and that you will come back. Our team is looking forvard to
        your visit.
      </p>
    </div>
  </div>
);

export default AboutPage;
