// navbar component
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar bg="" variant="light" className="navivgation-container">
            <Container className="h4">
                <Navbar.Brand href="#home" className="text-uppercase fw-bold">Travel Land</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;