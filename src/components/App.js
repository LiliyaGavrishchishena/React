import React from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import AppHeader from './AppHeader';
import MenuGrid from './MenuGrid';
import menu from '../data/menu.json';
import OrderHistory from './OrderHistory';
import history from '../data/order-history.json';

const App = () => (
  <div>
    <AppHeader />
    <br />
    <SignUpForm />
    <br />
    <SignInForm />
    <br />
    <MenuGrid menu={menu} />
    <OrderHistory history={history} />
  </div>
);
export default App;
