import React from 'react';
import CourseCard from './CourseCard';
import Navbar2 from './Navbar2';

const courseData = [
  {
    name: "Digital Marketing",
    professor: "Mukesh",
    available: "Weekends",
    progress: 70,
    enrolled: true,
  },
  {
    name: "Web Development",
    professor: "John",
    available: "Weekdays",
    progress: 50,
    enrolled: true,
  },
  {
    name: "Data Science",
    professor: "Emily",
    available: "Weekdays",
    progress: 90,
    enrolled: false,
  },
  // Add more course objects as needed
];

function CourseListingPage() {
  const enrolledCourses = courseData.filter((course) => course.enrolled);

  return (
    <>
      <Navbar2 />
      <div className="course-list">
        {enrolledCourses.map((course, index) => (
          <CourseCard
            key={index}
            courseName={course.name}
            professor={course.professor}
            available={course.available}
            progress={course.progress}
            hideButton={true}
          />
        ))}
      </div>
    </>
  );
}

export default CourseListingPage;
