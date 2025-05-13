/* About.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React from "react";
import "./About.css";
import profile from '../../assets/profile.jpg'
import Theme from '../../assets/theme.png'

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={Theme} alt=""></img>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt=" "/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m Vaishnavi Aju, a Software Engineering Technology student specializing in Artificial Intelligence. I have hands-on experience in web development, data analytics, and digital marketing, with proficiency in Python, JavaScript, C#, Node, and React.</p>
            <p>Through various team projects and volunteer opportunities, I’ve honed my leadership and collaboration skills. I’m passionate about using my technical expertise and creativity to drive innovation and efficiency in software development.</p>       
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>MERN Stack</p><div><hr style={{width:"75%"}}/></div></div>
            <div className="about-skill"><p>JavaScript/HTML&CSS</p><div><hr style={{width:"90%"}}/></div></div>
            <div className="about-skill"><p>OOP (C#, Java, Python)</p><div><hr style={{width:"90%"}}/></div></div>
            <div className="about-skill"><p>Data Structures & Algorithms</p><div><hr style={{width:"50%"}}/></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
