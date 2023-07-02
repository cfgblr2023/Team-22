import React, { useState, useContext } from 'react';
import './Coursecard.css';
import { Shoppingcontext } from '../context';
import { useNavigate } from 'react-router-dom';

const CourseCard2 = ({ courseName, professor, available, progress ,hidebutton}) => {
    const nav= useNavigate();
  const { cartitems, setCartItems } = useContext(Shoppingcontext);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnrollClick = () => {
    console.log(enrolled);
    if (!enrolled) {
      const updatedCartItems = cartitems.map((item) =>
        item.courseName === courseName ? { ...item, enrolled: true } : item
      );
      setCartItems(updatedCartItems);
      setEnrolled(true);
    }
  };
  const gotopage = ()=>{
    localStorage.setItem("teacher",professor);
    localStorage.setItem("course",courseName);
    
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
       
     <button className='gogo' onClick={gotopage}>Go</button>

    </div>
    </>
  );
};

export default CourseCard2;