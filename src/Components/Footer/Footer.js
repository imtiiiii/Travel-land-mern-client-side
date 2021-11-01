import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import footerImg from '../../img/footer1.jpg'

const Footer = () => {
    const handleSubs = (e) => {
        e.preventDefault();

    }
    return (
        <div className="bg-dark">
            <Row lg={3} xs={1}>
                <Col>
                    <img src={footerImg} alt="footer" className="w-100"></img>
                </Col>
                <Col className="text-white d-flex flex-column justify-content-center ">
                    <h1>About us</h1>
                    <h4>We always claim that in traveling we are the best in business
                        <br></br>
                        Our respective customers are the prove of it. They all are like a family to us.
                        <br></br>
                        We always want to enlarge our family and we will be very happy to welcome you
                    </h4>
                </Col>
                <Col className="text-white d-flex flex-column justify-content-center ">
                    <h3>Subscribe to us</h3>
                    <Form className="w-75">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="input" placeholder="name" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>


                        <Button variant="danger" type="submit" onClick={handleSubs}>
                            Subscribe
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;