import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CandidateCard } from '../../components/Card/Card';
import './style.css'
import { useTranslation } from 'react-i18next';

function MyCandidates() {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [t, i18n] = useTranslation("global");

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
          <div className='hcontainer'>
            <h1>{t("mycandidates.mycandidates")}</h1>
          </div>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-52 mt-20">
            {cardData.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                id={candidate.id}
                full_name={candidate.full_name}
                position={candidate.position}
                imageUrl={candidate.image_url}
                date_of_birth={candidate.dob}
                phone={candidate.phone_number}
                email={candidate.email}
                iscompared={candidate.iscompared}
                comparepage={false}
                onDelete={handleDelete}
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
