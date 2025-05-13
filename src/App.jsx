import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/footer'

/* App.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <br/>
      <About/>
      <br/>
      <Services/>
      <br/>
      <MyWork/>
      <br/>
      <Contact/>
      <Footer/>
    <br/>
    </div>
  )
}

export default App
