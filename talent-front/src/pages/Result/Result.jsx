
import React from 'react';
import './style.css';

const Result = ({ content }) => {
  return (
    <>
      <div className='hcontainer'>
        <h1>AI Result</h1>
      </div>
      <div className="result-container">
        <textarea className="result-textarea" value={"loremhadsjkldahaslkjhlakjhdblsakjbflaskdjbflkjasdbclkjasdbclkjasdbclkjasbdclkjasblkjcbasdkljcbasdkljcbklasdcbsadkjcbsadkjlcbsladjkbclkasdjbcklasjdbcklasdjbclksadjbckljasdbckljasdbclkjsadb"} readOnly />
      </div>
    </>
  );
};

export default Result;
