import React from 'react';

function Request({
  title,
  language,
  wantstoteach,
  onoff,
  accepted,
  denied,
  onAccept,
  onDeny,
}) {
  return (
    <div className='request'>
      <div className='title'>{title}</div>
      <div className='language'>{language}</div>
      <div className='wantstoteach'>{wantstoteach}</div>
      <div className='Onoff'>{onoff}</div>
      {accepted ? (
        <span className='status accepted'>Accepted</span>
      ) : denied ? (
        <span className='status denied'>Denied</span>
      ) : (
        <div className='button-group'>
          <button className='button-accept' onClick={onAccept}>
            Accept
          </button>
          <button className='button-deny' onClick={onDeny}>
            Deny
          </button>
        </div>
      )}
    </div>
  );
}

export default Request;
