import React from 'react';
import Navbar from './Navbar';
import { useNavigate, Link } from 'react-router-dom';
import './Addprofile.css';

const AddProfile = () => {
  let navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
   
    const response = await  fetch("http://localhost:5000/api/update/update", 
    {
    // credentials: 'include',
    // Origin:"http://localhost:3000/login",
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email: localStorage.getItem("userEmail"), name: data.name, education:data.education, description:data.description, skills:data.skills})
  });

  const json = await response.json()
  if (json.success) 
  {navigate('/volunteer/home')
  }
  else {
    alert("Enter Valid Credentials")
  }


    // Handle form submission logic here
    console.log(data);

  };

  return (
    <>
      <Navbar />
      <div>
        <div className='heading'>Edit Profile : </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-input"
          />
          <label htmlFor="education" className="form-label">
            Highest Education:
          </label>
          <input
            type="text"
            id="education"
            name="education"
            required
            className="form-input"
          />
          <label htmlFor="document" className="form-label">
            Document Upload:
          </label>
          <input
            type="file"
            id="document"
            name="document"
            accept=".pdf, .doc, .docx"
            className="form-input"
          />
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            cols="50"
            className="form-textarea"
          ></textarea>
          <label htmlFor="skills" className="form-label">
            Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            className="form-input"
          />
          <input type="submit" value="Update Profile" className="form-button" />
        </form>
      </div>
    </>
  );
};

export default AddProfile;
