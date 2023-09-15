
import React from 'react';
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';



const Result = ({ content }) => {
  const navigation = useNavigate();
  const handlefinishbtn = () => {

    navigation('/')

  }

  return (
    <>
      <Navbar selecteditem='Add Candidate' />
      <div className='hcontainer'>
        <h1>AI Result</h1>
      </div>
      <div className="result-container">
        <textarea className="result-textarea" value={"loremhadsjkldahaslkjhlakjhdblsakjbflaskdjbflkjasdbclkjasdbclkjasdbclkjasbdclkjasblkjcbasdkljcbasdkljcbklasdcbsadkjcbsadkjlcbsladjkbclkasdjbcklasjdbcklasdjbclksadjbckljasdbckljasdbclkjsadb"} readOnly />
        <span className="finishcontainer">
          <button className="finishairesult" onClick={handlefinishbtn}>Finish</button>
        </span>
      </div>


    </>
  );
};

export default Result;
