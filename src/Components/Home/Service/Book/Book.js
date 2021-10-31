// user will confirm his booking from this page
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const Book = () => {
    const { user } = useAuth();
    let { id } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // will keep the specified data in booking state 
    const [booking, setBooking] = useState([]);
    // loading the data from db
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    const onSubmit = data => {
        console.log(data);
        reset();
    }
    return (
        <div>
            <Container>
                <Row className="">
                    <Col lg={5}>
                        <div className="add-service-container d-flex align-items-center justify-content-center flex-column ">

                            <div className="add-service-form-container   d-flex align-items-center justify-content-center  w-100">
                                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column p-5 shadow">
                                    <h1 className="text-danger">Book this</h1>
                                    {/* register your input into the hook by invoking the "register" function */}
                                    {/* --------------email field ------------------ */}
                                    <input {...register("email")} placeholder="Email" className="form-control" value={user?.email || ' '} />

                                    {/* include validation with required or other standard HTML validation rules */}

                                    {/* ----------Contact field ------- */}
                                    <input  {...register("phone", { required: true },)} placeholder="Phone Number" className="form-control" />
                                    {/* ------------address---------- */}
                                    <input  {...register("address", { required: true },)} placeholder="delivery address" className="form-control" />

                                    {/* ------product id */}
                                    <input  {...register("id", { required: true },)} className="form-control" value={id || ' '} />
                                    {/* status */}
                                    <input  {...register("status", { required: true },)} className="form-control" value={"pending"} />
                                    {/* errors will return when field validation fails  */}
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    <input type="submit" className="btn btn-outline-success" value="Order" />
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className=" d-flex align-items-center justify-content-center flex-column">
                        <CardGroup>
                            <Card className="card-container my-3 rounded shadow">
                                <div className="card-img-container ">
                                    <Card.Img variant="top" src={booking.url} className="w-100 " />
                                </div>
                                <div className="card-body-container ps-lg-3 pt-lg-3">
                                    <Card.Title className="h1"><u>{booking.title}</u></Card.Title>
                                    <div className="card-description-container ">
                                        <h5 className="fw-bold">{booking.description}</h5>
                                    </div>
                                    <div className="">
                                        <h4><b> ${booking.price}</b></h4>
                                    </div>
                                </div>
                            </Card>
                        </CardGroup>
                    </Col >
                </Row >
            </Container>
        </div >
    );
};

export default Book;