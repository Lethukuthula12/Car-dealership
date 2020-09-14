import  CartActionTypes from "./cart.type";
/* We want to make a dropdown hidden initially*/
const INITIAL_STATE = {
  hidden: true,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden /* this will set the hidden value to the opposite everything on a rerender */,
      };
    default:
      return state;
  }
};

export default CartReducer;