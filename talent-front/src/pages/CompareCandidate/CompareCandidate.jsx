import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CandidateCard } from '../../components/Card/Card';
import { useTranslation } from 'react-i18next';

import "./style.css"

function CompareCandidate() {



  const navigation = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const [t, i18n] = useTranslation("global");


  const handleCompareBtn = async () => {
    setLoading(true)
    let prompt = "i want you analyze the below candidates and return the chosen candidate\nreturn the answer as JSON parsable object (do not return any text or explanation or notes before or after the JSON object)\nalso make sure that the result inside the json object is only 5 lines maximum \nThe JSON object should be in this format {chosen_candidate :   , result: , candidate_skills:}"
    cardData.forEach(data => {
      if (data['iscompared'] == true) {
        prompt += "\ncandidate_name:" + data['full_name']
        prompt += "\nanalyzed result:" + data['result'] + "\n"
        prompt += "\nanalyzed result:" + data['candidate_skills'] + "\n"
      }
    });
    prompt += '\n(do not return any text or explanation or notes before or after the JSON object)'
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/comparecandidates',
        body: { 'prompt': prompt }
      });

      setLoading(false)
      localStorage.setItem("compareresult", response['result']);
      localStorage.setItem("comparechosen", response['chosen_candidate']);
      localStorage.setItem("compareskills", JSON.stringify(response['candidate_skills']));

      navigation('/result/compare')
    } catch (error) {
    }
  }
  const handleDelete = (idToDelete) => {
    const updatedCardData = cardData.filter(candidate => candidate.id !== idToDelete);
    setCardData(updatedCardData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.GET,
          route: '/get-candidates',
        });
        setLoading(false);
        setCardData(response);
        console.log(response);
        if (response.filter((candidate) => candidate.iscompared).length < 2) {
          setTimeout(() => {
            navigation('/mycandidates');
          }, 5000);
        }
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
          <Navbar selecteditem="Compare" />
          <div className='hcontainer'>
            <h1>{t("comparecandidates.comparecandidates")}</h1>
          </div>
          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ml-52 mt-20">

            {cardData.map((candidate) => {

              if (candidate.iscompared && cardData.filter((candidate) => candidate.iscompared).length >= 2) {
                return (
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
                    comparepage={true}
                    onDelete={handleDelete}
                  />
                );
              }
            })}
          </div>
          <span className="comparecontainer">

            {cardData.filter((candidate) => candidate.iscompared).length < 2 && (
              <div className='h2container'>
                <h2>{t("comparecandidates.select")}</h2>
                <h2>{t("comparecandidates.move")}</h2>
              </div>)}
            {cardData.filter((candidate) => candidate.iscompared).length >= 2 && (
              <button className="comparebutton" onClick={handleCompareBtn}>{t("comparecandidates.compare")}</button>
            )}
          </span>

          <div className='footcont'></div>

          <Footer />

        </>
      )
      }
    </>
  );

}
export default CompareCandidate;
