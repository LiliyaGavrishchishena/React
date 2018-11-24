import React, { Component } from 'react';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import AppHeader from './AppHeader';
import MenuGrid from './MenuGrid';
import menu from '../data/menu.json';
import OrderHistory from './OrderHistory';
import history from '../data/order-history.json';

export default class App extends Component {

  render() {
    return (
      <div>
        <AppHeader />
        <SignUpForm />
        <br />
        <SignInForm />
        <br />
        <MenuGrid menu={menu} />
        <OrderHistory history={history} />
      </div>
    );
  }
}
