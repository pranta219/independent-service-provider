import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <a href="/login" className='btn'>Book Now</a>
        </div>
    );
};

export default Service;