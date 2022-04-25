import React from 'react';
import me from '../../img/me.jpg'
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import './About.css'

const About = () => {
    return (
        <div className='about container mt-20'>
            <div className='col-md-5'>
                <blockquote class="text-2xl font-semibold italic text-center text-slate-900 ">
                    My name is
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 ml-3 before:bg-pink-500 relative inline-block">
                        <span class="relative text-white -4">MD.Pranta</span>
                    </span>
                    <span className='ml-3'>Ahamed</span>
                </blockquote>
                <h5>
                    Hello everyone, I'll learn Font-end developer . My goal is a Professional web developer and I provide good service for Customer. In future learn Wordpress.
                </h5>
                <h4 className='text-success'>Contact Me</h4>
                <div className='d-flex'>
                    <a target={'https://www.facebook.com/md.pranta1243/'} href="https://www.facebook.com/md.pranta1243/">< FaFacebook className='m-2' /></a>
                    <a target={'https://twitter.com/MdPranta7'} href="https://twitter.com/MdPranta7"><FaTwitter className='m-2' /></a>
                    <a target={'https://github.com/pranta219'} href="https://github.com/pranta219"><FaGithub className='m-2' /></a>
                    <a target={'https://www.linkedin.com/in/md-pranta-ahamed221/'} href="https://www.linkedin.com/in/md-pranta-ahamed221/"><FaLinkedin className='m-2' /></a>
                </div>
            </div>
            <div className='col-md-5 ml-48'>
                <img className='img' src={me} alt="" />
            </div>
        </div>
    );
};

export default About;