/* Services.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React from 'react'
import './Services.css'
import Theme from '../../assets/Theme.png'

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className='services-title'>
        <h1>My Services</h1>
        <img src={Theme}/>
      </div>
      <div className='services-datas'>
        <div className='services-data' id="webapp">
            <h1>Web Application Development</h1>
            <p>Capable of building responsive, user-friendly websites using HTML, CSS, and JavaScript, with a focus on optimizing performance and creating seamless user interactions.</p>
        </div>
        <div id="oop" className='services-data'>
            <h1>Object Oriented Programming</h1>
            <p>Skilled in implementing Object-Oriented Programming (OOP) principles, including inheritance, encapsulation, and polymorphism, to design modular and maintainable software solutions.</p>
        </div>
        <div id='ssa' className='services-data'>
            <h1>Software Design and Architecture</h1>
            <p>Experienced in designing software with a focus on clean architecture, modularity, and ensuring code reusability while prioritizing efficiency and maintainability.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
