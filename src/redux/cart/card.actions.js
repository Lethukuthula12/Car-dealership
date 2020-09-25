import CartActionTypes from "./cart.type"

export const toggleCartHidden = () =>({
 type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem =(item)=>({ //add the items. we want to pay the type as well as item
type: CartActionTypes.ADD_ITEM,
payload: item
});