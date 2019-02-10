import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartContainer from '../modules/Cart/CartContainer';
import { menuSelectors, menuOperations } from '../redux/menu';

class CartPage extends Component {
  state = {};

  componentDidMount() {
    const { fetchMenuItems } = this.props;
    fetchMenuItems();
  }

  render() {
    const { menu } = this.props;
    return <>{menu.length > 0 && <CartContainer />}</>;
  }
}

const mapStateToProps = state => ({
  menu: menuSelectors.getAllMenuItems(state),
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
