import React, {useState} from "react";

const PromoCodeModal = (props) => {
    const {setShowModal, setCouponCode} = props;

    const [promoCodeValue, setPromoCodeValue] = useState("");

    const clickApplyCode = () => {
        if (promoCodeValue.length > 0) {
            setCouponCode(promoCodeValue);
            setShowModal(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg w-96">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Enter Promo Code</h2>
                <input
                    value={promoCodeValue}
                    onChange={e => setPromoCodeValue(e.target.value)}
                    type="text"
                    placeholder="Enter your promo code"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={clickApplyCode}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Apply Code
                </button>
                <button onClick={() => setShowModal(false)}
                        className="mt-2 w-full text-gray-500 hover:text-gray-700 transition text-sm"
                >
                    Close
                </button>
            </div>
        </div>
    )
};
export default PromoCodeModal;