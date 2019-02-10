import types from './categoriesActionTypes';

const fetchCategoriesRequest = () => ({
  type: types.CATEGORIES_FETCH_REQUEST,
});

const fetchCategoriesSuccess = categories => ({
  type: types.CATEGORIES_FETCH_SUCCESS,
  payload: {
    categories,
  },
});

const fetchCategoriesError = error => ({
  type: types.CATEGORIES_FETCH_ERROR,
  payload: { error },
});

export default {
  fetchCategoriesRequest,
  fetchCategoriesSuccess,
  fetchCategoriesError,
};
