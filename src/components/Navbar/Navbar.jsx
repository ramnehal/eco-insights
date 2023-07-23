import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';


import  images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#home">Home</a></li>
        <li className='p__opensans'><a href="#pages">Pages</a></li>
        <li className='p__opensans'><a href="#donations">Donations</a></li>
        <li className='p__opensans'><a href="#events">Events</a></li>
        <li className='p__opensans'><a href="#portfolio">Portfolio</a></li>
        <li className='p__opensans'><a href="#shop">Shop</a></li>
        <li className='p__opensans'><a href="#blog">Blog</a></li>
      </ul>
      <div className="app__navbar-button">
        <button type="button" className='custom__button'>Donate</button>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#000000" fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay slide-bottom">
            <AiFillCloseCircle fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#pages">Pages</a></li>
              <li className='p__opensans'><a href="#donations">Donations</a></li>
              <li className='p__opensans'><a href="#events">Events</a></li>
              <li className='p__opensans'><a href="#portfolio">Portfolio</a></li>
              <li className='p__opensans'><a href="#shop">Shop</a></li>
              <li className='p__opensans'><a href="#blog">Blog</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;