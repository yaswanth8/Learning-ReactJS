import React, {useState} from "react";
import {CartService} from "../services/CartService.js";

export const ShoppingContext = React.createContext({});

const ShoppingProvider = ({children}) => {
    const [products, setProducts] = useState(CartService.getAllProducts());

    const incrQty = (productId) => {
        let updatedProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    qty: product.qty + 1,
                }
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const decrQty = (productId) => {
        let updatedProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
                }
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const calculateTotal = () => {
        return products.reduce((total, product,) => {
            return total + (product.qty * product.price);
        }, 0)
    };

    const clickDeleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const valueObj = {
        products: products,
        incrQty: incrQty,
        decrQty: decrQty,
        calculateTotal: calculateTotal,
        clickDeleteProduct: clickDeleteProduct
    };

    return (
        <ShoppingContext.Provider value={valueObj}>
            {children}
        </ShoppingContext.Provider>
    )
}
export default ShoppingProvider;