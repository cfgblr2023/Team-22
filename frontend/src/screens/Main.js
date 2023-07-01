import React from 'react'
import { useState } from 'react';
import Course from './Course';


function Main() {
    const [courselists,setcourselists]=useState(null);
    return (
      <div className='container'>
        {/* {
        courselists?.map((post)=>(<Course post={post}/>))
        } */}
        <Course></Course>
        <Course></Course>
      </div>
    )
}

export default Main
