import routes from './routes';

export default [
  {
    name: 'Home',
    path: routes.MAIN,
  },
  {
    name: 'Authentication',
    path: routes.AUTH,
  },
  {
    name: 'Menu',
    path: routes.MENU,
  },
  {
    name: 'Add menu item',
    path: routes.ADD_MENU_ITEM,
  },
  {
    name: 'Order history',
    path: routes.HISTORY,
  },
];
