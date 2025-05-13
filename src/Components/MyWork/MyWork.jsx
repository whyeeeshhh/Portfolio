/* MyWork.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React from 'react';
import './MyWork.css'
import Theme from '../../assets/Theme.png'
import RealEstate1 from '../../assets/RealEstate1.png'
import ProductPage from '../../assets/Project3.png'
import Calculator from '../../assets/Calculator.png'

const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={Theme} alt=""/>
      </div>
      <div className="mywork-container">
        <div className="mywork-individual">
            <a href="http://studentweb.cencol.ca/vaju/PROJECT/HomePage.html"><img src={RealEstate1}/></a>
            {/* <img src={RealEstate2}/> */}
            <h1>Interactive Real Estate Website</h1>
            <p className='individual-text'>Created an interactive, user-friendly real estate website using HTML, CSS, and JavaScript. The site allows users to browse property listings, view detailed descriptions, and interact with a contact form for inquiries.</p>
        </div>
        <div className="mywork-individual">
            <a href="http://studentweb.cencol.ca/vaju/Assignment%203/productpage.html"><img src={ProductPage}/></a>
            <h1>Product Page</h1>
            <p className='individual-text'>Developed a responsive product page for the Jeep Wrangler, featuring an interactive map that allows users to click on different regions and navigate to local distributors, enhancing the user experience</p>
        </div>
        <div className="mywork-individual">
            <a><img src={Calculator} style={{width:"350px",height:"200px"}}/></a>
            <h1>Calculator</h1>
            <p className='individual-text'>Developed a fully functional calculator application using C# and Windows Forms, offering both standard and scientific modes, with an intuitive interface and efficient performance for a seamless user experience.</p>
        </div>
      </div>
    </div>
  )
}

export default MyWork
