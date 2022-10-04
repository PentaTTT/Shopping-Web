//add item to cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

//delete item from cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

//delete item from cart
export const removeCart = (id) => {
    return {
        type: "REMOVEITEM",
        payload: id
    }
}