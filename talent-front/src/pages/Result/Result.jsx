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
import { useTranslation } from 'react-i18next';

const Result = ({ content }) => {
  const [t, i18n] = useTranslation("global");

  const navigation = useNavigate();
  const { id } = useParams();
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState();
  const [resname, setResName] = useState();
  useEffect(() => {

    if (id !== 'compare') {
      const fetchData = async () => {
        try {
          const response = await sendRequest({
            method: requestMethods.POST,
            route: '/get-result',
            body: { 'candidate_id': id }
          });
          console.log(response);
          setText(response.result[0]['result']);
          setResName(response.result['full_name'])
          setLoading(false);
          navigation('/result/' + id);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);

      const compareResult = localStorage.getItem('compareresult');
      if (compareResult) {
        setText(compareResult);
        localStorage.removeItem('compareresult');
        setName(localStorage.getItem('comparechosen'));
        localStorage.removeItem('comparechosen');
      }
    }
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
          <Navbar />
          <div className='hcontainer'>
            <h1>{name ? `${t("airesult.best")} ${name}` : `${t("airesult.ai")} ${resname}`}</h1>
          </div>
          <div className="result-container">
            <textarea className="result-textarea" value={text} readOnly />
            <span className="finishcontainer">
              <button className="finishairesult" onClick={handleFinishBtn}>{t("airesult.finish")}</button>
            </span>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Result;