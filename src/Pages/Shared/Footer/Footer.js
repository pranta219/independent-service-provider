import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='mt-5 bg-black text-light text-center'>
            <p><small>copyright @{year}</small></p>
        </footer>
    );
};

export default Footer;