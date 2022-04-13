import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5'>
            <p> &copy; Hasan Mohammad </p>
            <div>{year}</div>
        </footer>

    );
};

export default Footer;