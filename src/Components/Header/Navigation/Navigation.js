// navbar component
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';
const Navigation = () => {
    const { user, handleLogout } = useAuth();
    const logout = () => {
        handleLogout();
    }
    return (
        <Navbar bg="" variant="light" className="navivgation-container">
            <Container className="h4">
                <Navbar.Brand href="#home" className="text-uppercase fw-bold">Travel Land</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    {
                        user &&
                        <>
                            <Nav.Link as={NavLink} to="/addservice">Add service</Nav.Link>
                            <Nav.Link as={NavLink} to="/allbookings">All bookings</Nav.Link>

                            <Button variant="outline-danger" onClick={logout}>{user.email} Logout</Button>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;