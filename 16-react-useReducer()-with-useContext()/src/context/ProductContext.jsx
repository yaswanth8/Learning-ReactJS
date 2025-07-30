import React, {useReducer} from "react";

export const ProductContext = React.createContext({});

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


const ProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const valueObj = {
        state: state,
        dispatch: dispatch,
        actionTypes: actionTypes
    };

    return (
        <ProductContext.Provider value={valueObj}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;