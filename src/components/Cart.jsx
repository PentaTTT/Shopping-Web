import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart, removeCart } from "../redux/action";

const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
    // const [price, setPrite] = useState(0);

    const handleAdd = (item) => {
        dispatch(addCart(item));
    };
    const handleDel = (item) => {
        dispatch(delCart(item));
    };
    const handleRemove = (id) => {
        console.log('check id', id)
        dispatch(removeCart(id));
    }

    // const total = ()=>{
    //     let price = 0;

    // }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        );
    };
    const cartItems = (product) => {
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3 py-5" key={product.id}>
                    <div className="container py-4">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    height="200px"
                                    width="180px"
                                />
                            </div>
                            <div className="col-md-4">
                                <h3>{product.title}</h3>
                                <p className="lead fw-bold">
                                    {product.qty} x  ${product.price} = $
                                    {product.qty * product.price}
                                </p>
                                <button
                                    className="btn btn-outline-dark me-4"
                                    onClick={() => handleDel(product)}
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                                <button
                                    className="btn btn-outline-dark me-5"
                                    onClick={() => handleAdd(product)}
                                >
                                    <i className="fa fa-plus"></i>
                                </button>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleRemove(product.id)}
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    const buttons = () => {
        return (
            <>
                <div className="container">
                    <div className="row">
                        {/* <p className="card-text lead fw-bold mb-4">Total: ${state.price}</p> */}
                        <NavLink
                            to="/checkout"
                            className="btn btn-outline-dark mb-5 w-25 mx-auto"
                        >
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
};

export default Cart;