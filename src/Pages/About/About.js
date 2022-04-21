import React from 'react';
import me from '../../img/me.jpg'

import './About.css'

const About = () => {
    return (
        <div className='container d-flex mt-5'>
            <div className='col-md-5'>
                <blockquote class="text-2xl font-semibold italic text-center text-slate-900 ">
                    My name is
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 ml-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white -4">MD.Pranta</span>
                    </span>
                    <span className='ml-3'>Ahamed</span>
                </blockquote>

            </div>
            <div className='col-md-5 ml-48'>
                <img className='img' src={me} alt="" />
            </div>
        </div>
    );
};

export default About;