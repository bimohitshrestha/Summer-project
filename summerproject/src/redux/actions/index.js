export const addItem =(item) =>{
    return{
        type:"ADD_TO_CART",
        payload:item
    }
}

export const delItem = (item) =>{
    return{
        type:"REMOVE_FROM_CART",
        payload:item
    }
}