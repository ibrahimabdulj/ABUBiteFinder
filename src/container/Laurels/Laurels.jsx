import React from 'react';
import { IoMdStar,IoMdStarHalf,IoMdStarOutline } from "react-icons/io";
import './Laurels.css';
import { images } from '../../constants';

const Laurels = () => (
  <div className='testimonials' id='testimonials'>
    <h1 className='title'>TESTIMONIALS</h1>
    <hr />
    <p className='p__txt'>
      We are always reaady to serve the best for you to feel the best as life is too short to be umhappy. so celebrate with us everyday. we are fast, reliable, and easy accessable.
    </p>
    <div className="card__container">

      <div className="testimonial__card">
        <div className="card__wrap">
          <img src={images.yakubu} alt="imgykb" />
          <div className="indiv_ratings">
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
            <IoMdStarOutline/>
            <IoMdStarOutline/>
          </div>
          <div className="card__res">
            <p>This Restuarant provide the best service and their food is the best ever.</p>
          </div>
          <div className="indiv__name">
            Mr. YAKUBU ABDULLAHI
          </div>
        </div>
      </div>
      <div className="testimonial__card">
        <div className="card__wrap">
          <img src={images.ibrahim} alt="imgabdllh" />
          <div className="indiv_ratings">
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
            <IoMdStarOutline/>
          </div>
          <div className="card__res">
            <p>This Restuarant provide the best service and their food is the best ever.</p>
          </div>
          <div className="indiv__name">
            MLN. IBRAHIM RABIU
          </div>
        </div>
      </div>
      <div className="testimonial__card">
        <div className="card__wrap">
          <img src={images.usman} alt="imgysf" />
          <div className="indiv_ratings">
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
          </div>
          <div className="card__res">
            <p>This Restuarant provide the best service and their food is the best ever.</p>
          </div>
          <div className="indiv__name">
            ALH. USMAN GAMBO
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Laurels;
