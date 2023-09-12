import React, { useState } from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import './style.css';

function Options() {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([

  ]);
  const [selectedOptions2, setSelectedOptions2] = useState([

  ]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleSelect = (item) => {
    setSelectedOptions(item);
    setIsButtonVisible(!!item);
    console.log(item);
  };
  const handleSelectSecondMenu = (selectedItems2) => {
    console.log(selectedItems2.length)
    if (selectedItems2.length <= 3) {
      setSelectedOptions2(selectedItems2);
    }
  };
  const options = [
    { value: "software_engineer", label: "Software Engineer" },
    { value: "network_administrator", label: "Network Administrator" },
    { value: "data_scientist", label: "Data Scientist" },
    { value: "cyber_security_analyst", label: "Cyber Security Analyst" },
    { value: "system_administrator", label: "System Administrator" },
    { value: "web_developer", label: "Web Developer" },
    { value: "database_administrator", label: "Database Administrator" },
    { value: "business_analyst", label: "Business Analyst" },
    { value: "cloud_architect", label: "Cloud Architect" },
    { value: "UI_UX_designer", label: "UI/UX Designer" },
  ];
  const options2 = [
    { value: "communication", label: "Communication" },
    { value: "teamwork", label: "Teamwork" },
    { value: "problemSolving", label: "Problem Solving" },
    { value: "adaptability", label: "Adaptability" },
    { value: "timeManagement", label: "Time Management" },
    { value: "leadership", label: "Leadership" },
    { value: "emotionalIntelligence", label: "Emotional Intelligence" },
    { value: "conflictResolution", label: "Conflict Resolution" },
    { value: "criticalThinking", label: "Critical Thinking" },
    { value: "creativity", label: "Creativity" }
  ];
  return (
    <>
      <div className='hcontainer'>
        <h1>What are you looking for in your candidate?</h1>
      </div>

      <div className="selectcontainer">
        <div className="select-container">
          <Select
            defaultValue={selectedOptions}
            components={animatedComponents}
            options={options}
            onChange={handleSelect}
            className="select"
            isClearable={true}
            isSearchable={false}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            menuIsOpen={true}
            placeholder="Select the job position."

          />
        </div>

        {isButtonVisible && (
          <span className="nextcontainer">
            <button className="nextbutton">Next</button>
          </span>
        )}

        <div className="select-container">
          <Select
            components={animatedComponents}
            isMulti
            options={options2}
            value={selectedOptions2}
            onChange={handleSelectSecondMenu}
            className="select"
            isClearable={true}
            isSearchable={false}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            menuIsOpen={true}
            placeholder="Select up to 3 soft skills options."

          />
        </div>
      </div>
    </>
  );
}

export default Options



