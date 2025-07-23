import React from 'react';
import { useState } from 'react';
import CartService from '../services/CartService.js';


export const ShoppingContext = React.createContext({});

const ShoppingProvider = ({children})=> {
    const [products,setProducts]= useState(CartService.getProducts());
    
    const incrQty = (productId) => {

        let updatedProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product, 
                    qty: product.qty + 1 
                }
            }
            return product;
        });
        setProducts(updatedProducts);
    };
    const decrQty = (productId) => {
        let updatedProducts = products.map(product => {
            if (product.id === productId) {
                return { ...product,
                    qty: product.qty > 0 ? product.qty - 1 : 0
                }
            }
            return product;
        });
        setProducts(updatedProducts);
    };
    const calcTotal = () => {
        return products.reduce((total, product) => {
            return total + (product.price * product.qty);
        }, 0);
    };
    const clickDeleteProduct = (productId) => {
        let updatedProducts = products.filter(product => product.id !== productId);
        setProducts(updatedProducts);
    };

    const ValObj={
        products : products,
        incrQty : incrQty,
        decrQty : decrQty,
        calcTotal : calcTotal,
        clickDeleteProduct : clickDeleteProduct
    };



    return (
        <ShoppingContext.Provider value={ValObj}>
            {children}
        </ShoppingContext.Provider>

    )
};

export default ShoppingProvider;



