import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectType } from '../features/user/userSlice';

const CourseInside = () => {
  const usertype = useSelector(selectType);
  useEffect(() => {
    // Extract the details of the course and if the user id matches the registered list in a particular course, then show the details true or false
    // If the usertype is a teacher, then check if the instructor id is the same as the user id. If yes, then instructor true.
  }, []);
  const [showDetails, setShowDetails] = useState(false);
  const [instructor, setInstructor] = useState(usertype === 'student' ? false : true);
  const [materials, setMaterials] = useState([
    { id: 1, title: 'Material 1', url: 'https://example.com/material1.pdf' },
    { id: 2, title: 'Material 2', url: 'https://example.com/material2.pdf' },
    { id: 3, title: 'Material 3', url: 'https://example.com/material3.pdf' },
  ]);
  const [assignments, setAssignments] = useState([
    { id: 1, title: 'Assignment 1', deadline: 'June 10, 2023' },
    { id: 2, title: 'Assignment 2', deadline: 'June 15, 2023' },
    { id: 3, title: 'Assignment 3', deadline: 'June 20, 2023' },
  ]);

  const videocall = ()=>{
    window.location.href = 'http://127.0.0.1:8080/';
  }
  const handleRegisterClick = () => {
    setShowDetails(true);
    // Add a check to this
    // Check if the student has already registered or not. If not, then register that student and show the details.
  };

  const handleViewMaterials = () => {
    // Redirect to '/course/:id/materials' page
  };

  const handleViewAssignments = () => {
    // Redirect to '/course/:id/assignments' page
  };
  const handleChat = ()=>{
    window.location.href = 'https://chit-chat-delta-one.vercel.app/';
  }

  const handleJoinLiveClass = (liveClassId) => {
    // Redirect to '/liveclass/:id' page
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full absolute top-0 bottom-0 right-0 left-0 overflow-y-auto">
      {/* Course Thumbnail */}
      <div
        className="bg-gray-200 h-screen/3 w-full absolute top-0 right-0 left-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/167682/pexels-photo-167682.jpeg')`,
          height: `40%`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-8 absolute" style={{ top: `42%`, flexDirection: `column` }}>
        {/* Course Details */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">{localStorage.getItem("course")}</h2>
          <p className="text-lg font-semibold text-white">Instructor: {localStorage.getItem("teacher")}</p>
          <p className="text-white">Start Date: June 2, 2023</p>
          {!showDetails && (
            <button
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md mt-4"
              onClick={handleRegisterClick}
            >
              Enter Course
            </button>
          )}
          <button
  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md mt-4"
  onClick={handleChat}
  style={{ marginLeft: '2%' }}
>
  Let's Chat
</button>
        </div>

        {/* Course Materials */}
        {showDetails && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-white">Materials</h3>
            <div className="flex overflow-x-auto">
              {materials.map((material) => (
                <div key={material.id} className="flex-shrink-0 mr-4 bg-white rounded-md p-4">
                  <a href={material.url} target="_blank" rel="noopener noreferrer" className="text-black">
                    {material.title}
                  </a>
                </div>
              ))}
            </div>
            <button
              className="text-black-500 font-semibold mt-2 cursor-pointer text-white"
              onClick={handleViewMaterials}
            >
              View More /
            </button>
            {instructor && (
              <button className="text-black-500 font-semibold mt-2 cursor-pointer text-white" onClick={() => {}}>
                Add Materials
              </button>
            )}
          </div>
        )}

        {/* Course Assignments */}
        {showDetails && (
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 text-white">Assignments</h3>
            <div className="flex overflow-x-auto">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="flex-shrink-0 mr-4 bg-white rounded-md p-4">
                  <h4 className="text-lg font-bold text-black">{assignment.title}</h4>
                  <p className="text-black">Deadline: {assignment.deadline}</p>
                </div>
              ))}
            </div>
            <button
              className="text-black-500 font-semibold mt-2 cursor-pointer text-white"
              onClick={handleViewAssignments}
            >
              View More /
            </button>
            {instructor && (
              <button className="text-black-500 font-semibold mt-2 cursor-pointer text-white" onClick={() => {}}>
                Add Material
              </button>
            )}
          </div>
        )}
        {showDetails && (
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Live Classes</h3>
            {/* Display list of live classes */}
            <div className="flex items-center justify-between">
              <div className="bg-white text-white px-4 py-2 rounded-md">
                <div className="text-black">
                  {/* {live class details} */}
                </div>
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md"
                  onClick={() => handleJoinLiveClass('xyz')}
                >
                  Join
                </button>
              </div>
              {/* Repeat for each live class */}
              {instructor && (
                <button
                  className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md"
                  onClick={videocall}
                >
                  Go Live
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseInside;
