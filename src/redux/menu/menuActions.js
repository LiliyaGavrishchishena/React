import { normalize } from 'normalizr';
import types from './menuActionTypes';
import MenuItemsSchema from '../../services/schema';

const fetchMenuRequest = () => ({
  type: types.MENU_FETCH_REQUEST,
});

const fetchMenuSuccess = menu => {
  const normalazedItems = normalize(menu, [MenuItemsSchema]);
  return {
    type: types.MENU_FETCH_SUCCESS,
    payload: {
      ids: {
        menu: Object.keys(normalazedItems.entities.menu),
      },
      entities: normalazedItems.entities,
    },
  };
};

const fetchMenuError = error => ({
  type: types.MENU_FETCH_ERROR,
  payload: { error },
});

export default { fetchMenuRequest, fetchMenuSuccess, fetchMenuError };
