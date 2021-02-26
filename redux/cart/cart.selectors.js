import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// selectors are used to return a piece of the state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
  cartItems.reduce(
    (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
