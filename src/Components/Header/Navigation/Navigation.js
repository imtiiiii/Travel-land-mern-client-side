// navbar component
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar bg="" variant="light" className="navivgation-container">
            <Container className="h4">
                <Navbar.Brand href="#home" className="text-uppercase fw-bold">Travel Land</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;