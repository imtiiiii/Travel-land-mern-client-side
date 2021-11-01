import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';

const Allbooking = (props) => {

    // now we got all the id's of booking that all users made
    // now we can search in our db with this id to show booking details
    const [booked, setBooked] = useState({})
    const details = props.data;
    // console.log(details);
    const [status, setStatus] = useState(props.data.status)
    const searchId = props.data.product_id;

    useEffect(() => {
        fetch(`https://nameless-island-47998.herokuapp.com/services/${searchId}`)
            .then(res => res.json())
            .then(data => {
                setBooked(data);
                // console.log(data);
            })
    }, [])
    // function to handle status change(pending to approved)
    const handleStatusChange = id => {
        console.log(id);
        setStatus("Approved");
        const update = "Approved"
        axios.put(`https://nameless-island-47998.herokuapp.com/allbooks/books/${id}`, { status: "Approved" })
            .then();


    }
    return (
        <Col className=" d-flex align-items-center justify-content-center flex-column my-3">
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
                            <h5>Status: {status}</h5>
                        </div>
                        <div>
                            <Button onClick={() => handleStatusChange(details._id)}>Approve</Button>
                        </div>
                    </div>
                </Card>
            </CardGroup>
        </Col >
    );
};

export default Allbooking;