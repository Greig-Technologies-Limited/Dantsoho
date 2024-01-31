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
                    <div className="icon">
                        <a href="https://maps.app.goo.gl/zdEoNBNY18RCwkQv9" target="_blank"><FaMapMarkerAlt className='iconF'  /></a>
                    </div>
                    <div className="divC">
                        <h2>19th Floor, Western House 8-10</h2>
                        <h2>Broad Street Lagos - Nigeria.</h2>
                    </div>
                </div>
            </div>
            <div className="lastF">Copyright 2024 Dantsoho, All rights reserved.</div>
        </div>
    </footer>
  )
}
export default Footer