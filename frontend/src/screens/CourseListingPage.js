import React, { useContext, useState, useEffect } from 'react';
import CourseCard from './CourseCard';
import Navbar2 from './Navbar2';
import { Shoppingcontext } from '../context';
import { useNavigate } from 'react-router-dom';

function CourseListingPage() {

  const nav = useNavigate();
  const [courses, setCourses] = useState([])



  useEffect(() => {
    const loadCourses = async () => {
      let response = await fetch("http://localhost:5000/api/course/course", {
        // credentials: 'include',
        // Origin:"http://localhost:3000/login",
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json()
      // console.log(response[1][0].CategoryName)
      setCourses(response[0])
    }
    loadCourses()
  }, [])

  const handleEnrollClick = async (data) => {
    const response = await fetch("http://localhost:5000/api/endata/endata", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: data.email, useremail: localStorage.getItem("userEmail"), course: data.course, live: data.live, offline: data.offline, language: data.language, area: data.area })
    });
    const json = await response.json()
    console.log(json);

    if (json.success) {
      // alert("Succesfull");


    }
    else {
      alert("Enter Valid Credentials")
    }
    nav("student/course/1");
  };

  return (
    <>
      <Navbar2 />
      <div className="course-list">
        {courses.map((data, index) => (
          <CourseCard
            key={index}
            courseName={data.course}
            professor={data.name}
            available={data.available}
            progress={data.skill*10}
            area={data.area}
            skill={data.skill}
            language={data.language}
            teacheremail={data.email}
          />
        ))}
      </div>
    </>
  );
}

export default CourseListingPage;
