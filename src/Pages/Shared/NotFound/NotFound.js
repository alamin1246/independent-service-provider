import React from 'react';
import notFound from '../../../images/noImg.svg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Oop's Searching Page Not Found.</h2>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;