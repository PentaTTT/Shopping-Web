import React from 'react';
import Footer from './Footer';
import Products from "./Products";

const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="bg img" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">

                    <div className="container">
                        <h5 className="card-title display-3 fw-bold mb-0">NEW SEASON</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
            <Footer />
        </div>
    )
}

export default Home;
