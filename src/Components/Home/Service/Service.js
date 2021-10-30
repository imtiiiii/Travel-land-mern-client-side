// this component will contain all the service one by one
import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const data = props.data;
    return (
        <>
            <Col>
                <CardGroup>
                    <Card className="card-container">
                        <div className="card-img-container">
                            <Card.Img variant="top" src={data.url} className="w-100 " />
                        </div>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                {data.description}
                                <br></br>
                                ${data.price}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>

                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Col>
        </>
    );
};

export default Service;