import React, { useEffect, useState } from 'react';
import './style.css'
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { localStorageAction } from "../../core/config/localstorage";
import Footer from '../../components/Footer/Footer';
import Loading from '../Loading/Loading';
import { useTranslation } from 'react-i18next';

const CandidateProfile = () => {
  const animatedComponents = makeAnimated();
  const [loading, setLoading] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [candidateprofile, setCandidateProfile] = useState({
    full_name: '',
    date_of_birth: '',
    email: '',
    phone: '',
    position: '',
    image: null,
  });
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '485px',

    }),
    menu: (provided) => ({
      ...provided,
      width: '485px',

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
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setCandidateProfile({
      ...candidateprofile,
      ['date_of_birth']: date,
    });
  };
  const [imagePreview, setImagePreview] = useState(null);

  const handlecandidateprofile = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = async (event) => {
          const image = new Image();
          image.src = event.target.result;

          image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = 600;
            canvas.height = 350;

            ctx.drawImage(image, 0, 0, 600, 350);

            canvas.toBlob((blob) => {
              const resizedImageFile = new File([blob], file.name, {
                type: file.type,
              });

              setCandidateProfile({
                ...candidateprofile,
                [name]: resizedImageFile,
              });

              const resizedImageUrl = URL.createObjectURL(resizedImageFile);
              setImagePreview(resizedImageUrl);
            }, file.type);
          };
        };

        reader.readAsDataURL(file);
      }
    } else {
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
    setLoading(true);
    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: '/addcandidate',
        body: formData,
      });
      setLoading(false);

      navigation('/upload/' + response['candidate_id'])
    } catch (error) {
      setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>

          <Navbar selecteditem='Add Candidate' />
          <form action="#" method="post" id="signup">
            <span className='flex'>
              <i className="fas fa-user" style={{ fontSize: '40px', marginRight: '20px' }}></i>
              <h1>{t("candidateprofile.candidateprofile")}</h1>
            </span>

            <fieldset className='fieldset'>
              <label>
                {t("candidateprofile.fullname")}<br />
                <input type="text" name="full_name" placeholder={t("candidateprofile.fullnameex")} onChange={handlecandidateprofile} required /><br />
              </label>
              <label>
                {t("candidateprofile.dob")}<br />
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
                isClearable={false}
                isSearchable={false}
                isDisabled={false}
                isLoading={false}
                isRtl={false}
                menuIsOpen={isMenuOpen}
                placeholder={t("candidateprofile.selectjob")}
              />
              <label >
                {t("candidateprofile.email")}<br />
                <input type="email" name="email" placeholder={t("candidateprofile.emailex")} onChange={handlecandidateprofile} required /><br />
              </label>
              <label >
                {t("candidateprofile.phone")}<br />
                <input type="phone" name="phone" placeholder={t("candidateprofile.phoneex")} onChange={handlecandidateprofile} required /><br />
              </label>

              <label >
                {t("candidateprofile.profilepic")}<br />
                <input type="file" name="image" onChange={handlecandidateprofile} accept="image/*" /><br />
              </label>
            </fieldset>
            <footer>
              <button type="submit" onClick={handlecreatebtn}>{t("candidateprofile.create")}</button>
            </footer>
          </form >
          <Footer />
        </>
      )}
    </>
  );
};

export default CandidateProfile;