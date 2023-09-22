import React, { useState } from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useParams } from 'react-router-dom';

import { localStorageAction } from "../../core/config/localstorage";
import Footer from '../../components/Footer/Footer';
function Options() {
  const animatedComponents = makeAnimated();
  const [selectedOptions, setSelectedOptions] = useState([

  ]);
  const { id } = useParams();

  const [selectedOptions2, setSelectedOptions2] = useState([

  ]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const navigation = useNavigate();
  const handleSelect = (item) => {
    setSelectedOptions(item);
    setIsButtonVisible(!!item);
    console.log(item);
  };
  const handlenextbtn = async () => {
    let text = "i want you analyze the interview while taking into consideration the job position and soft skills required by recruiter\nreturn the answer as JSON parsable object (do not return any text or explanation or notes before or after the JSON object)\nalso make sure that the result inside the json object is only 5 lines maximum and the percentage should be between 1 and 100 based on candidate performance.\nThe JSON object should be in this format {percentage :   , result:}"
    text += "\nJob position is: " + selectedOptions['value'];
    if (selectedOptions2.length !== 0) {
      text += "\nSoft skills are: ";
      for (let i = 0; i < selectedOptions2.length; i++) {
        text += selectedOptions2[i]['value'];
        if (i !== selectedOptions2.length - 1) {
          text += ", ";
        } else {
          text += "\n";
        }
      }
    }
    navigation('/loading')
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/write-text-file',
        body: { 'text': text, 'id': id },
      });
      try {
        const response = await sendRequest({
          method: requestMethods.POST,
          route: '/openai',
          body: { 'id': id },
        });

        navigation('/result/' + id)

      } catch (error) {
        console.log(error);
      }

    } catch (error) {
      console.log(error);
    }
  };
  const handleSelectSecondMenu = (selectedItems2) => {
    console.log(selectedItems2.length)
    if (selectedItems2.length <= 3) {
      setSelectedOptions2(selectedItems2);
    }
  };
  const options = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Network Administrator", label: "Network Administrator" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Cyber Security Analyst", label: "Cyber Security Analyst" },
    { value: "System Administrator", label: "System Administrator" },
    { value: "Web Developer", label: "Web Developer" },
    { value: "Database Administrator", label: "Database Administrator" },
    { value: "Business Analyst", label: "Business Analyst" },
    { value: "Cloud Architect", label: "Cloud Architect" },
    { value: "UI/UX Designer", label: "UI/UX Designer" },
  ];
  const options2 = [
    { value: "Communication", label: "Communication" },
    { value: "Teamwork", label: "Teamwork" },
    { value: "Problem Solving", label: "Problem Solving" },
    { value: "Adaptability", label: "Adaptability" },
    { value: "Time Management", label: "Time Management" },
    { value: "Leadership", label: "Leadership" },
    { value: "Emotional Intelligence", label: "Emotional Intelligence" },
    { value: "Conflict Resolution", label: "Conflict Resolution" },
    { value: "Critical Thinking", label: "Critical Thinking" },
    { value: "Creativity", label: "Creativity" }
  ];

  return (
    <>
      <Navbar selecteditem="Add Candidate" />
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
          <span className="comparecontainer">
            <button className="comparebutton" onClick={handlenextbtn}>Next</button>
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
      <Footer />
    </>
  );
}

export default Options



