import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Logo = ({ image = '', width = 200, height = 50 }) => (
  <Link to={routes.MAIN}>
    <img src={image} alt="Luxury Restaurant" width={width} height={height} />
  </Link>
);

export default Logo;
