import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';

const Allbooking = (props) => {
    // now we got all the id's of booking that all users made
    // now we can search in our db with this id to show booking details
    const [booked, setBooked] = useState({})
    const searchId = props.id;
    console.log(searchId);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${searchId}`)
            .then(res => res.json())
            .then(data => setBooked(data))
    }, [])
    return (
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
                    </div>
                </Card>
            </CardGroup>
        </Col >
    );
};

export default Allbooking;