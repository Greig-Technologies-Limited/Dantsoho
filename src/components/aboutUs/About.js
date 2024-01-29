import React from 'react'
import "./About.css"
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoSunnySharp } from 'react-icons/io5';

const About = () => {
  return (
    <div class="thi-page">
      <div class="thi-container">
        <div class="thi-con">
          <div class="thi-divs">
            <h5>About Us</h5>
            <h1>One Stop Maritime And Logistic Services Company.</h1>
            <p>Our business is open to all and sundry; Federal Government, State Government and Local Government. We are open to medium- and short-term contracts, including one-offs, for medium- to small-scale industries and individuals alike. We are a one-stop maritime and logistics services company.</p>
          </div>
          <div class="first-3">
            <div className="first-3-half1">
              <div className="sec1">
                <div className="iconH">
                  <MdOutlineSignalCellularAlt className='icn' size={30}  />
                </div>
                <h2>Eius provident</h2>
                <p>Magni repellendus vel ullam hic officia   accusantium ipsa dolor omnis dolor voluptatem</p>
                
              </div>
              <div className="sec1">
                <div className="iconH">
                  <IoSunnySharp className='icn' size={30}  />
                </div>
                <h2>Eius provident</h2>
                <p>Magni repellendus vel ullam hic officia   accusantium ipsa dolor omnis dolor voluptatem</p>
              </div>
            </div>
            <div className="first-3-half2">
              <div className="sec2">
                <div className="iconH">
                  <IoSunnySharp className='icn'  size={30}  />
                </div>
                <h2>Eius provident</h2>
                <p>Magni repellendus vel ullam hic officia   accusantium ipsa dolor omnis dolor voluptatem</p>
              </div>
              <div className="sec2">
                <div className="iconH">
                  <FaCalendarAlt className='icn'  size={30}  />
                </div>
                <h2>Eius provident</h2>
                <p>Magni repellendus vel ullam hic officia   accusantium ipsa dolor omnis dolor voluptatem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About