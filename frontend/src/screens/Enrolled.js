import React from 'react';
import CourseCard from './CourseCard';
import Navbar2 from './Navbar2';
import  { useContext, useState, useEffect } from 'react';
import CourseCard2 from './CourseCard2';

function CourseListingPage() {

  const [courses, setCourses] = useState([])
  
  useEffect(() => {
    const loadCourses = async () => {
      let response = await fetch("http://localhost:5000/api/encourse/encourse", {
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

  return (
    <>
      <Navbar2 />
      <div className="course-list">
        {courses.map((course, index) => (
          <CourseCard2
            key={index}
            courseName={course.course}
            professor={course.teacher}
            available={course.available}
            progress={course.skill*10}
            hideButton={true}
          />
        ))}
      </div>
    </>
  );
}

export default CourseListingPage;
