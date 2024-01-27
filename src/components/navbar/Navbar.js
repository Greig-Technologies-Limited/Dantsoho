import React, {useState} from 'react'
import "./Navbar.css"
import brandLogo from '../../assets/dantsoho.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler")
    const navToggle = () => {
        if (active === "nav__menu") {
          setActive("nav__menu nav__active");
        } else setActive("nav__menu");
    
        // Icon Toggler
        toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler")
      };

  return (
    <nav className="nav">
        <a href="/" className='nav__brand'>
          <img src={brandLogo} alt="" />
        </a>
        <ul className={active}>
            <li className="nav__item"><a href="/" className='nav__link'>Home</a></li>
            <li className="nav__item"><a href="/" className='nav__link'><Link to="/AboutPage">About Us</Link></a></li>
            <li className="nav__item"><a href="/" className='nav__link'><Link to="/FoundationPage">Foundation</Link></a></li>
            {/* <li className="nav__item"><a href="/" className='nav__link'>Contact Us</a></li> */}
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
  )
}

export default Navbar