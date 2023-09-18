import React, { useState, useEffect } from 'react';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";

const Compare = ({ iscompared, candidate_id }) => {
  const [IsCompared, setIsCompared] = useState(iscompared);

  const handleIsCompare = async () => {
    const formData = new FormData();
    formData.append('candidate_id', candidate_id);
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: IsCompared ? "/uncompare" : "/compare",
        body: formData,
      });

      setIsCompared(!IsCompared);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(IsCompared)
  }, [])


  const handleIsCompareClick = () => {
    setIsCompared(!IsCompared);
    handleIsCompare();
  }

  return (
    <div className='like flex row'>
      {IsCompared ? (
        <button className="icon-button addition-button" onClick={handleIsCompareClick}>
          <i className="fas fa-user-minus" style={{ color: '#9c9cd5', fontSize: '24px', marginLeft: '17.2rem', marginRight: '1rem' }}></i>
        </button>
      ) : (
        <button className="icon-button addition-button" onClick={handleIsCompareClick}>
          <i className="fas fa-user-plus" style={{ color: '#9c9cd5  ', fontSize: '24px', marginLeft: '17.2rem', marginRight: '1rem' }}></i>
        </button>
      )}
    </div>
  );

};

export default Compare;