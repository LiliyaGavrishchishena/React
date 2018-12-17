import React, { Component, createRef } from 'react';
// components
import Modal from './Modal/Modal';
import Backdrop from './Backdrop/Backdrop';
import Tab from './Tabs/Tab/Tab';
import AppHeader from './Header/AppHeader/AppHeader';
import MenuPage from './Menu/MenuPage/MenuPage';
import OrderHistory from './OrderHistory/OrderHistory/OrderHistory';
// styles
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
        {isModalOpen && (
          <Backdrop>
            <Modal onClose={this.closeModal} />
          </Backdrop>
        )}
        <Tab />
        <br />
        <MenuPage />
        <OrderHistory />
      </div>
    );
  }
}
