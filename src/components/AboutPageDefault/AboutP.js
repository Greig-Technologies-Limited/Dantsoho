import React from 'react'
import './AboutP.css'
import AboutW from '../../assets/about-welcome.jpg'
import Last from '../../assets/drilling.jpg'
import One from '../../assets/icon-concept.png'
import Two from '../../assets/icon-process.png'
import Three from '../../assets/icon-engineer.png'
import Four from '../../assets/icon-artist.png'
import { FaGreaterThan } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const AboutP = () => {
  return (
    <div className="abouW">
        <div className="background">
        <div className="text">  <h1>About</h1>
            <p><Link to="/" className='goHome'>Go Back</Link> <FaGreaterThan className='iconStyle' /> About</p></div>
        </div>
       
        <div className="con">
           
        <div className="our">
        <div className="ah">
            <h3 className='red'>About Our 
            Company </h3> 
            <hr className='hr' />
            </div>
            
            <h2 className='secA'>Our business is open to all and sundry</h2>
            <p className='danT'>Dantsoho International is a maritime, energy and trading company serving governments and commercial markets in Nigeria and countries around the globe. It was founded in 1998, headquartered in Lagos, Nigeria. Dantsoho International (Nig) Ltd., is a front runner in the Nigeria maritime and logistics services and a leader in world freight with a proven track record that stem back some 15 years.
            </p>
                <h3>Our Vision and Mission</h3>
                <p>Vision: To be the leading provider of comprehensive and innovative maritime and logistics services in the industry, with a focus on exceeding our customers’ expectations.</p>

                <p>Mission: Our mission is to provide our customers with reliable, efficient, and cost-effective maritime and logistics solutions. We strive to achieve this by leveraging our expertise, cutting-edge technology, and dedicated team to deliver exceptional services that meet and exceed our customers’ needs. We are committed to building lasting relationships with our customers, employees, and stakeholders, and to conducting our business with the highest level of integrity and professionalism.</p>
                <h3 className='lsa'>One Team, Many Talents</h3>
                </div>
                <div className="imgTag">
                <img src={AboutW} alt="" />
            </div>
            </div>

            <div className="blackBg">
                <div className="width">
                <div> <img src={One} alt="" /></div>
                <div className="first">
                    <h1>6149</h1>
                    <p>Contacts</p>
                </div>

                <div><img src={Two} alt="" /></div>
                <div className="second">
                    <h1>560+</h1>
                    <p>Winning awards</p>
                </div>

               <div> <img src={Three} alt="" /></div>
                <div className="third">
                    <h1>3507</h1>
                    <p>Industries Served</p>
                </div>

                <div> <img src={Four} alt="" /></div>
                <div className="fourth">
                    <h1>3507</h1>
                    <p>Completed Projects</p>
                </div>
                </div>
            </div>
            
            <div className="absolute">
                <div className="lastDivii">
                <img src={Last} alt="" />

                <div className="progressP">
                    <h1>Our Broad Range of Services</h1>
                    <p>Dantsoho international offers a broad range of maritime and logistics services including:</p>
                    <div className="progressCon">
                        <div className="info">
                            <p>Protective Agency</p>
                            <p>100%</p>
                           
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Ship Agency</p>
                            <p>100%</p>
                            
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Consultancy Services</p>
                            <p>100%</p>
                         
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Supply of Bunkersy</p>
                            <p>100%</p>
                          
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Vessel Brokerage</p>
                            <p>100%</p>
                           
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Ship Husbandingy</p>
                            <p>100%</p>
                           
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Crew Changes</p>
                            <p>100%</p>
                          
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                        <div className="info">
                            <p>Clearing & Delivery</p>
                            <p>100%</p>
                           
                        </div>
                        <progress max='100' value='100'>
                            </progress>
                    
                        </div>
                        
                </div>
            </div>

           
        </div>
       

    </div>
  )
}