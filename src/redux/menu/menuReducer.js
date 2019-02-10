import types from './menuActionTypes';

export default function menuReducer(state = [], { type, payload }) {
  switch (type) {
    case types.MENU_FETCH_SUCCESS:
      return payload.ids.menu;

    default:
      return state;
  }
}
