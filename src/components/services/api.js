import axios from 'axios';

const BASE_URL_MENU = 'http://localhost:3001/menu';
const BASE_URL_HISTORY = 'http://localhost:3001/history';

// menu

const getAllMenuItems = () =>
  axios
    .get(BASE_URL_MENU)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const getMenuItemById = id =>
  axios
    .get(`${BASE_URL_MENU}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const deleteMenuItem = id =>
  axios
    .delete(`${BASE_URL_MENU}/${id}`)
    .then(response => response.status === 200)
    .catch(error => {
      console.log(error);
    });

const addMenuItem = item =>
  axios
    .post(BASE_URL_MENU, item)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

// history

const getAllHistoryNotes = () =>
  axios
    .get(BASE_URL_HISTORY)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const getHistoryNoteById = id =>
  axios
    .get(`${BASE_URL_HISTORY}/${id}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

const deleteHistoryNote = id =>
  axios
    .delete(`${BASE_URL_HISTORY}/${id}`)
    .then(response => response.status === 200)
    .catch(error => {
      console.log(error);
    });

const addHistoryNote = item =>
  axios
    .post(BASE_URL_HISTORY, item)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });

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
