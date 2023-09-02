import React, { useEffect, useRef } from 'react';
import heroimage from '../assets/herosec.png';
import './style.css';
import Typed from 'typed.js';

function Landing() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Employee?', 'موظف؟', 'Empleado?', 'Impiegato?', 'Funcionário?', 'Сотрудник?', 'Pracownik?'],
      typeSpeed: 75,
      backSpeed: 45,
      bindInputFocusEvents: true,
      loop: true,
      cursorChar: '_',
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
      <div className="flex">
        <div className="relative hero-container">
          <img src={heroimage} alt="Hero Image" className="full-width-image" />
          <div className="full-width-image transform -translate-x-1/2 -translate-y-1/2 text-center text-6xl left-22 top-22 font-bold text-white fixed">
            <h1 className="hero-text pb-10">Hiring</h1>
            <h1 className='ml-23 hero-text-2' id="typed_text" >
              <span ref={typedTextRef}></span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;