
export const Add_To_Cart="ADD_TO_CART";
export const Remove_From_Cart="REMOVE_FROM_CART";

export const addToCart=(data)=>{

    // console.warn('action',data);
    return{
        type:Add_To_Cart,
        data:data
    }
}

export const removeFromCart=(data)=>{
      console.warn('action',data);
    return{
        type:Remove_From_Cart,
        data:data
    }
}