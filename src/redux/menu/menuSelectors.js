import { createSelector } from 'reselect';

const getMenuItems = state => state.menu;
const getMenuEntities = state => state.entities.menu;

const getAllMenuItems = createSelector(
  [getMenuItems, getMenuEntities],
  (ids, menu) => ids.map(id => menu[id]),
);
export default { getAllMenuItems };
