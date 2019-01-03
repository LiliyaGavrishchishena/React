import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AppHeader from './AppHeader/AppHeader';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import MenuItemPage from '../pages/MenuItemPage';
import AddMenuPage from '../pages/AddMenuPage';
import routes from '../configs/routes';
import AuthenticationPage from '../pages/AuthenticationPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';

const App = () => (
  <>
    <AppHeader />
    <Switch>
      <Route exact path={routes.MAIN} component={HomePage} />
      <Route exact path={routes.AUTH} component={AuthenticationPage} />
      <Route exact path={routes.MENU} component={MenuPage} />
      <Route exact path={routes.ADD_MENU_ITEM} component={AddMenuPage} />
      <Route path={routes.MENU_ITEM} component={MenuItemPage} />
      <Route path={routes.HISTORY} component={OrderHistoryPage} />
      <Redirect to="/" />
    </Switch>
  </>
);
export default App;
