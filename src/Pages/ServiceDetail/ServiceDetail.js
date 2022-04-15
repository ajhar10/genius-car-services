import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='text-center mt-5'>
            <h2>Details Of {serviceId}</h2>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;