import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
//one of the hook of firebase to make our job easy with firebase
function Navbar() {
  const nav= useNavigate();
  if(!localStorage.getItem("token"))
  {
    nav("/");
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const logout = async ()=>{
    nav("/");
    localStorage.removeItem("userEmail");
    localStorage.removeItem('token');
      
  }
  //to include javascript in return part we always use {}
  return (
    <div className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-header">
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="burger-icon"></span>
        </button>
      </div>
      <div className="navbar-links">
        <Link className="icon" to="/volunteer/home">
          My Courses
        </Link>
        <Link className="icon" to="/volunteer/editprofile">
          Add Profile
        </Link>
        <Link className="icon" to="/volunteer/addcourse">Add course</Link>
      </div>
      <div className='bottom'>
            <button className='buttonuser' onClick={logout}>LogOut</button>
      </div>
    </div>
  );
  //here the <></>fragment tag is used to include a list of tags into one and apply the condition on them as whole
}

export default Navbar;