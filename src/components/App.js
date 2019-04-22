import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from './AppHeader/AppHeader';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import Spiner from '../modules/Spiner/Spiner';
import Footer from './Footer/Footer';
import ProtectedRoute from '../modules/ProtectedRoute/ProtectedRoute';

import authOperations from '../redux/auth/authOperations';

import routes from '../configs/routes';

const AsyncSignUpPage = lazy(() =>
  import('../pages/SignUpPage' /* webpackChunkName: "sign-up-page" */),
);
const AsyncSignInPage = lazy(() =>
  import('../pages/SignInPage' /* webpackChunkName: "sign-in-page" */),
);

const AsyncMenuPage = lazy(() =>
  import('../pages/MenuPage' /* webpackChunkName: "menu-page" */),
);

const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItemPage' /* webpackChunkName: "menu-item-page" */),
);

const AsyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistoryPage' /* webpackChunkName: "history-page" */),
);

const AsyncAccountPage = lazy(() =>
  import('../pages/AccountPage' /* webpackChunkName: "account-page" */),
);

const AsyncMealPlannerPage = lazy(() =>
  import('../pages/MealPlannerPage' /* webpackChunkName: "planner-page" */),
);

const AsyncCartPage = lazy(() =>
  import('../pages/CartPage' /* webpackChunkName: "cart-page" */),
);

const AsyncDeliveryPage = lazy(() =>
  import('../pages/DeliveryPage' /* webpackChunkName: "delivery-page" */),
);

class App extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <>
        <AppHeader />
        <Suspense fallback={Spiner}>
          <Switch>
            <Route exact path={routes.SIGNIN} component={AsyncSignInPage} />
            <Route exact path={routes.SIGNUP} component={AsyncSignUpPage} />
            <Route exact path={routes.MAIN} component={HomePage} />
            <Route exact path={routes.ABOUT} component={AboutPage} />
            <Route exact path={routes.CONTACT} component={ContactPage} />
            <Route exact path={routes.MENU} component={AsyncMenuPage} />
            <Route
              exact
              path={routes.MENU_ITEM}
              component={AsyncMenuItemPage}
            />
            <ProtectedRoute
              exact
              path={routes.HISTORY}
              component={AsyncOrderHistoryPage}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.ACCOUNT}
              component={AsyncAccountPage}
              redirectTo="/signin"
            />
            <ProtectedRoute
              exact
              path={routes.PLANNER}
              component={AsyncMealPlannerPage}
              redirectTo="/signin"
            />
            <Route exact path={routes.CART} component={AsyncCartPage} />
            <Route exact path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </>
    );
  }
}
const mapDispatchToProp = {
  getUser: authOperations.getCurrentUser,
};

export default connect(
  null,
  mapDispatchToProp,
)(App);
