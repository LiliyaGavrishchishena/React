import axios from 'axios';
import actions from './menuActions';

axios.defaults.baseURL = 'http://localhost:3001';

const fetchMenuItems = category => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = category
      ? await axios.get(`/menu?category=${category}`)
      : await axios.get('/menu');
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

export default { fetchMenuItems };
