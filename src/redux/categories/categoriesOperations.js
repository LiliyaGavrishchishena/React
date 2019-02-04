import axios from 'axios';
import actions from './categoriesActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchCategoriesItems = () => async dispatch => {
  dispatch(actions.fetchCategoriesRequest());

  try {
    const response = await axios.get('/categories');
    dispatch(actions.fetchCategoriesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchCategoriesError(error));
  }
};

export default { fetchCategoriesItems };
