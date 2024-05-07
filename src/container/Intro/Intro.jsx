import React from 'react';
import './Intro.css';
import ServiceCard from '../../components/Card/ServiceCard';
import { data } from '../../constants';

const Intro = () => (
  <div className='our__services' id='servies'>
    <div className='heading'>
      <h1 className='title'>
        Our Services
      </h1>
      <hr />
      <p>
        We are always reaady to serve the best for you to feel the best as life is too short to be umhappy. 
        so celebrate with us everyday. we are fast, reliable, and easy accessable.
      </p>
    </div>
      <div className='services__container'>
        {data.services.map(({id,icon,title,text})=>(
          <ServiceCard
            key={id}
            icon={icon}
            title={title}
            text={text}
          />

))}
        </div>

  </div>
);

export default Intro;
