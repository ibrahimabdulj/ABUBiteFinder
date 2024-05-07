import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

import './Footer.css';

const Footer = () => (
  <div className='footer'>
    <p>All Rights Reserved @Copy Right 2024</p>
    <div className="logos">
      <FaFacebook/>
      <FaInstagram/>
      <CiLinkedin/>
      <FaXTwitter/>
      <FaYoutube/>
    </div>
  </div>
);

export default Footer;
