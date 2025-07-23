import React, {useReducer, useState} from 'react';

const actionTypes = {
    INCR_QTY: "INCR_QTY",
    DECR_QTY: "DECR_QTY",
};

const initialState = {
    product: {
        id: "AA001",
        name: "Apple Watch",
        imageUrl: "https://m.media-amazon.com/images/I/61MCwIFvKuL._AC_CR0%2C0%2C0%2C0_SX750_.jpg",
        price: 1800,
        qty: 1
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INCR_QTY:
            return {
                product: {
                    ...state.product,
                    qty: state.product.qty + 1,
                }
            }
        case actionTypes.DECR_QTY:
            return {
                product: {
                    ...state.product,
                    qty: state.product.qty - 1 > 0 ? state.product.qty - 1 : 1,
                }
            }
        default:
            return state;
    }
};


const ReducerProduct = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const incrQty = () => {
        dispatch({
            type: actionTypes.INCR_QTY
        })
    };

    const decrQty = () => {
        dispatch({
            type: actionTypes.DECR_QTY
        })
    };

    const {product} = state;

    return (
        <>
            <pre>{JSON.stringify(product)}</pre>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="max-w-xs bg-gray-500  shadow-lg rounded-2xl p-4">
                    <img src={product.imageUrl} alt="Product Image"
                         className="w-full h-52 object-fill rounded-lg"/>

                    <div className="mt-4">
                        <h2 className="text-lg font-semibold ">{product.name}</h2>
                        <p className=" text-sm mt-1">This is a short product description to give users an
                            idea
                            of what they are purchasing.</p>

                        <div className="flex justify-between items-center mt-3">
                            <span className="text-xl font-bold text-white">Price : ${product.price}</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-xl font-bold text-white">Total : ${product.price * product.qty}</span>
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <button onClick={decrQty}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg text-lg font-semibold">-
                            </button>
                            <span className="text-lg font-semibold text-white">{product.qty}</span>
                            <button onClick={incrQty}
                                    className="bg-green-500 text-white px-3 py-1 rounded-lg text-lg font-semibold">+
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default ReducerProduct;