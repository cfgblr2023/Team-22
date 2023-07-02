import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
//one of the hook of firebase to make our job easy with firebase
function Navbar3() {
  const nav= useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const logout = async ()=>{
    nav("/");
  }
  //to include javascript in return part we always use {}
  return (
    <div className={`main-nav1`}>
      <div className="navbar-header">
        
      </div>
      <div className="navbar-links">
        <Link className="icon" to="/admin">
          Home
        </Link>
        <Link className="icon" to="/admin/events">
          Events
        </Link>
        <Link className="icon" to="/admin/accdep">Accept/Deny</Link>
        <Link className="icon" to="/admin/coursedemands">Course Demands</Link>
      </div>
    </div>
  );
  //here the <></>fragment tag is used to include a list of tags into one and apply the condition on them as whole
}

export default Navbar3;