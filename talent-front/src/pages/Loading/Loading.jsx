import React from 'react';
import './style.css'; // Import your CSS file or style it inline
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function Loading() {
  return (
    <>
      <Navbar />

      <div class="lds-roller">

        <div>
        </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>


      <Footer />
    </>
  );
}

export default Loading;
