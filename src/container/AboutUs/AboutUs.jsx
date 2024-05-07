import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';
import { HashLink as Link } from "react-router-hash-link";


const AboutUs = () => (
  <div className='about__page' id='about'>
    <div className='about__page-container'>
    <div className='images__container'>
      <img className='img1' src={images.gallery01} alt="img1" />
      <div className='img12'>
        <img src={images.chicken} alt="img2" />
        <img src={images.burger} alt="img3" />
      </div>

    </div>
    <div className='text__container'>
      <h1 className='title'>ABOUT US</h1>
      <hr />
      <div className='paragraph'>
        <p>Have a sweetest taste and relief one time with full of satisfaction that gives the best joy ever, 
          BUT that can only be archieved here with us so chill.
        </p>
        <p>
          We are always reaady to serve the best for you to feel the best as life is too short to be umhappy. 
          so celebrate with us everyday.
        </p>
      </div>
      <Link to='#services'>
        <button className='button'>Read More</button>
      </Link>
    </div>

    </div>
  </div>
);


export default AboutUs;
