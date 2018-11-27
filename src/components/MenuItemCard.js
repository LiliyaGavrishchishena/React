import React from 'react';

const MenuItemCard = ({ children }) => (
  <li className="card">
    <img src={children.image} alt="" />
    <p>Nane: {children.name}</p>
    <p>Price: {children.price}$</p>
  </li>
);
export default MenuItemCard;
