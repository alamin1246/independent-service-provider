import React from 'react';
import './Footer.css';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black'>
            <small className='text-white'>&copy; Copyright & preserved MD. AL AMIN HOSSAIN & {year}</small>
        </footer>
    );
};

export default Footer;