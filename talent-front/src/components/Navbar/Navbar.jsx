import React, { useState, useEffect } from 'react';
import navlogo from "../../assets/navlogo.svg";
import "./style.css";
import { useNavigate } from 'react-router-dom';
import { localStorageAction } from '../../core/config/localstorage';
import { useTranslation } from 'react-i18next';

function Navbar(selecteditem) {
  const navigation = useNavigate();
  const [t, i18n] = useTranslation("global");
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setSelectedLanguage(lang)
  };
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('lang') || 'en');

  useEffect(() => {
    if (localStorage.getItem("lang") != null) {
      i18n.changeLanguage(localStorage.getItem("lang"));
    }
  }, [])

  const token = localStorage.getItem('token');
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

  useEffect(() => {
    if (token != '') {
      setSelectedNavItem(selecteditem['selecteditem']);
    } else {
      setSelectedNavItem(selecteditem['selecteditem']);
    }
  }, [token]);

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
          {token ? (
            <li>
              <a href="/account" className={`nav-link ${selectedNavItem === 'Account' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Account')}>Account</a>
            </li>
          ) : (
            <li>
              <a href="/login" className={`nav-link ${selectedNavItem === 'Login' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Login')}>Login</a>
            </li>
          )}
        </ul>
        <div className='closemenu'>
          <button onClick={toggleMenu}>X</button>
        </div>
      </div>
    )
  );

  const handleNavItemClick = (selecteditem) => {

    console.log(selecteditem)
    if (selecteditem == 'Sign Out') {
      localStorage.setItem('token', '')
      navigation('/')
    }

    setSelectedNavItem(selecteditem);
  };

  return (
    <nav className='flex flex-col md:flex-row items-center justify-between pt-5 pb-2 md:pt-5 md:pb-5 h-20 w-auto bg-custom-purple'>
      {renderLogo()}
      {renderBurgerButton()}
      {renderMobileMenu()}
      {isMobile ? null : (
        <ul className="flex flex-col md:flex-row  justify-between text-white md:flex text-lg font-bold">
          
          {token != "" ? (
            <>
              <li className={`md:mr-20 mb-2 md:mb-0 ${isMobile ? 'mr-20' : ''}`}>
                <div className="language-dropdown">
                  <label className="language-label" htmlFor="language-select">Select Language:</label>
                  <select
                    className="language-select"
                    id="language-select"
                    onChange={(e) => handleChangeLanguage(e.target.value)}
                    value={selectedLanguage}
                  >
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                    <option value="es">ES</option>
                    <option value="fr">FR</option>
                    <option value="in">IN</option>
                    <option value="zh">ZH</option>
                  </select>
                </div>
              </li>
              <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
                <a href="/" className={`nav-link ${selectedNavItem === 'Home' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Home')}>{t("navbar.home")}</a>
              </li>
              <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
                <a href="/mycandidates" className={`nav-link ${selectedNavItem === 'My Candidates' ? 'selected' : ''}`} onClick={() => handleNavItemClick('My Candidates')}>{t("navbar.mycandidates")}</a>
              </li>
              <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
                <a href="/candidateprofile" className={`nav-link ${selectedNavItem === 'Add Candidate' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Add Candidate')}>{t("navbar.addinterview")}</a>
              </li>

              <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
                <a href="/comparecandidates" className={`nav-link ${selectedNavItem === 'Compare' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Commpare')}>{t("navbar.compare")}</a>
              </li>

              <li className={`md:mr-20 mb-2 md:mb-0 ${isMobile ? 'mr-20' : ''}`}>
                <a href="/account" className={`nav-link ${selectedNavItem === 'Login' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Sign Out')}>{t("navbar.signout")}</a>
              </li>
            </>


          ) : (
            <>
              <li className={`md:mr-20  mb-2 md:mb-0  ${isMobile ? 'mr-20' : ''}`}>
                <a href="/" className={`nav-link ${selectedNavItem === 'Home' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Home')}>Home</a>
              </li>
              <li className={`md:mr-20 mb-2 md:mb-0 ${isMobile ? 'mr-20' : ''}`}>
                <a href="/account" className={`nav-link ${selectedNavItem === 'Login' ? 'selected' : ''}`} onClick={() => handleNavItemClick('Login')}>Login</a>
              </li>
            </>

          )}
        </ul>
      )
      }
    </nav >
  );
}

export default Navbar;
