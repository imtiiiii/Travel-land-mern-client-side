// this component will hold all the travel tips one by one
import './TravelTip.css';
import React from 'react';
import { Col } from 'react-bootstrap';
import calendar from '../../../img/calendar.png'

const TravelTip = (props) => {

    const data = props.data;
    // cnt for the layout i needeed 
    const cnt = props.cnt;

    // tipImage = image of the data 
    const tipImage =
        <div>
            <img src={data.url} alt="img" className="w-100  "></img>
        </div>
    // tip Details = details of the data
    const tipDetails =
        <div className="r p-3 travel-tip-details rounded-3">
            <div>
                <u>
                    <img src={calendar} alt="cal"></img>
                    <h6>{data.date}</h6>
                </u>
            </div>
            <h4>{data.title}</h4>
            <h5>{data.details}</h5>
        </div>
    return (
        <>
            {
                cnt % 2 === 0 ?
                    <>
                        <Col lg={5} xs={11} className="">
                            {tipImage}
                        </Col>
                        <Col lg={5} xs={11} className="d-flex flex-column justify-content-center">
                            {tipDetails}
                        </Col>
                    </>
                    :
                    <>
                        <Col lg={5} className="d-flex flex-column justify-content-center">
                            {tipDetails}
                        </Col>
                        <Col lg={5} xs={11} className="">
                            {tipImage}
                        </Col>
                    </>

            }
        </>
    );
};

export default TravelTip;