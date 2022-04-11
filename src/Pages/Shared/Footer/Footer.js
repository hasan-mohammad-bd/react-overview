import React from 'react';

const Footer = () => {
    return (
        <footer>
            <p> &copy; Hasan Mohammad </p>
            <div>{(new Date().getFullYear())}</div>
        </footer>
    );
};

export default Footer;