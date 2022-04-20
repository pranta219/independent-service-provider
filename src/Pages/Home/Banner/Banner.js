import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../img/slider1.jpg'
import slider2 from '../../../img/slider2.jpg'
import slider3 from '../../../img/slider3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>The secret of success is hard work and hard work</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Every new day is another chance to change your life</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>This is very important exercise for your chest development.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;