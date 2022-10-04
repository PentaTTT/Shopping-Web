//state cart
const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if Prod is already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                //Increate the quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x);
            } else {
                const product = action.payload;
                return [
                    ...state, {
                        ...product,
                        qty: 1
                    }
                ]
            }
        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== product.id)
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }

        case "REMOVEITEM":
            let revcart = state;
            const objIndex = revcart.filter((x) => x.id === product.id);
            revcart.splice(objIndex, 1);
            return state = [...revcart]

        default:
            return state;
    }
}

export default handleCart;