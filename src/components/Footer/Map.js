import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import styles from './Footer.module.css';

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 19,
  };

  state = {};

  render() {
    const { center, zoom } = this.props;
    console.log(this.props);
    return (
      <div className={styles.map}>
        <GoogleMapReact defaultCenter={center} defaultZoom={zoom} />
      </div>
    );
  }
}
