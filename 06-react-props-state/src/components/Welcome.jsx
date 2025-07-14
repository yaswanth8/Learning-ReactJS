import React from 'react';
import image1 from "../assets/location_1.jpg";
import image2 from "../assets/location_2.jpg";
import image3 from "../assets/location_3.jpg";

const Welcome = () => {
    return (
        <>
            <div className="bg-gray-100 p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={image1} alt="Image 1" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Card Title 1</h2>
                        <p className="text-gray-600 mt-2">This is a description of the first card. It provides some
                            insight into the content.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Learn
                            More
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={image2} alt="Image 2" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Card Title 2</h2>
                        <p className="text-gray-600 mt-2">This is a description of the second card. It provides
                            additional details.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Learn
                            More
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={image3} alt="Image 3" className="w-full h-48 object-cover"/>
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">Card Title 3</h2>
                        <p className="text-gray-600 mt-2">This is a description of the third card. More context can be
                            added here.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Learn
                            More
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};
export default Welcome;