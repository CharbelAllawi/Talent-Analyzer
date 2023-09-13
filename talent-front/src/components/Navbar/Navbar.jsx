import React, { useState, useEffect } from 'react';
import navlogo from "../../assets/navlogo.svg";
import "./style.css";

function Navbar(selecteditem) {
  const [selectedNavItem, setSelectedNavItem] = useState(selecteditem['selecteditem']);

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavItemClick = (selecteditem) => {
    setSelectedNavItem(selecteditem);
  };

  const renderLogo = () => (
    <div className={`pr-5 ${isMobile ? 'block md:hidden' : 'hidden md:block'}`}>
      <img
        src={navlogo}
        alt="Logo"
        style={{ width: '100px', height: isMobile ? '80px' : '50px', paddingTop: isMobile ? '0px' : '0px', marginTop: isMobile ? '0px' : '0px', marginLeft: isMobile ? '0px' : '40px' }}
      />
    </div>
  );

  const renderBurgerButton = () => (
    isMobile && (
      <button
        className={`md:hidden hamburger mt-10 ${showMenu ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </button>
    )
  );

  const renderMobileMenu = () => (
    isMobile && showMenu && (
      <div className="mobile-menu text-white">
        <ul>
          <li>
            <a href="/" className={`nav-link ${selectedNavItem === 'Home' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</a>
          </li>
          <li>
            <a href="/account" className={`nav-link ${selectedNavItem === 'Login' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Login')}>Login</a>
          </li>
          {/* <li>
            <a href="#" className={`nav-link ${selectedNavItem === 'Account' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Account')}>Account</a>
          </li>
          <li>
            <a href="#" className={`nav-link ${selectedNavItem === 'Contact' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Contact')}>Contact</a>
          </li> */}
        </ul>
        <div className='closemenu'>
          <button onClick={toggleMenu}>X</button>
        </div>
      </div>
    )
  );

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between pt-5 pb-2 md:pt-5 md:pb-5 h-20 w-auto bg-custom-purple'>
      {renderLogo()}
      {renderBurgerButton()}
      {renderMobileMenu()}
      {isMobile ? null : (
        <ul className="flex flex-col md:flex-row  justify-between text-white md:flex text-lg font-bold">
          <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
            <a href="/" className={`nav-link ${selectedNavItem === 'Home' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</a>
          </li>
          <li className={`md:mr-20 mb-2 md:mb-0 ${isMobile ? 'mr-20' : ''}`}>

            <a href="account" className={`nav-link ${selectedNavItem === 'Login' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Login')}>Login</a>
          </li>
          {/* <li className={`md:mr-20 mb-2 md:mb-0 ${isMobile ? 'mr-20' : ''}`}>
            <a href="#" className={`nav-link ${selectedNavItem === 'Account' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Account')}>Account</a>
          </li>
          <li className={`mb-2 md:mb-0 ${isMobile ? 'mr-20' : 'mr-20'}`}>
            <a href="#" className={`nav-link ${selectedNavItem === 'Contact' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Contact')}>Contact</a>
          </li> */}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
