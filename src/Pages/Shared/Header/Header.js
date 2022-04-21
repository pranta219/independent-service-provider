import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../img/logo.png'
import CustomLink from '../../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const { user, handleSingOut } = useFirebase()
    return (
        <Navbar className='bar' bg="black" expand="lg">
            <Navbar.Brand href="/"> <img src={logo} height='80' alt="" /></Navbar.Brand>
            <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto justify-content-end ">
                    <CustomLink className='text-light mr-4' to='/' >Home</CustomLink>
                    <CustomLink className='text-light mr-4' to='/about' >About</CustomLink>
                    <CustomLink className='text-light mr-4' to='/blogs' >Blogs</CustomLink>
                </Nav>
            </Navbar.Collapse>
            <Nav>
                {
                    user?.uid ?
                        <button onClick={handleSingOut} className='text-light mr-8'>Log out</button>
                        :
                        <CustomLink className='text-light mr-8' to='/login' >Log In</CustomLink>
                }
            </Nav>
        </Navbar>
    );
};

export default Header;