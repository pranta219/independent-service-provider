import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer className='mt-5 bg-black text-light text-center'>
            <p><small class="fs-3">copyright ©{year}</small></p>
            <p>Desing By X-Fitt Gym</p>
        </footer>
    );
};

export default Footer;