import React from 'react'
import './Contact.css'
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contactContainer">
          <h1>Contact Us</h1>
          <hr />
          <div className="contactContentHold">
            <div className="contactDetails">
              <div className="options">
                  <div className="iconHold">
                      <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                  </div>
                  <h4>Call Us</h4>
                  <p>+23480 2095 0000</p>
              </div>
              <div className="options">
                  <div className="iconHold">
                      <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                  </div>
                  <h4>Email</h4>
                  <p>info@dantsho.com</p>
              </div>
              <div className="options">
                  <div className="iconHold">
                      <MdOutlineSignalCellularAlt size={30} style={{ color: 'white' }} />
                  </div>
                  <h4>Locate Us</h4>
                  <p>19th floor, Western House 8-10
                    Broad street Lagos - Nigeria.
                  </p>
              </div>
            </div>
            <form action="https://formspree.io/f/xqkraplo" method="POST">
              <div className='firstRow'>
                <input type='text' placeholder='Name' name='name' required></input>
                <input type='text' placeholder='Email' name='_replyto' required></input>
              </div>
              <div className='firstRow'>
                <input type='tel' placeholder='Phone Number' name='phone' required></input>
                <input type='text' className='country' placeholder='Country' name='country'></input>
              </div>
              <textarea className='request' placeholder='Please Describe Your Request?' name='message' required></textarea>
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact