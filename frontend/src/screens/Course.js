import React from 'react'
import './Course.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Course(props) {
  const nav = useNavigate();
    //const { post } = props;
  const handlesub = () =>{
    nav("/volunteer/home/courseone");
  }
  return (
    <>
    <Navbar></Navbar>
        <div className="box">
            <div className="prof"></div>
            <h1 className="Username">Availability : Weekdays</h1>
            <div className='ocns'>
            <div className="img"></div>
            <button onClick={handlesub} class="like">Go to Course</button>
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

