import React, { useState } from 'react';
import './style.css';

const Card = ({ imageUrl, title }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [zIndex, setZIndex] = useState(10);



  const handleAdditionClick = (e) => {
    e.stopPropagation();
    // Implement the logic for the addition icon button here
  };

  const handleShowMoreClick = (e) => {
    e.stopPropagation();
    // Implement the logic for the show more icon button here
  };

  return (
    <>
      <div
        className={`card ${isShowing ? 'show' : ''}`}
        style={{ zIndex }}

      >
        <div className="card__image-holder">
          <img className="card__image" src={imageUrl} alt={title} />
        </div>
        <div className="card-title">
          <div className="button-container">
            <button className="icon-button addition-button" onClick={handleAdditionClick}>
              <i className="fas fa-user-plus" style={{ color: '#333366', fontSize: '24px', marginLeft: '12rem', marginRight: '1rem' }}></i> {/* Change color and size */}
            </button>
            <button className="icon-button show-more-button" onClick={handleShowMoreClick}>
              <i className="fas fa-eye" style={{ color: '#333366', fontSize: '24px' }}></i> {/* Change color and size */}
            </button>
          </div>
          <h2>
            {title}
            <small>Image from unsplash.com</small>
          </h2>
        </div>
        <div className="card-flap flap1">
          <div className="card-description">
            This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
          </div>
          <div className="card-flap flap2">
            <div className="card-actions">
              <a href="#" className="btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Card;
