import types from './categoriesActionTypes';

export default function categoriesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.CATEGORIES_FETCH_SUCCESS:
      return payload.categories;

    default:
      return state;
  }
}
