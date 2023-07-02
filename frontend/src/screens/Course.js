import React from 'react'
import './Course.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Course(props) {
  const nav = useNavigate();
    //const { post } = props;
  const handlesub = () =>{
    localStorage.setItem("teacher",props.name)
    localStorage.setItem("course",props.coursename)
    nav("/volunteer/home/courseone");
  }
  return (
    <>
        <div className="box">
            <div className="prof"></div>
            <h1 className="Username">Availability : {props.live}</h1>
            <div className='ocns'>
            <div className="img"></div>
            <button onClick={handlesub} class="like">Go to Course</button>
            <p>
                ({props.language})
            </p>
            </div>
            <div className="name">{props.area}</div>
            <p>{props.coursename}</p>
        </div>
    </>
  )
  }
export default Course

