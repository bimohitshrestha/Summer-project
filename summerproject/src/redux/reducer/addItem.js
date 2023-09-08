import { Link } from "react-router-dom"

const initialData = {
    cart_items: []
}

function addItem(state=initialData,action) {
    switch(action.type) {
        case "ADD_TO_CART":
            return {cart_items:[...state.cart_items,action.payload]}

        case "REMOVE_FROM_CART":
            return{cart_items:state.cart_items.filter(item=>item!==action.payload)}


       
            default:
                return state
    }
}

export default addItem