import React from 'react'
import { IoMdStar,IoMdStarHalf,IoMdStarOutline } from "react-icons/io";

import './MenuItemCard.css';

function MenuItemCard({title,price,info,img}) {
  return (
    <div className='menuitem__card'>
        <div className='menuitem__img'>
            <img className='item__img' src={img} alt="cardImage" />
        </div>
        <div className='menuitem__info'>
          <div className='rating'>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStar/>
            <IoMdStarHalf/>
            <IoMdStarOutline/>          
          </div>
          <div className='item__name'>{title}</div>
          <div className='item__price'>{price}</div>
          <p>{info}</p>
          <button className='card__button'>Order Now</button>
        </div>

    </div>
  )
}

export default MenuItemCard