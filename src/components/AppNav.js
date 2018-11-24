import React from 'react';

const AppNav = ({ items }) => (
  <nav>
    <ul className="nav">
      {items.map(item => (
        <li key={item}>
        <a href="/">{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default AppNav;
