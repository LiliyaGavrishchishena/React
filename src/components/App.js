import React, { Component, createRef } from 'react';
import Modal from './Modal/Modal';
import SignUpForm from './Tabs/SignUpForm';
import SignInForm from './Tabs/SignInForm';
import AppHeader from './AppHeader/AppHeader';
import MenuPage from './Menu/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory';
import history from './order-history.json';
import styles from './App.module.css';

export default class App extends Component {
  containerRef = createRef();

  state = { isModalOpen: false };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
    window.addEventListener('keyup', this.handleEscapeKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
    window.removeEventListener('keyup', this.handleEscapeKeyPress);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isModalOpen } = this.state;

    if (isModalOpen && !isTargetInsideContainer) {
      this.closeModal();
    }
  };

  handleEscapeKeyPress = e => {
    e.preventDefault();
    if (e.keyCode === 27) {
      this.closeModal();
    }
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <AppHeader />
        <button
          className={styles.btn_openModal}
          type="button"
          onClick={this.openModal}
          ref={this.containerRef}
        >
          Payment details
        </button>
        {isModalOpen && <Modal onClose={this.closeModal} />}
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
