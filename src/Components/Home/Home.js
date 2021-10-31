// home component
import './Home.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Home = () => {
    // keep a state to store all the services
    const [services, setServices] = useState([]);
    //loading the data from db with useEffect
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            //now set the data to the state
            .then(data => setServices(data));
    }, [])
    return (
        <div className="my-5">
            <h1 className="text-uppercase text-underline text-center text-danger"><u>Our services</u></h1>
            <Container>
                <Row lg={3} xs={1}>
                    {/* map through the services to show every single service */}
                    {
                        services.map(service => <Service key={service._id} data={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;