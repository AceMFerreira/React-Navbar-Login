import React from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';

const Menu = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Menu;