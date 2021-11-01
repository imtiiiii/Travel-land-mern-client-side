import './AllBookings.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import Allbooking from './AllBooking/Allbooking';

const AllBookings = () => {
    // keep a state to store all the data of all bookings
    const [allBookings, setAllBookings] = useState([]);
    // use effect to load the data from db
    useEffect(() => {
        fetch('https://nameless-island-47998.herokuapp.com/allbooks?email=false')
            .then(res => res.json())
            .then(data => {
                setAllBookings(data);
                // console.log(data);
            });
    }, [])
    // console.log(allBookings);


    return (
        <div>
            <h1 className="text-center">Here is the list of <br></br>
                All orders by our respectable customers</h1>
            <Row lg={3} xs={1}>
                {
                    allBookings.map(booking => <Allbooking data={booking} key={booking._id}></Allbooking>)
                }
            </Row>
        </div>
    );
};

export default AllBookings;