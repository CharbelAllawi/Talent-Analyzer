import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CandidateCard } from '../../components/Card/Card';
import './style.css'

function MyCandidates() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);

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

  const handleDelete = (idToDelete) => {
    // Filter out the candidate with the specified idToDelete
    const updatedCardData = cardData.filter(candidate => candidate.id !== idToDelete);
    setCardData(updatedCardData);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar selecteditem='My Candidates' />
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-52 mt-20">
            {cardData.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                fullName={candidate.full_name}
                position={candidate.position}
                imageUrl={candidate.image_url}
                dob={candidate.dob}
                phone={candidate.phone_number}
                email={candidate.email}
                iscompared={candidate.iscompared}
                comparepage={false}
                onDelete={handleDelete} // Pass the handleDelete function as a prop
              />
            ))}
          </div>
        </div>
      )}
      <div className='footcont'></div>
      <Footer />
    </>
  );
}

export default MyCandidates;
