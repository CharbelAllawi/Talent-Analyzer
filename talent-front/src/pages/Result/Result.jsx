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
import Chart from 'chart.js/auto'; // Import Chart.js

const Result = ({ content }) => {
  const [t, i18n] = useTranslation("global");
  const [candidateskills, setCandidateSkills] = useState({});
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

          const candidateSkillsObj = JSON.parse(response.result[0]['candidate_skills']);
          setCandidateSkills(candidateSkillsObj);
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
        const candidateSkillsObj = JSON.parse(localStorage.getItem('compareskills'));
        setCandidateSkills(candidateSkillsObj);
        localStorage.removeItem('comparechosen');
        localStorage.removeItem('compareskills');
      }
    }
  }, [id, navigation]);

  const handleFinishBtn = () => {
    navigation('/');
  }
  useEffect(() => {
    if (candidateskills) {
      const ctx = document.getElementById('skillsChart');
      if (ctx) {
        if (window.myChart) {
          window.myChart.destroy();
        }
        ctx.width = 600;
        ctx.height = 400;

        window.myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(candidateskills),
            datasets: [
              {
                label: 'Skills',
                data: Object.values(candidateskills),
                backgroundColor: '#333366',
                borderColor: '#333366',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
              },
            },
          },
        });
      }
    }
  }, [candidateskills]);
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
            <div className="chart-container">
              <canvas id="skillsChart"></canvas>
            </div>
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
