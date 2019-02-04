import { combineReducers } from 'redux';

import menuReducer from './menu/menuReducer';
import categoriesReducer from './categories/categoriesReducer';
import cartReducer from './cart/cartReducer';
import entityReducer from './entityReducer';

export default combineReducers({
  menu: menuReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  isModalOpen: '',
  entities: entityReducer,
});
