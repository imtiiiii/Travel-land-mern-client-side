// this component will contain all the service one by one
import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Book from './Book/Book';
import './Service.css'

const Service = (props) => {
    const data = props.data;

    let history = useHistory();
    const handleBookNow = id => {
        history.push(`/home/${id}`);

    }
    return (
        <>
            <Col className="my-4">
                <CardGroup>
                    <Card className="card-container my-3 rounded shadow">
                        <div className="card-img-container ">
                            <Card.Img variant="top" src={data.url} className="w-100 " />
                        </div>
                        <div className="card-body-container ps-lg-3 pt-lg-3">
                            <Card.Title className="h1"><u>{data.title}</u></Card.Title>
                            <div className="card-description-container ">
                                <h5 className="fw-bold">{data.description}</h5>
                            </div>
                            <div className="">
                                <h4><b> ${data.price}</b></h4>
                            </div>
                        </div>
                        <div className="card-footer-container  py-3 ps-lg-3">
                            <Button variant="outline-success" onClick={() => handleBookNow(data._id)}>BOOK NOW</Button>
                        </div>
                    </Card>
                </CardGroup>
            </Col>
        </>
    );
};

export default Service;