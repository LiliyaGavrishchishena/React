import types from './cartActionTypes';

const addToCart = id => ({
  type: types.ADD_TO_CART,
  payload: {
    id,
  },
});

const removeFromCart = id => ({
  type: types.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

const incrementAmount = id => ({
  type: types.INCREMENT_AMOUNT,
  payload: { id },
});

const decrementAmount = id => ({
  type: types.DECREMENT_AMOUNT,
  payload: { id },
});

export default {
  addToCart,
  removeFromCart,
  incrementAmount,
  decrementAmount,
};
