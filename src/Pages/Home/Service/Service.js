import React from 'react';
import "./Service.css"

const Service = ({service}) => {
    const {name, img, description, price} = service;
    return (
        <div className='service'>
            <img style={{width:"100%"}} src={img} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <button className="btn btn-primary">Book: {name}</button>
        </div>
    );
};

export default Service;