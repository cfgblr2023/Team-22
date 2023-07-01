import React from 'react'
import './Course.css'
import Navbar from './Navbar'
function Course(props) {

    //const { post } = props;

  return (
    <>
        <div className="box">
            <div className="prof"></div>
            <h1 className="Username">Availability : {props.live}</h1>
            <div className='ocns'>
            <div className="img"></div>
            <button class="like">Go to Course</button>
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

