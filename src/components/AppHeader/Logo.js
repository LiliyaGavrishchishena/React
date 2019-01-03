import React from 'react';

const Logo = ({ image = '', width = 200, height = 50 }) => (
  <img src={image} alt="Luxury Restaurant" width={width} height={height} />
);

export default Logo;
