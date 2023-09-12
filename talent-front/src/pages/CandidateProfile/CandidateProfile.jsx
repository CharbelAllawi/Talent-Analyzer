import React, { useEffect, useState } from 'react';
import './style.css'

const CandidateProfile = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    console.log(date);
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
    <form action="#" method="post" id="signup">
      <h1>Candidate Profile</h1>
      <fieldset className='fieldset'>
        <label>
          Full Name<br />
          <input type="text" name="Full Name" placeholder="John Doe" required /><br />
        </label>
        <label>
          Date of Birth<br />
          <input
            type="date"
            name="dateOfBirth"

            value={selectedDate}
            onChange={handleDateChange}
            required
          /><br />
        </label>
        <label >
          Email<br />
          <input type="email" name="email" placeholder="johndoe@example.com" required /><br />
        </label>

        <label >
          Profile Picture<br />
          <input type="file" name="profilePicture" /><br />
        </label>
      </fieldset>
      <footer>
        <button type="submit">Create</button>
      </footer>
    </form>
  );
};

export default CandidateProfile;
