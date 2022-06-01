import React, { useContext } from 'react';
import AppContext from '../../Context';

import './Profile.css';

export default function Profile() {
  const userInfo = useContext(AppContext);

  const firstNameInit = userInfo.first_name.charAt(0);
  const lastNameInit = userInfo.last_name.charAt(0);
  const address = userInfo.address;
  const email = userInfo.email;

  return (
    <div id='profile-container'>
      <h1>Profile</h1>
      <div id='profile'>
        <h2 id='fullname'>
          {userInfo.first_name} {userInfo.last_name}
        </h2>
        <div id='initials'>
          {firstNameInit}
          {lastNameInit}
        </div>
        <div id='address'>{address}</div>
        <div id='email'>{email}</div>
      </div>
    </div>
  );
}
