import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const navigate = useNavigate()
    return (
        <div className='mx-auto w-50 text-center'>
            <h2>welcome to details {serviceId}</h2>
            <div className='text-align'>
                <button className='btn btn-primary' onClick={()=>navigate("/checkout")}>Checkout</button>
            </div>

        </div>
    );
};

export default ServiceDetail;