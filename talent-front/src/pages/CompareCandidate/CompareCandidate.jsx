import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card'
import $ from 'jquery'; // Import jQuery
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';



function CompareCandidate() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

  const [zIndex, setZIndex] = useState(10);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.GET,
          route: '/get-candidates',
        });
        setLoading(false);
        console.log(response);

        setCardData(response);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchData();

  }, []);


  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar selecteditem='Compare' />
          <div className="cards">
            {cardData.map((candidate) => (
              candidate.iscompared === true ? (
                <Card
                  key={candidate.id}
                  id={candidate.id}
                  fullName={candidate.full_name}
                  position={candidate.position}
                  imageUrl={candidate.image_url}
                  dob={candidate.dob}
                  phone={candidate.phone_number}
                  email={candidate.email}
                  iscompared={candidate.iscompared}
                  comparepage={true}
                />
              ) : null
            ))}
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default CompareCandidate;