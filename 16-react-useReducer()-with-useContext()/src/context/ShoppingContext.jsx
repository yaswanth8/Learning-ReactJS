import React, {useReducer, useState} from "react";
import {CartService} from "../services/CartService.js";

export const ShoppingContext = React.createContext({});


const actionTypes = {
    INCR_QTY: "INCR_QTY",
    DECR_QTY: "DECR_QTY",
    CALCULATE_TOTAL: "CALCULATE_TOTAL",
    DELETE_PRODUCT: "DELETE_PRODUCT",
}

const initialState = {
    products: CartService.getAllProducts(),
    total: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.INCR_QTY:
            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === action.payload.productId) {
                        return {
                            ...product,
                            qty: product.qty + 1,
                        }
                    }
                    return product;
                })
            }
        case actionTypes.DECR_QTY:
            return {
                ...state,
                products: state.products.map(product => {
                    if (product.id === action.payload.productId) {
                        return {
                            ...product,
                            qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
                        }
                    }
                    return product;
                })
            }
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.productId)
            }
        case actionTypes.CALCULATE_TOTAL:
            return {
                ...state,
                total: state.products.reduce((total, product,) => {
                    return total + (product.qty * product.price);
                }, 0)
            }
    }
};


const ShoppingProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const valueObj = {
        state: state,
        dispatch: dispatch,
        actionTypes: actionTypes
    };

    return (
        <ShoppingContext.Provider value={valueObj}>
            {children}
        </ShoppingContext.Provider>
    )
}
export default ShoppingProvider;