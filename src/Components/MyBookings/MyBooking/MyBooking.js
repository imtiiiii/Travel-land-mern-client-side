import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const MyBooking = (props) => {


    const [booked, setBooked] = useState({})
    const searchId = props.data.product_id;
    // console.log(searchId);
    useEffect(() => {
        fetch(`https://nameless-island-47998.herokuapp.com/services/${searchId}`)
            .then(res => res.json())
            .then(data => {
                setBooked(data)
            })
    }, [])
    return (
        <>


            <Col className=" d-flex align-items-center justify-content-center flex-column">
                <CardGroup>
                    <Card className="card-container  rounded shadow">
                        <div className="card-img-container ">
                            <Card.Img variant="top" src={booked.url} className="w-100 " />
                        </div>
                        <div className="card-body-container ps-lg-3 pt-lg-3">
                            <Card.Title className="h1"><u>{booked.title}</u></Card.Title>
                            <div className="card-description-container ">
                                <h5 className="fw-bold">{booked.description}</h5>
                            </div>
                            <div className="">
                                <h4><b> ${booked.price}</b></h4>
                            </div>
                            <div>
                                <h5>Status: {props.data.status}</h5>
                            </div>
                        </div>
                    </Card>
                </CardGroup>
            </Col >
        </>
    );
};

export default MyBooking;