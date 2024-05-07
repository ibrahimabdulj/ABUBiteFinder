import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import { HashLink as Link } from "react-router-hash-link";


import './Navbar.css';

const Navbar = () =>{
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='nav'>
      <div className='app__logo'>
        <h2><MdOutlineRestaurantMenu/>ABU Bitefinder</h2>
      </div>
      <div className='app__navbar'>

        <ul className='app__navbar-links'>
          <li className='p__opensans'><Link to='#home' smooth>HOME</Link> </li>
          <li className='p__opensans'><Link to='#menu' smooth>MENU</Link> </li>
          <li className='p__opensans'><Link to='#about' smooth>ABOUT</Link> </li>
          <li className='p__opensans'><Link to='#services' smooth>SERVICES</Link> </li>
          <li className='p__opensans'><Link to='#testimonials'>TESTIMONIALS</Link></li>
          <li className='p__opensans'><Link to='#contact'>CONTACT</Link></li>
        </ul>

        <div className='app__navbar-login'>
          <Link to="#login" className='p__opensans'>Log In / Register</Link>
          <div/>
          <Link to="#reservation" className='p__opensans'>Book a Table</Link>
        </div>
      </div>

      <div className='app__navbar-smallscreens'>

        {!toggleMenu ? (
            <GiHamburgerMenu color='#fff' fontSize={50} className='overlay__open' onClick={() => setToggleMenu(true)}/>
          
        ):(
          <div className='small-screens_overlay slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            
            <ul className='app__navbar-smallscreens-links'>
              <li className='p__opensans'><a href='#home'>HOME</a></li>
              <li className='p__opensans'><a href='#menu'>MENU</a></li>
              <li className='p__opensans'><a href='#about'>ABOUT</a></li>
              <li className='p__opensans'><a href='#servces'>SERVICES</a></li>
              <li className='p__opensans'><a href='#testimonials'>TESTIMONIALS</a></li>
              <li className='p__opensans'><a href='#contact'>CONTACT</a></li>
              <li className='p__opensans'><a href="#login" className='p__opensans'>Log In / Register</a></li>
              <li className='p__opensans'><a href="#reservations" className='p__opensans'>Book a Table</a></li>
            </ul>
            </div>

        )}
      </div>

    </nav>
  )
};

export default Navbar;
