import React from 'react';
import image1 from '../assets/location_1.jpg';
import image2 from '../assets/location_2.jpg';
import image3 from '../assets/location_3.jpg';

const Welcome = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={image1} className="card-img-top" alt="..." height={200}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={image2} className="card-img-top" alt="..." height={200}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={image3} className="card-img-top" alt="..." height={200}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Welcome;