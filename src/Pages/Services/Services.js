import React from 'react';
import {useState, useEffect} from "react";
import Service from '../Home/Service/Service';
import "./Services.css"

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/service")
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    
    return (
        <div id="services">
            <h1 className='service-title mt-5'>Our services</h1>
            <div className="services-container container">
            {
                services.map((service => <Service service={service} key={service._id} ></Service>))
            }
            </div>
        </div>
    );
};

export default Services;