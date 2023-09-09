import React, { useEffect, useRef } from 'react';
import herovideo from '../../assets/herovideo.mp4';
import whyus from '../../assets/whyus.mp4';
import google from '../../assets/google.png';
import amazon from '../../assets/amazon.png';
import mercedes from '../../assets/mercedes.png';
import murex from '../../assets/murex.png';
import facebook from '../../assets/facebook.png';
import apple from '../../assets/apple.png';


import "./style.css"
import Typed from 'typed.js';


function Landing() {
  const typedTextRef = useRef(null);
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
    <div className="landing-container">
      <div className="">
        <div className="relative hero-header-container">
          <video autoPlay muted className="video">
            <source src={herovideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hirecontainer">
            <h1 className="hireword">Hiring</h1>
            <span className='autoword' ref={typedTextRef}></span>
            <div className="startcontainer">
              <button class="startbtn">Start Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="success-container">
        <div className="whyus">
          <h1 className="whychoosewordcont">
            <div class="arrow">&gt;</div>
            Why choose us?
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
            Success Stories
          </h1>
        </div>
        <div>
          <div className="wrapper-2">
            <div className="itemsfixed">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">Dmitri</span>
              <span className="pic">
                <img src={facebook} alt="" />
              </span>
            </div>
          </div>
          <div className="wrapper-3">
            <div className="itemsfixed">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">Dmitri</span>
              <span className="pic">
                <img src={apple} alt="" />
              </span>
            </div>
          </div>
          <div className="wrapper">
            <div className="items active">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">Dmitri</span>
              <span className="pic">
                <img src={google} alt="" />
              </span>
            </div>
            <div className="items">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">James</span>
              <span className="pic">
                <img src={amazon} alt="" />
              </span>
            </div>
            <div className="items">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">Daniel</span>
              <span className="pic">
                <img src={mercedes} alt="" />
              </span>
            </div>
            <div className="items">
              <p>-Using Talent Analyzer, they found a diamond in the rough. Our AI analysis identified a candidate's exceptional problem-solving abilities and effective teamwork,</p>
              <br></br>
              <p>-Before they were highlighted in the traditional interview process. The result? The candidate seamlessly integrated into the team, becoming a driving force </p>
              <br></br>
              <p>-Innovative projects.Their ability to adapt quickly to new challenges and their proactive approach to finding solutions impressed both colleagues and superiors.</p>
              <br></br>
              <span className="name">Daniel</span>
              <span className="pic">
                <img src={murex} alt="" />
              </span>
            </div>
          </div>

        </div >

      </div>

    </div >

  );
}

export default Landing;
