//the logged in user can only see his bookings
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import MyBooking from './MyBooking/MyBooking';

const MyBookings = () => {
    const { user } = useAuth();
    let history = useHistory();
    history.push(`mybookings?email=${user?.email}`)
    // a state to see if user email found or not 
    const [emailFound, setEmailFound] = useState(false);
    const [userBookings, setUserBookings] = useState([]);
    useEffect(() => {
        fetch(`https://nameless-island-47998.herokuapp.com/allbooks?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setUserBookings(data);

            })
    }, [user?.email])

    return (
        <>
            {
                user?.email &&
                <Row lg={3} xs={1}>
                    {

                        userBookings.map(userbooking => <MyBooking key={userbooking._id} data={userbooking}></MyBooking>)
                    }
                </Row>
            }
        </>
    );
};

export default MyBookings;