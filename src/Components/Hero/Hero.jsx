/* Hero.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React from 'react'
import profile from '../../assets/profile.jpg'
import './Hero.css'
import Resume from '../../assets/Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt=""/>
      <h1>I'm Vaishnavi Aju, a student of AI and Software Engineering Technology at Centennial College.</h1>
      <p>I am a junior software developer looking for co-op opportunities for this upcoming winter semester!</p>
      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' id = 'con' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <a href={Resume} target='_blank'><div className='hero-resume'>My resume</div></a>
      </div>
    </div>
  )
}

export default Hero
