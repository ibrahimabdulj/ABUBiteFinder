import React from 'react';
import './SpecialMenu.css';
import MenuItemCard from '../../components/Card/MenuItemCard';
import {data} from '../../constants';


const SpecialMenu = () => (
  <div className='app__menu' id='menu'>
    <div className='menu__title'>
      <h1 className='title'>Our Menu</h1>
      <hr />
      <p>
        We are always reaady to serve the best for you to feel the best as life is too short to be umhappy. 
        so celebrate with us everyday.
      </p>
    </div>
    <div className='menu__container'>
      {data.dish.map(({id,title,price,tags,imgUrl})=>(
        <MenuItemCard
          key={id}
          img={imgUrl}
          title={title}
          price={price}
          info={tags}
        />

      ))}
    </div>
  </div>
);

export default SpecialMenu;
