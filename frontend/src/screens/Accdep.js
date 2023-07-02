import React, { useState } from 'react';
import Navbar3 from './Navbar3';
import Request from './Request';
import './Accdep.css';

function Accdep() {
  const [accepted, setAccepted] = useState(false);
  const [denied, setDenied] = useState(false);
  const [accepted1, setAccepted1] = useState(false);
  const [denied1, setDenied1] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
    setDenied(false);
  };

  const handleDeny = () => {
    setAccepted(false);
    setDenied(true);
  };

  const handleAccept1 = () => {
    setAccepted1(true);
    setDenied1(false);
  };

  const handleDeny1 = () => {
    setAccepted1(false);
    setDenied1(true);
  };

  return (
    <>
      <Navbar3 />
      <div className='sidingbody'>
        <Request
          title='Course Name: Web Development'
          language='Language: English'
          wantstoteach='Professor: Ravinath'
          onoff='Availability: Online'
          accepted={accepted}
          denied={denied}
          onAccept={handleAccept}
          onDeny={handleDeny}
        />
        <Request
          title='Course Name: Graphic Designing'
          language='Language: Kannada'
          wantstoteach='Professor: Pramod'
          onoff='Availability: Offline'
          accepted={accepted1}
          denied={denied1}
          onAccept={handleAccept1}
          onDeny={handleDeny1}
        />
      </div>
    </>
  );
}

export default Accdep;
