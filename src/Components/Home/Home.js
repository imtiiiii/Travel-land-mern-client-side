// home component
import './Home.css';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service/Service';
import Blogs from './Blogs/Blogs';
import TravelTip from './TravelTip/TravelTip';

const Home = () => {

    // ------------ services--------------------
    // keep a state to store all the services
    const [services, setServices] = useState([]);
    //loading the data from db with useEffect
    useEffect(() => {
        fetch('https://nameless-island-47998.herokuapp.com/services')
            .then(res => res.json())
            //now set the data to the state
            .then(data => setServices(data));
    }, [])
    // ------------- services end----------------

    // ___________________Blogs____________________
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://nameless-island-47998.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    // __________________Blogs end _______________
    // travel tips 
    const [travelTips, setTravelTips] = useState([]);
    useEffect(() => {
        fetch("https://nameless-island-47998.herokuapp.com/tips")
            .then(res => res.json())
            .then(data => setTravelTips(data));

    }, [])
    // cnt for the layout i needeed
    let cnt = 2;
    // ------------travel tips end

    return (
        <div className=" service-container">
            <h1 className="text-uppercase text-underline text-center text-dark"><u>Our services</u></h1>
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
                <h1 className="text-center text-uppercase text-dark"><u>Fetured Blogs</u></h1>

                <Row lg={3} xs={1}>
                    {
                        blogs.map(blog => <Blogs key={blog._id} data={blog} ></Blogs>)
                    }

                </Row>
            </Container>
            {/* container for travel tips */}
            <Container >
                <h1 className="text-center text-uppercase text-dark"><u>Essential Traveling Tips</u></h1>
                <Row className=" g-5 shadow py-5">
                    {
                        travelTips.map(tip => <TravelTip key={tip._id} data={tip} cnt={cnt++} ></TravelTip>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;