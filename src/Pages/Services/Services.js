import React from 'react';
import {useState, useEffect} from "react";
import Service from '../Home/Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    
    return (
        <div>
            <h1 className='service-title mt-5'>Our services</h1>
            <div className="services-container">
            {
                services.map((service => <Service service={service} key={service.id} ></Service>))
            }
            </div>
        </div>
    );
};

export default Services;