import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../img/logo.png'

const Header = () => {
    const { user, handleSingOut } = useFirebase()
    return (
        <Navbar bg="dark" expand="lg">

            <Navbar.Brand href="/"> <img src={logo} height='80' alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto justify-content-end ">
                    <Nav.Link className='text-light' href="/">Home</Nav.Link>
                    <Nav.Link className='text-light' href="/About">About</Nav.Link>
                    <Nav.Link className='text-light' href="/blogs">Blogs</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSingOut} className='text-light'>Log out</button>
                        :
                        <Nav.Link className='text-light' href="/login">Log in</Nav.Link>
                }
            </Nav>
        </Navbar>
    );
};

export default Header;