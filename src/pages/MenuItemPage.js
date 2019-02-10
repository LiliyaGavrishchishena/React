import React from 'react';

import MenuCard from '../modules/Menu/MenuCard';

const MenuItemPage = ({ match }) => (
  <div>
    <MenuCard id={match.params.id} />
  </div>
);

export default MenuItemPage;
