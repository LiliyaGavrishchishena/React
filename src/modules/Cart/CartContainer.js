import { connect } from 'react-redux';

import CartView from './CartView';
import { cartActions, cartSelectors } from '../../redux/cart';

const mapStateToProps = state => ({
  menu: cartSelectors.getCartItems(state),
  totalPrice: cartSelectors.getTotalPrice(state),
});

const mapDispatchToProps = {
  decrementAmount: cartActions.decrementAmount,
  incrementAmount: cartActions.incrementAmount,
  removeFromCart: cartActions.removeFromCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartView);
