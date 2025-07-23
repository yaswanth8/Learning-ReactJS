import React, {useState} from 'react';
import ChildComponent from "../basics/ChildComponent.jsx";
import PromoCodeModal from "./PromoCodeModal.jsx";

const PromoCode = () => {

    const [showModal, setShowModal] = useState(false);
    const [couponCode, setCouponCode] = useState(null);

    const displayResult = () => {
        if (couponCode === "FLAT50") {
            return (
                <h2 className="text-green-500 text-sm font-bold">Congratulations!!</h2>
            )
        } else {
            return (
                <h2 className="text-red-500 text-sm font-bold">Sorry!! Wrong Coupon Code!</h2>
            )
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="w-md p-6  rounded-2xl shadow-lg bg-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">Promo Code</h2>
                    <button onClick={() => setShowModal(true)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Add Promo
                    </button>
                    <div>
                        {
                            couponCode && displayResult()
                        }
                    </div>
                    {
                        showModal && <PromoCodeModal setShowModal={setShowModal} setCouponCode={setCouponCode}/>
                    }
                </div>
            </div>
        </>
    )
};
export default PromoCode;