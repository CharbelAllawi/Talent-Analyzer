import React from 'react';
import './style.css'; 
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
