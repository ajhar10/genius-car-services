import React from 'react';
import image from '../../../images/404.jpg';


const Notfound = () => {
    return (
        <div className='container d-flex justify-content-center mt-5'>
            <img className='w-50' src={image} alt="" />
        </div>
    );
};

export default Notfound;