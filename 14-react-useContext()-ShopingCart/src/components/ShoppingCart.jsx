import React, {useContext, useState} from 'react';
import {CartService} from "../services/CartService.js";
import DisplayNoRecords from "./DisplayNoRecords.jsx";
import DisplayTable from "./Displaytable.jsx";
import {ShoppingContext} from "../context/ShoppingContext.jsx";

const ShoppingCart = () => {
    const {products} = useContext(ShoppingContext);
    return (
        <>
            <div className="bg-gray-100 p-10">
                <div className="container mx-auto">
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        {
                            products.length === 0 ? <DisplayNoRecords/> : <DisplayTable/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default ShoppingCart;