import React, { Component, createRef } from 'react';
import styles from './OrderHistory.module.css';
import TableOfOrders from '../TableOfOrders/TableOfOrders';
import AddOrderForm from '../AddOrderForm/AddOrderForm';
import OrderHistoryNote from '../OrderHistoryNote/OrderHistoryNote';
import Spiner from '../Spiner/Spiner';
import * as API from '../../services/api';

export default class OrderHistory extends Component {
  containerRef = createRef();

  state = {
    history: [],
    openHistoryNote: false,
    isLoading: false,
    openAddOrderForm: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    API.getAllHistoryNotes().then(history => {
      this.setState({ history });
    });
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
    const { openHistoryNote } = this.state;

    if (openHistoryNote && !isTargetInsideContainer) {
      this.closeHistoryNote();
    }
  };

  handleEscapeKeyPress = e => {
    e.preventDefault();
    if (e.keyCode === 27) {
      this.closeHistoryNote();
    }
  };

  openHistoryNote = () => {
    this.setState({
      openHistoryNote: true,
    });
  };

  closeHistoryNote = () => {
    this.setState({
      openHistoryNote: false,
    });
  };

  handleAddOrder = order => {
    const { address, price, rating } = order;
    API.addHistoryNote({
      date: new Date().toLocaleDateString('en-US'),
      price,
      address,
      rating,
    }).then(response =>
      response.status === 201
        ? this.setState(prevState => ({
            orders: [...prevState.orders, response.data],
          }))
        : null,
    );
  };

  openAddOrderForm = () => {
    this.setState({
      openAddOrderForm: true,
    });
  };

  closeAddOrderForm = () => {
    this.setState({
      openAddOrderForm: false,
    });
  };

  handleShowMoreInfo = id => {
    this.setState({ isLoading: true });
    API.getHistoryNoteById(id)
      .then(history => {
        this.setState({ isLoading: false });
        this.openHistoryNote(JSON.stringify(history));
      })
      .catch(err => {
        this.setState({ isLoading: false });
        this.openHistoryNote(err.message);
      });
  };

  handleDeleteHistoryNote = id => {
    this.setState({ isLoading: true });
    API.deleteHistoryNote(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        history: state.history.filter(item => item.id !== id),
      }));
    });
  };

  render() {
    const {
      history,
      openHistoryNote,
      openAddOrderForm,
      isLoading,
    } = this.state;

    return (
      <div>
        <TableOfOrders
          history={history}
          onDelete={this.handleDeleteHistoryNote}
          handleShowMoreInfo={this.handleShowMoreInfo}
        />
        <button
          type="button"
          onClick={this.openAddOrderForm}
          ref={this.containerRef}
          className={styles.button}
        >
          Add History Note
        </button>

        {isLoading ? (
          <Spiner />
        ) : (
          openHistoryNote && (
            <OrderHistoryNote onClose={this.closeHistoryNote} />
          )
        )}

        {openAddOrderForm && (
          <AddOrderForm
            onAddingOrder={this.handleAddOrder}
            onClose={this.closeAddOrderForm}
          />
        )}
      </div>
    );
  }
}
