import React from 'react'
import './Foundation.css'
import { FaGreaterThan } from 'react-icons/fa'
import sTeh from '../../assets/stethoscope.jpeg'
import Edu from '../../assets/education.jpeg'
import Emp from '../../assets/empowering-youth-kenya.jpeg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import { useTypewriter, Cursor } from 'react-simple-typewriter'
export const Foundation = () => {
  const [text] = useTypewriter({
    words: ['Contributing', 'Giving Back', ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  return (
    <div className="foundation">
      <div className="backgroundImg">
        <div className="fText">
          <h1>
            Foundation
            <p>Home <FaGreaterThan className='iconStyle' /> Foundation</p>
          </h1>
        </div>
      </div>
      <div className="foundationBase">
        <h1>
          Dantsoho {''}
          <span style={{ fontWeight: 'bold', color: 'red' }}>
            {text} <Cursor cursorStyle='|'/>
          </span>to Society
        </h1>
            <div className="fP">
            <p>At our one-stop maritime and logistics services company, we believe in giving back to the society and making a positive impact on the world around us. We are committed to supporting various social causes, including health, education, youth, and women’s empowerment.</p>
            <p>Through our corporate social responsibility initiatives, we aim to make a meaningful difference in the lives of those in need. We collaborate with nonprofit organizations and community groups to support various programs and projects that benefit society.</p>
            <p>In the area of health, we have supported initiatives such as health education campaigns, medical outreach programs, and the provision of medical equipment to underserved communities. Our focus on education includes support for school infrastructure development, scholarship programs, and teacher training programs.</p>
            <p>We also have a strong commitment to youth and women’s empowerment. Through our programs, we provide mentorship, skills training, and entrepreneurship support to young people and women, helping them to realize their full potential and contribute to their communities.</p>
            <p>At our company, we believe that corporate social responsibility is not just a moral obligation but also a business imperative. By giving back to society, we can make a positive impact on the world while building a sustainable business that benefits all stakeholders.</p>
            </div>
        </div>
        <div className="img3">
            <div className="one">
                <img src={sTeh} alt="" />
                <p>01</p>
                <div className="words">
                <h1>Health</h1>
                </div>
            </div>
            <div className="two">
            <img src={Edu} alt="" />
            <p>02</p>
            <div className="words">
            <h1>Education</h1>
            </div>
            </div>
            <div className="three">
            <p>03</p>
            <div className="words">
            <img src={Emp} alt="" />
            <h1>Youth and Women Empowerment</h1>
            </div>
            </div>
        </div>
    </div>
  )
}