import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Compare from '../Compare/Compare';

const Card = ({ id, fullName, position, imageUrl, dob, phone, email, iscompared, comparepage }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [zIndex, setZIndex] = useState(10);
  const navigation = useNavigate();




  const handlEyeClick = (e) => {
    navigation('/result/' + id)
  }
  return (
    <>
      <div
        className={`card ${isShowing ? 'show' : ''}`}
        style={{ zIndex }}

      >
        <div className="card__image-holder">
          <img className="card__image" src={"http://localhost:8000/storage/candidatesprofile/" + imageUrl} alt={fullName} />
        </div>
        <div className="card-title">
          <div className="button-container">
            {comparepage === false && (
              <>
                <button className="icon-button addition-button">
                  <Compare iscompared={iscompared} candidate_id={id} />
                </button>

                <button className="icon-button show-more-button">
                  <i className="fas fa-eye" onClick={handlEyeClick} style={{ color: '#9c9cd5', fontSize: '24px' }}></i>
                </button>
              </>
            )}
          </div>
          {comparepage === false && (
            <h2>
              {fullName}
              <small>{position}</small>
            </h2>
          )}
          {comparepage === true && (
            <h2 style={{ marginTop: '0rem' }}>
              {fullName}
              <small>{position}</small>
            </h2>
          )}
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            <ul className='uldesc'>
              <li>Email : {email}</li>
              <br></br>
              <li>Phone : {phone}</li>
              <br></br>
              <li>DOB : {dob}</li>

            </ul>
          </div>
          <div className="card-flap flap2">
            <div className="card-actions">
            </div>
          </div>
        </div>
      </div >
    </>

  );
};

export default Card;
