import React from 'react'
import './Course.css'
import Navbar from './Navbar'
function Course(props) {

    //const { post } = props;

  return (
    <>
    <Navbar></Navbar>
        <div className="box">
            <div className="prof"></div>
            <h1 className="Username">Availability : Weekdays</h1>
            <div className='ocns'>
            <div className="img"></div>
            <button class="like">Go to Course</button>
            <p>
                (English)
            </p>
            </div>
            <div className="name">Web development</div>
            <p>Web development is the process of creating and building websites and web applications.</p>
        </div>
    </>
  )
  }
export default Course

