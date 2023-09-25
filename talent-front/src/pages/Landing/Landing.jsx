import React, { useEffect, useRef, useState } from 'react';
import herovideo from '../../assets/herovideo.mp4';
import whyus from '../../assets/whyus.mp4';
import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import mercedes from '../../assets/mercedes.png';
import murex from '../../assets/murex.png';
import facebook from '../../assets/facebook.png';
import apple from '../../assets/apple.png';
import logo from "../../assets/talentheader.svg";
import { useNavigate } from 'react-router-dom';
import "./style.css"
import Typed from 'typed.js';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useTranslation } from 'react-i18next';


function Landing() {
  const navigation = useNavigate();
  const [t, i18n] = useTranslation("global");
  const typedTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handlestartbtn = () => {
    if (localStorage.getItem('token') != '') {
      navigation('/candidateprofile')
    }
    else {
      navigation('/account')

    }
  }
  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const items = Array.from(document.querySelectorAll('.items'));

    let currentIndex = 0;

    const carousel = () => {
      const itemActive = items[currentIndex];
      itemActive.classList.remove('active');

      currentIndex = (currentIndex + 1) % items.length;

      const nextItem = items[currentIndex];
      nextItem.classList.add('active');
    }

    const interval = setInterval(carousel, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    const options = {
      strings: ['Employee?', 'موظف؟', 'Empleado?', 'Impiegato?', 'Pracownik?'],
      typeSpeed: 75,
      backSpeed: 45,
      bindInputFocusEvents: true,
      loop: true,
      cursorChar: '<span class="typed-cursor">_</span>',
      backDelay: 1200,
      startDelay: 0,
      preStringTyped: (arrayPos, self) => {
        let colors = [
          'rgba(40, 238, 167, 0.93)',
          'rgba(40, 238, 167, 0.93)',
          'rgba(152, 100, 218, 0.93)',
          'rgba(251, 80, 142, 0.93)',
        ];
        let textColors = ['#363738', '#363738', '#ffffff', '#ffffff'];

        const colorOverlayElement = document.getElementById('color-overlay');
        const contentWrapperElement = document.getElementById('hero-section-content-wrapper');

        if (colorOverlayElement && contentWrapperElement) {
          colorOverlayElement.style.backgroundColor = colors[arrayPos];
          contentWrapperElement.style.color = textColors[arrayPos];
        }
      },
    };

    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <Navbar selecteditem="Home" />
      <div className="landing-container">
        <div className="">

          <div className="relative hero-header-container">

            <video autoPlay muted className="video">
              <source src={herovideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div>
              {isVisible && (
                <div className="talentcontainer " >
                  <img className="headlogo fade-in" src={logo} alt="Logo" />
                </div>
              )}
            </div>

            <div className="hirecontainer">

              <h1 className="hireword">{t("landing.title")}</h1>

              <span className='autoword' ref={typedTextRef}></span>
              <div className="startcontainer">
                <button class="startbtn" onClick={handlestartbtn}>{t("landing.titlebutton")}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="success-container">
          <div className="whyus">
            <h1 className="whychoosewordcont">
              <div class="arrow">&gt;</div>
              {t("landing.whyus")}
            </h1>
            <video autoPlay loop muted className="video">
              <source src={whyus} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="relative hero-container">
          <div className="whyus-container">
            <h1 className="successcontainer">
              <div class="arrow">&gt;</div>
              {t("landing.success")}
            </h1>
          </div>
          <div>
            <div className="wrapper-2">
              <div className="itemsfixed">
                <br></br>
                <br></br>
                <p>   {t("landing.success1")}</p>
                <br></br>
                <br></br>
                <span className="name">{t("landing.name4")}</span>
                <span className="pic">
                  <img src={facebook} alt="" />
                </span>
              </div>
            </div>
            <div className="wrapper-3">
              <div className="itemsfixed">
                <br></br>
                <br></br>
                <p>   {t("landing.success2")}</p>
                <br></br>
                <span className="name">{t("landing.name2")}</span>
                <span className="pic">
                  <img src={apple} alt="" />
                </span>
              </div>
            </div>
            <div className="wrapper">
              <div className="items active">
                <br></br>
                <br></br>
                <p>   {t("landing.success3")}</p>
                <span className="name">{t("landing.name3")}</span>
                <span className="pic">
                  <img src={google} alt="" />
                </span>
              </div>
              <div className="items">
                <br></br>
                <br></br>
                <p>   {t("landing.success4")}</p>
                <br></br>
                <span className="name">{t("landing.name1")}</span>
                <span className="pic">
                  <img src={amazon} alt="" />
                </span>
              </div>
              <div className="items">
                <br></br>
                <br></br>
                <p>   {t("landing.success5")}</p>
                <br></br>
                <span className="name">{t("landing.name2")}</span>
                <span className="pic">
                  <img src={mercedes} alt="" />
                </span>
              </div>
              <div className="items">
                <br></br>
                <br></br>
                <p>   {t("landing.success6")}</p>
                <br></br>
                <span className="name">{t("landing.name1")}</span>
                <span className="pic">
                  <img src={murex} alt="" />
                </span>
              </div>
            </div>

          </div >

        </div>

        <Footer />
      </div >
    </>


  );
}

export default Landing;
