import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import "./Navbar.css";
// import brandLogo from '../../assets/dantsoho.png';
import spin from '../../assets/dantsoho.png';

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");

    const navToggle = () => {
        setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");

        // Icon Toggler
        setToggleIcon(toggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler");
    };

    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true, duration: 500 });
    };

    const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle(rotationAngle + 1); // Adjust the speed of rotation by changing the increment value
    }, 50); // Adjust the interval duration for the speed of rotation

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [rotationAngle]);

    return (
        <nav className="nav">
            <RouterLink to="/" className='nav__brand' onClick={scrollToTop}>
            <div className="image-container" style={{ transform: `rotateY(${rotationAngle}deg)` }}>
            <img className='yay'
            src={spin}
            alt="Rotating"
        />
      </div>
            </RouterLink>
            <ul className={active}>
                <li className="nav__item"><ScrollLink to="slider" smooth={true} duration={500}>Home</ScrollLink></li>
                <li className="nav__item"><ScrollLink to="thi-page" smooth={true} duration={500}>About Us</ScrollLink></li>
                <li className="nav__item"><ScrollLink to="about" smooth={true} duration={500}>Services</ScrollLink></li>
                <li className="nav__item"><ScrollLink to="contact" smooth={true} duration={500}>Contact Us</ScrollLink></li>
                {/* <li className="nav__item"><ScrollLink to="foundation" smooth={true} duration={500}>Foundation</ScrollLink></li> */}

                {/* For links that go to another page */}

                {/* <li className="nav__item"><RouterLink to="/AboutPage">About Us</RouterLink></li> */}
                <li className="nav__item"><RouterLink to="/FoundationPage">Foundation</RouterLink></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
