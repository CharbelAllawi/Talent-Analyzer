import React, { useState, useEffect } from 'react';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import './style.css'
const Compare = ({ iscompared, candidate_id }) => {
  const [isCompared, setIsCompared] = useState(iscompared);

  const handleIsCompare = async () => {
    const formData = new FormData();
    formData.append('candidate_id', candidate_id);
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: isCompared ? "/uncompare" : "/compare",
        body: formData,
      });

      setIsCompared(!isCompared);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(isCompared)
  }, [])

  const handleToggleChange = () => {
    setIsCompared(!isCompared);
    handleIsCompare();
  }

  return (
    <div className='like flex row toggle'>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isCompared}
          onChange={handleToggleChange}
        />
        <span className="slider"></span>
        <div className="tooltip">Add to Compare</div>
      </label>
    </div>
  );
};

export default Compare;
