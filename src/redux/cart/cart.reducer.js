import  CartActionTypes from "./cart.type";
/* We want to make a dropdown hidden initially*/
import { addItemToCart} from "./cart.utils"
const INITIAL_STATE = {
  hidden: true,
  cartItems: [] // we want to add the items that are added into the array
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden /* this will set the hidden value to the opposite everytime on a rerender */,
      };
      case CartActionTypes.ADD_ITEM:  //everytime when the action type is add_item, we going to return an object with a state as well as the spreading the carditems and also pass their payloads
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
    default:
      return state;
  }
};

export default CartReducer;