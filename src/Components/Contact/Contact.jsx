/* Contact.jsx
Name: Vaishnavi Aju
Student ID:301346741
Date:01-10-2024 */

import React from 'react'
import './Contact.css'
import Theme from '../../assets/Theme.png'
import Call from '../../assets/call.png'
import Mail from '../../assets/mail.png'
import Location from '../../assets/Location.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f1145f7a-6443-45c1-96bd-796c02ebdf7e");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    }

  return (

    <div id="contact" className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={Theme}/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm available to take on new projects. Feel free to contact me for enquiries!</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={Mail}/><p>vaiiishnaviii.aju@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={Call}/><p>+1 437-599-8385</p>
                </div>
                <div className="contact-detail">
                    <img src={Location}/><p>Toronto, ON.</p>
                </div>
            </div>
        </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Your Name: </label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type='email' placeholder='Enter your email' name='email'/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

                <br/><br/>

                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
      </div>
    </div>
  )
}


export default Contact
