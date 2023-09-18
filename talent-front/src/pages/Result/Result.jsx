import React, { useEffect, useState } from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { localStorageAction } from "../../core/config/localstorage";
import Loading from '../Loading/Loading';

const Result = ({ content }) => {
  const navigation = useNavigate();
  const { id } = useParams();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await sendRequest({
          method: requestMethods.POST,
          route: '/get-result',
          body: { 'candidate_id': id }
        });
        setText(response.result[0]['result']);
        setLoading(false);
        console.log(response)
        console.log(id)
        navigation('/result/' + id);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigation]);

  const handleFinishBtn = () => {
    navigation('/');
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar selecteditem='Add Candidate' />
          <div className='hcontainer'>
            <h1>AI Result</h1>
          </div>
          <div className="result-container">
            <textarea className="result-textarea" value={text} readOnly />
            <span className="finishcontainer">
              <button className="finishairesult" onClick={handleFinishBtn}>Finish</button>
            </span>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Result;
