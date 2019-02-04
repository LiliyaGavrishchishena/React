import { connect } from 'react-redux';

import CartLinkView from './CartLinkView';
import { cartSelectors } from '../../redux/cart';

const mapStateToProps = state => ({
  amount: cartSelectors.getCartItemsAmount(state),
});

export default connect(
  mapStateToProps,
  null,
)(CartLinkView);
