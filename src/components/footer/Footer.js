import React from 'react'
import "./Footer.css"
import { FaEnvelope } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="containerF">
            <hr className='mainHr' />
            <div className="contentF">
                <div className="div0">
                    <div className="iconC"><FaEnvelope  className='iconF' /></div>
                    <div className="divA"> 
                        <h2>info@dantsho.com</h2>
                        <p>Drop Us a Line</p>
                    </div>
                </div>
                <div className="div1">
                    <div className="iconC">  <FaPhone className='iconF'  /></div>
                    <div className="divB"> 
                        <h2>+23480 2095 0000</h2>
                        <p>Call Us Now</p>
                    </div>
                </div>
                <div className="div2">
                    <div className="icon">  <FaMapMarkerAlt className='iconF'  /></div>
                    <div className="divC">
                        <h2>19th floor, Western House 8-10</h2>
                        <h2>Broad street Lagos - Nigeria.</h2>
                    </div>
                </div>
            </div>
            <div className="lastF">Copyright 2020 Dantsoho, All rights reserved.</div>
        </div>
    </footer>
  )
}
export default Footer