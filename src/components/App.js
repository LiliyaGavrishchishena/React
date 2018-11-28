import React, { Component } from 'react';
import Modal from './Modal/Modal';
import SignUpForm from './Tabs/SignUpForm';
import SignInForm from './Tabs/SignInForm';
import AppHeader from './AppHeader/AppHeader';
import MenuPage from './Menu/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory';
import history from './order-history.json';

export default class App extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <button type="button" onClick={this.openModal}>
          Open Modal
        </button>
        {isModalOpen && <Modal onClose={() => null} />}
        <SignUpForm />
        <br />
        <SignInForm />
        <br />
        <MenuPage />
        <OrderHistory history={history} />
      </div>
    );
  }
}
