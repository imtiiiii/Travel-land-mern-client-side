//this is banner component
import React from 'react';
import './Banner.css'
import { bannerbg } from '../../../img/banner1.jpg'
const Banner = () => {
    return (
        <div className="banner-container d-lg-flex justify-content-start align-items-center flex-end ps-5">
            {/* banner text */}
            <div className="banner-text-container    text-start fw-bold text-uppercase ">
                <h1>Welcome to <span className="text-danger"> Travel land   </span></h1>
                <br></br>
                <h1>Travel around the world<br></br> with us .</h1>
                <br></br>
                <h3>We are eagerly waiting for YOU</h3>

            </div>
        </div>
    );
};

export default Banner;