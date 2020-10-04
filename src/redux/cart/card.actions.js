import CartActionTypes from "./cart.type"

export const toggleCartHidden = () =>({
 type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem =(item)=>({ //add the items. we want to pay the type as well as item
type: CartActionTypes.ADD_ITEM,
payload: item
});

export const clearItemFromCart =item =>({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const  removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});