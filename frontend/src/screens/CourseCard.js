import React, { useState, useContext } from 'react';
import './Coursecard.css';
import { Shoppingcontext } from '../context';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ courseName, professor, available, progress ,hidebutton, teacheremail,language,area, skill}) => {
  const prof=professor
  const nav= useNavigate();
  const { cartitems, setCartItems } = useContext(Shoppingcontext);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollClick = async() => {
    const response = await fetch("http://localhost:5000/api/endata/endata", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email:teacheremail, teacher:prof, useremail:localStorage.getItem("userEmail"), course: courseName , language:language, area:area, skill:skill})
    });
    
    const json = await response.json()
    console.log(json);

    if (json.success) {
      // alert("Succesfull");
    nav("/student/enrolled")  
     
    }
    else {
      alert("Enter Valid Credentials")
    }
  };

  const gotopage = ()=>{
    nav("/student/mycourses/courseone");
  }

  return (
    <>
    <div className="course-card">
      <h3 className="course-name">{courseName}</h3>
      <p className="professor">Professor: {professor}</p>
      <p className="available">Available: {available ? 'Yes' : 'No'}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
        <button
        className={`enroll-button ${enrolled ? 'enrolled' : ''}`}
        onClick={handleEnrollClick}
        disabled={enrolled}
      >
        {enrolled ? 'Enrolled' : 'Enroll'}
      </button>
    </div>
    {enrolled && <button className='gogo' onClick={gotopage}>Go</button>}
    </>
  );
};

export default CourseCard;
