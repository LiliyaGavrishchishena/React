import React, { Component } from 'react';
import OrderHistoryGrid from '../components/OrderHistory/OrderHistoryGrid';
import * as API from '../services/api';

export default class OrderHistoryPage extends Component {
  state = { history: [] };

  componentDidMount() {
    API.getAllyOrderHistoryItems().then(history => {
      this.setState({ history });
    });
  }

  handleDeleteItem = id => {
    API.deleteOrderHistoryItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        history: state.history.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getOrderHistoryItemById(id).then(item => console.log(item));
  };

  render() {
    const { history } = this.state;
    return (
      <div>
        <OrderHistoryGrid
          history={history}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
