import React from 'react';

const MenuFilter = ({ menu, onFilter }) => (
  <div>
    <label>
      filter
      <input type="text" onChange={onFilter} value={menu} />
    </label>
  </div>
);
export default MenuFilter;
