import React from "react"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
//import { createStructuredSelector } from "reselect";
import { connect} from "react-redux";
import { toggleCartHidden } from "../../redux/cart/card.actions";
//import { selectCartItemsCount } from "../../redux/cart/cart.selectors"; 


const CardIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch =>({
  toggleCartHidden : () => dispatch(toggleCartHidden())
});

//mapsToStateProps get fired all the time when the state changes, it doens't matter if the state that has changed is not based on that cart components but the it will always rerender, which is not good for performance.
const mapToStateProps = ({cart :{cartItems}})=>({
  itemCount:  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
}); // selectors in redux

export default connect(mapToStateProps, mapDispatchToProps)(CardIcon);