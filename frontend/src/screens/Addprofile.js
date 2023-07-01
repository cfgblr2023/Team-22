import React from 'react';
import Navbar from './Navbar';
import './Addprofile.css';

const AddProfile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
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
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
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
