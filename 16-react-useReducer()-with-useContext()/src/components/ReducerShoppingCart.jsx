import React, {useContext, useEffect} from 'react';
import {ShoppingContext} from "../context/ShoppingContext.jsx";

const ReducerShoppingCart = () => {
    const {state, dispatch, actionTypes} = useContext(ShoppingContext);

    useEffect(() => {
        calculateTotal();
    }, [state.products]);

    const incrQty = (productId) => {
        dispatch({
            type: actionTypes.INCR_QTY,
            payload: {
                productId: productId,
            },
        })
    };

    const decrQty = (productId) => {
        dispatch({
            type: actionTypes.DECR_QTY,
            payload: {
                productId: productId,
            },
        })
    };

    const calculateTotal = () => {
        dispatch({
            type: actionTypes.CALCULATE_TOTAL,
        })
    };

    const clickDeleteProduct = (productId) => {
        dispatch({
            type: actionTypes.DELETE_PRODUCT,
            payload: {
                productId: productId,
            },
        })
    };

    const displayNoRecords = () => {
        return (
            <div className="flex flex-col items-center justify-center">
                <h3 className="text-red-500 text-sm">No Records Found</h3>
            </div>
        )
    };

    const displayProductsTable = () => {
        return (
            <table className="min-w-full  -gray-200">
                <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2 ">ID</th>
                    <th className="px-4 py-2 ">Image</th>
                    <th className="px-4 py-2 ">Name</th>
                    <th className="px-4 py-2 ">Price</th>
                    <th className="px-4 py-2 ">Qty</th>
                    <th className="px-4 py-2 ">Total</th>
                    <th className="px-4 py-2 ">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                            <td className="px-4 py-2  text-center">{product.id}</td>
                            <td className="px-4 py-2  text-center">
                                <img src={product.imageUrl} alt="Product"
                                     className="w-12 h-12 rounded"/>
                            </td>
                            <td className="px-4 py-2 ">{product.name}</td>
                            <td className="px-4 py-2  text-center">${product.price}</td>
                            <td className="px-4 py-2  text-center">
                                <button onClick={() => decrQty(product.id)}
                                        className="bg-red-400 px-4 py-2 mr-2 rounded-lg"> -
                                </button>
                                {product.qty}
                                <button onClick={() => incrQty(product.id)}
                                        className="bg-green-400 px-4 py-2 ml-2 rounded-lg"> +
                                </button>
                            </td>
                            <td className="px-4 py-2  text-center">
                                ${(product.price * product.qty).toFixed(2)}
                            </td>
                            <td className="px-4 py-2  text-center">
                                <button onClick={() => clickDeleteProduct(product.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2">Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <td colSpan={5}></td>
                    <td>Grand Total : ${state.total.toFixed(2)}</td>
                </tr>
                </tbody>
            </table>
        )
    };

    return (
        <>
            <div className="bg-gray-100 p-10">
                <div className="container mx-auto">
                    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                        {
                            state.products.length === 0 ? displayNoRecords() : displayProductsTable()
                        }
                    </div>
                </div>
            </div>
        </>
    )
};
export default ReducerShoppingCart;