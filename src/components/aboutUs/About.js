import React from 'react'
import "./About.css"
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoSunnySharp } from 'react-icons/io5';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div class="thi-page">
      <div class="thi-container">
        <div class="thi-con">
          <div class="thi-divs">
            <h5>About Us</h5>
            <h1>One Stop Maritime And Logistic Services Company.</h1>
            <p>Our business is open to all and sundry; Federal Government, State Government and Local Government. We are open to medium- and short-term contracts, including one-offs, for medium- to small-scale industries and individuals alike. We are a one-stop maritime and logistics services company.</p>
            
            <Link to="AboutPage" className='btn'>
              Learn More
            </Link>
          </div>
          <div class="first-3">
            <div className="first-3-half1">
              <div className="sec1">
                <div className="iconH">
                  <MdOutlineSignalCellularAlt className='icn' size={30}  />
                </div>
                <h2>Mission</h2>
                <p>Our mission is to provide our customers with reliable, efficient, and cost-effective maritime and logistics solutions.</p>
                
              </div>
              <div className="sec1">
                <div className="iconH">
                  <IoSunnySharp className='icn' size={30}  />
                </div>
                <h2>Vision</h2>
                <p>To be the leading provider of comprehensive and innovative maritime and logistics services in the industry.</p>
              </div>
            </div>
            <div className="first-3-half2">
              <div className="sec2">
                <div className="iconH">
                  <IoSunnySharp className='icn'  size={30}  />
                </div>
                <h2>Plan</h2>
                <p>We strive to achieve this by leveraging on our expertise, cutting-edge technology, and dedicated team to deliver exceptional services that meet and exceed our customers’ needs.</p>
              </div>
              <div className="sec2">
                <div className="iconH">
                  <FaCalendarAlt className='icn'  size={30}  />
                </div>
                <h2>Strength</h2>
                <p>We are committed to building lasting relationships with our customers, employees, and stakeholders, and to conducting our business with the highest level of integrity and professionalism.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About