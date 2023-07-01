import React, { useContext } from 'react';
import CourseCard from './CourseCard';
import Navbar2 from './Navbar2';
import { Shoppingcontext } from '../context';
import { useNavigate } from 'react-router-dom';

function CourseListingPage() {
    const nav=useNavigate();
  const { cartitems, setCartitems } = useContext(Shoppingcontext);

  const handleEnrollClick = (index) => {
    const updatedCartItems = [...cartitems];
    updatedCartItems[index].enrolled = true;
    setCartitems(updatedCartItems);
    nav("student/course/1");
  };

  return (
    <>
      <Navbar2 />
      <div className="course-list">
        {cartitems.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.name}
            professor={course.professor}
            available={course.available}
            progress={course.progress}
            enrolled={course.enrolled}
            onEnrollClick={() => handleEnrollClick(index)}
          />
        ))}
      </div>
    </>
  );
}

export default CourseListingPage;
