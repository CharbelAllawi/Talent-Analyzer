import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CandidateCard } from '../../components/Card/Card';
import Snackbar from '../../components/Snackbar/Snackbar';
import "./style.css"

function CompareCandidate() {

  const SnackbarType = {
    success: "success",
    fail: "fail",
  };

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
          <Navbar selecteditem="Compare" />

          <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ml-52 mt-20">
            {cardData.length > 0 ? (
              cardData.map((candidate) => (
                candidate.iscompared ? (
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
                    comparepage={true}
                  />
                ) : null
              ))
            ) : (
              <>
                {navigation('/')}
                <Snackbar

                  message="Task Completed Successfully!"
                  type={SnackbarType.success}
                />



              </>


            )}

          </div>
          <span className="comparecontainer">
            <button className="comparebutton">Compare</button>
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
