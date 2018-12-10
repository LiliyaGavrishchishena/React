import axios from 'axios';

const BASE_URL_MENU = 'http://localhost:3000/menu';
const BASE_URL_HISTORY = 'http://localhost:3000/history';

// menu

const getAllMenuItems = () =>
  axios.get(BASE_URL_MENU).then(response => response.data);

const getMenuItemById = id =>
  axios.get(`${BASE_URL_MENU}/${id}`).then(response => response.data);

const deleteMenuItem = id =>
  axios
    .delete(`${BASE_URL_MENU}/${id}`)
    .then(response => response.status === 200);

const addMenuItem = item =>
  axios.post(BASE_URL_MENU, item).then(response => response.data);

// history

const getAllHistoryNotes = () =>
  axios.get(BASE_URL_HISTORY).then(response => response.data);

const getHistoryNoteById = id =>
  axios.get(`${BASE_URL_HISTORY}/${id}`).then(response => response.data);

const deleteHistoryNote = id =>
  axios
    .delete(`${BASE_URL_HISTORY}/${id}`)
    .then(response => response.status === 200);

const addHistoryNote = item =>
  axios.post(BASE_URL_HISTORY, item).then(response => response.data);

export {
  getAllMenuItems,
  getMenuItemById,
  deleteMenuItem,
  addMenuItem,
  getAllHistoryNotes,
  getHistoryNoteById,
  deleteHistoryNote,
  addHistoryNote,
};
