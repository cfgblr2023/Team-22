import React, { useState } from 'react';
import './Addcourse.css'
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
const AddCourse = () => {
  let navigate=useNavigate();
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [courseName, setCourseName] = useState('');
  const [schedule, setSchedule] = useState('');
  const [skillLevel, setSkillLevel] = useState(5);
  const [language, setLanguage] = useState('English');
  const [offline, setOffline] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({
      areaOfInterest,
      courseName,
      schedule,
      skillLevel,
      language,
      offline,
    });

    const response = await  fetch("http://localhost:5000/api/addcourse/addcourse", 
    {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email:localStorage.getItem("userEmail"),course: courseName, skill: skillLevel, live:schedule,offline:offline, language:language,area:areaOfInterest, name:localStorage.getItem("name") })
  });

  const json = await response.json()
  if (json.success) {
    navigate('/volunteer/home');
  }
  else {
    alert("Enter Valid Credentials")
  }

  };

  return (
    <>
    <Navbar></Navbar>
    <form onSubmit={handleSubmit} className="forming">
      <label htmlFor="areaOfInterest" className="form-label">
        Area of Interest:
      </label>
      <select
        id="areaOfInterest"
        name="areaOfInterest"
        value={areaOfInterest}
        onChange={(e) => setAreaOfInterest(e.target.value)}
        className="form-select"
      >
        
        <option value="">Select</option>
        <option value="Women Empowerment Program">Women Empowerment Program</option>
        <option value="Carrer Counseling">Carrer Counseling</option>
        <option value="Personality Development">Personality Development</option>
        <option value="Small Business Development">Small Business Development</option>
        <option value="Public Speaking">Public Speaking</option>
        {/* Add more options based on available courses */}
      </select>

      <label htmlFor="courseName" className="form-label">
        Course Name:
      </label>
      <input
        type="text"
        id="courseName"
        name="courseName"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        className="form-input"
      />

      <label htmlFor="schedule" className="form-label">
        Availability for Live Sessions:
      </label>
      <div className='week-con'>
      <input
        type="radio"
        id="weekdays"
        name="schedule"
        value="Weekdays"
        checked={schedule === 'Weekdays'}
        onChange={(e) => setSchedule(e.target.value)}
        className="form-radio"
      />
      <label htmlFor="weekdays">Weekdays</label><br />
      <input
        type="radio"
        id="weekends"
        name="schedule"
        value="Weekends"
        checked={schedule === 'Weekends'}
        onChange={(e) => setSchedule(e.target.value)}
        className="form-radio"
      />
      <label htmlFor="weekends">Weekends</label><br /><br />
      </div>
      <label htmlFor="skillLevel" className="form-label">
        Skill Level:
      </label>
      <input
        type="range"
        id="skillLevel"
        name="skillLevel"
        min="1"
        max="10"
        value={skillLevel}
        onChange={(e) => setSkillLevel(Number(e.target.value))}
        className="form-range"
      />

      <label htmlFor="language" className="form-label">
        Language:
      </label>
      <select
        id="language"
        name="language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="form-select"
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
        <option value="Kannada">Kannada</option>
      </select>

      <label htmlFor="offline" className="form-label">
        Available for Offline Sessions:
      </label>
      <div className='yes-no'>
      <input
        type="radio"
        id="offline"
        name="offline"
        value="1"
        checked={offline}
        onChange={() => setOffline(true)}
        className="form-radio"
      />
      <label htmlFor="offline">Yes</label>
      <input
        type="radio"
        id="online"
        name="offline"
        value="0"
        checked={!offline}
        onChange={() => setOffline(false)}
        className="form-radio"
      />
      <label htmlFor="online">No</label>
      </div>
      <input type="submit" value="Submit" className="form-button" />
    </form>
    </>
  );
};

export default AddCourse;
