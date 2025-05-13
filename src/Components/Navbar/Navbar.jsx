/* Navbar.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/Vaishnavi Aju-cropped.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.png'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

const [menu,setMenu] = useState("home");
const menuRef = useRef();

const openMenu=()=>{
  menuRef.current.style.right=0;
}

const closeMenu=()=>{
  menuRef.current.style.right="-350px";
}

  return (
    <div id='navbar' className ="navbar">
      <img src={logo} alt="" className='logo'></img>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'></img>
      <ul ref={menuRef} className = "menu">
        <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'></img>
        <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#mywork'><p>Projects</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' id="con" offset={50} href='#contact' >Connect with me!</AnchorLink></div>
    </div>
  )
}

export default Navbar
