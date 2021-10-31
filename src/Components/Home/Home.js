// home component
import './Home.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import Blogs from './Blogs/Blogs';

const Home = () => {

    // ------------ services--------------------
    // keep a state to store all the services
    const [services, setServices] = useState([]);
    //loading the data from db with useEffect
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            //now set the data to the state
            .then(data => setServices(data));
    }, [])
    // ------------- services end----------------

    // ___________________Blogs____________________
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="my-5">
            <h1 className="text-uppercase text-underline text-center text-danger"><u>Our services</u></h1>
            {/* container for services */}
            <Container>
                <Row lg={3} xs={1}>
                    {/* map through the services to show every single service */}
                    {
                        services.map(service => <Service key={service._id} data={service}></Service>)
                    }
                </Row>
            </Container>
            {/* container for blogs */}
            <Container >
                <h1 className="text-center text-uppercase text-danger"><u>Fetured Blogs</u></h1>

                <Row lg={3} xs={1}>
                    {
                        blogs.map(blog => <Blogs key={blog._id} data={blog} ></Blogs>)
                    }

                </Row>


            </Container>
        </div>
    );
};

export default Home;