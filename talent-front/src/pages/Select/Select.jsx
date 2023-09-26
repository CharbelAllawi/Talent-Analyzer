import React, { useState } from 'react';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import './style.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { localStorageAction } from "../../core/config/localstorage";
import Footer from '../../components/Footer/Footer';
function Options() {
  const [t, i18n] = useTranslation("global");
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
    let text = "i want you analyze the interview while taking into consideration the job position and soft skills required by recruiter ,\nreturn the answer as JSON parsable object (do not return any text or explanation or notes before or after the JSON object)\nalso make sure that the result inside the json object is at a minimum of 10 lines, also in candidate_skills extract his skills and put them there so i can iterate over them and list them in my front-end. The JSON object should be in this format {result: , candidate_skills:},be aware that inside candidate_skills another JSON (but a string) that will contain on skillnames:rates, rate between 1 and 100, example of how candidate_skills should look like: \"{\"react\":\"10\",\"laravel\":\"20\",\"MySQL\":\"30\"}\" \nAgain be extremely careful that what's inside candidate_skills should be of type string\n";

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
    { value: t("candidateprofile.job1"), label: t("candidateprofile.job1") },
    { value: t("candidateprofile.job2"), label: t("candidateprofile.job2") },
    { value: t("candidateprofile.job3"), label: t("candidateprofile.job3") },
    { value: t("candidateprofile.job4"), label: t("candidateprofile.job4") },
    { value: t("candidateprofile.job5"), label: t("candidateprofile.job5") },
    { value: t("candidateprofile.job6"), label: t("candidateprofile.job6") },
    { value: t("candidateprofile.job7"), label: t("candidateprofile.job7") },
    { value: t("candidateprofile.job8"), label: t("candidateprofile.job8") },
    { value: t("candidateprofile.job9"), label: t("candidateprofile.job9") },
    { value: t("candidateprofile.job10"), label: t("candidateprofile.job10") },
  ];
  const options2 = [
    { value: t("select.soft1"), label: t("select.soft1") },
    { value: t("select.soft2"), label: t("select.soft2") },
    { value: t("select.soft3"), label: t("select.soft3") },
    { value: t("select.soft4"), label: t("select.soft4") },
    { value: t("select.soft5"), label: t("select.soft5") },
    { value: t("select.soft6"), label: t("select.soft6") },
    { value: t("select.soft7"), label: t("select.soft7") },
    { value: t("select.soft8"), label: t("select.soft8") },
    { value: t("select.soft9"), label: t("select.soft9") },
    { value: t("select.soft10"), label: t("select.soft10") },
  ];

  return (
    <>
      <Navbar selecteditem="Add Candidate" />
      <div className='hcontainer'>
        <h1>{t("select.what")}</h1>
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
          <span className="nextcontainer ">
            <button className="nextbutton" onClick={handlenextbtn}>{t("upload.next")} </button>
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



