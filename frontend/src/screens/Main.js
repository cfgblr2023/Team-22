import React from 'react'
import { useState, useEffect } from 'react';
import Course from './Course';
import Navbar from './Navbar';


function Main() {

  const [course, setCourse] = useState([])
  const [search, setSearch] = useState('')
 
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
    setCourse(response[0])
  }

  useEffect(() => {
    loadCourses()
  }, [])


    return (
      <div className='container'>
        
    <Navbar/>
        {course !== [] ? course.filter(
                    (items) => (items.email === localStorage.getItem("userEmail")))
                    .map(filterItems => {
                      return (
                          <Course area={filterItems.area} coursename={filterItems.course} language={filterItems.language} live={filterItems.live} skill={filterItems.skill} offline={filterItems.offline} name={filterItems.name}></Course>
                        )
                    }) : <div> No Such Data </div>}

      </div>
    )
}

export default Main
