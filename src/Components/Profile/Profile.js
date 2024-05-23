import React, { useContext } from 'react';
import AppContext from '../../Context';

export default function Profile() {
  const userInfo = useContext(AppContext);

  const firstNameInit = userInfo.first_name.charAt(0);
  const lastNameInit = userInfo.last_name.charAt(0);
  const address = userInfo.address;
  const email = userInfo.email;

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <h2>
          {userInfo.first_name} {userInfo.last_name}
        </h2>
        <div>
          {firstNameInit}
          {lastNameInit}
        </div>
        <div>{address}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}
