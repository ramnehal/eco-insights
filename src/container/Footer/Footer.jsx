import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'; 

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
    <div className="app__footer">
        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-headtext">Contact Us</h1>
                <p>New York</p>
                <p>+1 212-482-8722</p>
                <p>+1 212-482-8722</p>
            </div>
            <div className="app__footer-links_logo">
                <img src={images.logo} alt="footer_logo" />
                <p>Lorem ipsum dolor sit amet, eu soleat nonumes salutandi nam</p>
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-headtext">Opening Hours</h1>
                <p>New York</p>
                <p>+1 212-482-8722</p>
                <p>+1 212-482-8722</p>
            </div>
        </div>
        <div className="footer__copyright">
            <p className='copyright_text'>2023 EcoInsignts. All Rights reserved.</p>
        </div>
    </div> 
);

export default Footer
