import React from 'react';
import Card from '../../components/Card/Card'
import Navbar from '../../components/Navbar/Navbar';

const MyCandidates = () => {
  const cardData = [
    {
      imageUrl: 'https://source.unsplash.com/300x225/?wave',
      title: 'Card 1 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?beach',
      title: 'Card 2 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?mountain',
      title: 'Card 3 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?wave',
      title: 'Card 1 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?beach',
      title: 'Card 2 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?mountain',
      title: 'Card 3 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?wave',
      title: 'Card 1 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?beach',
      title: 'Card 2 Title',
    },
    {
      imageUrl: 'https://source.unsplash.com/300x225/?mountain',
      title: 'Card 3 Title',
    },
    // Add more card data as needed
  ];

  return (
    <>
      <Navbar selecteditem='My Candidates' />
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} title={card.title} />
        ))}
      </div>
    </>
  );
};

export default MyCandidates;
