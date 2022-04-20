import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../img/logo.png'

const Header = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand className='text-light' href="/home"> <img src={logo} height='80' alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-auto justify-content-end ">
                        <Nav.Link className='text-light' href="#home">Home</Nav.Link>
                        <Nav.Link className='text-light' href="#About">About</Nav.Link>
                        <Nav.Link className='text-light' href="#Blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;