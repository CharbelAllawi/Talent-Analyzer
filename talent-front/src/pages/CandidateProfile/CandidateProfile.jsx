import React, { useEffect, useState } from 'react';
import './style.css'
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { localStorageAction } from "../../core/config/localstorage";
const CandidateProfile = () => {
  const animatedComponents = makeAnimated();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [candidateprofile, setCandidateProfile] = useState({
    full_name: '',
    date_of_birth: '',
    email: '',
    phone: '',
    position: '',
    image: null, // Store the file object here
  });
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '485px',

    }),
    menu: (provided) => ({
      ...provided,
      width: '485px', // Set the width you desire for the menu

    }),

  };


  const handleSelect = (selectedOption) => {
    setSelectedOptions(selectedOption);
    setIsMenuOpen(false);
    setCandidateProfile({
      ...candidateprofile,
      ['position']: selectedOption['value'],
    });
  };


  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([

  ]);
  const navigation = useNavigate();
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
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setCandidateProfile({
      ...candidateprofile,
      ['date_of_birth']: date,
    });
  };
  const [imagePreview, setImagePreview] = useState(null);

  // Function to handle image selection
  const handlecandidateprofile = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      // Create a FormData object and append the file to it
      const formData = new FormData();
      formData.append(name, e.target.files[0]);

      setCandidateProfile({
        ...candidateprofile,
        [name]: e.target.files[0], // Store the FormData object in the payload
      });
    } else {
      // Handle other input fields
      setCandidateProfile({
        ...candidateprofile,
        [name]: value,
      });
    }
  };
  const handlecreatebtn = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('full_name', candidateprofile.full_name);
    formData.append('date_of_birth', candidateprofile.date_of_birth);
    formData.append('email', candidateprofile.email);
    formData.append('phone', candidateprofile.phone);
    formData.append('position', candidateprofile.position);
    formData.append('image', candidateprofile.image);

    console.log('Candidate Profile Data:', formData);

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/addcandidate',
        body: formData,
      });
      console.log(response);
      navigation('/result')
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const rangeChange = (e) => {
      e.currentTarget.nextElementSibling.firstElementChild.textContent = e.currentTarget.value;
    };

    const ranges = document.querySelectorAll(".jsRange input");
    ranges.forEach((range) => {

      range.nextElementSibling.firstElementChild.textContent = range.value;
      range.addEventListener("input", rangeChange);
    });

    return () => {
      ranges.forEach((range) => {
        range.removeEventListener("input", rangeChange);
      });
    };
  }, []);

  return (
    <>
      <Navbar selecteditem='Add Candidate' />
      <form action="#" method="post" id="signup">
        <span className='flex'>
          <h1>Candidate Profile</h1>
          <i className="fas fa-user" style={{ fontSize: '40px', marginLeft: '20px' }}></i>
        </span>

        <fieldset className='fieldset'>
          <label>
            Full Name<br />
            <input type="text" name="full_name" placeholder="John Doe" onChange={handlecandidateprofile} required /><br />
          </label>
          <label>
            Date of Birth<br />
            <input
              type="date"
              name="date_of_birth "
              value={selectedDate}
              onChange={handleDateChange}
              required
            /><br />
          </label>
          <Select
            value={selectedOptions}
            components={animatedComponents}
            options={options}
            onChange={handleSelect}
            styles={customStyles}
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
            onInputChange={(inputValue) => {
              if (!inputValue) {
                setIsMenuOpen(true);
              }
            }}
            className="select"
            isClearable={true}
            isSearchable={false}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            menuIsOpen={isMenuOpen}
            placeholder="Select the job position."
          />
          <label >
            Email<br />
            <input type="email" name="email" placeholder="johndoe@example.com" onChange={handlecandidateprofile} required /><br />
          </label>
          <label >
            Phone<br />
            <input type="phone" name="phone" placeholder="76968647" onChange={handlecandidateprofile} required /><br />
          </label>

          <label >
            Profile Picture<br />
            <input type="file" name="image" onChange={handlecandidateprofile} accept="image/*" /><br />
          </label>
        </fieldset>
        <footer>
          <button type="submit" onClick={handlecreatebtn}>Create</button>
        </footer>
      </form >
    </>
  );
};

export default CandidateProfile;