import React from 'react';
import Email from './Email';
import Name from './Name';
import Address from './Address';
import PersonalInfo from './PersonalInfo';
import '../styles/styles.css'

const Profile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <Email />
      <Name />
      <Address />
      <PersonalInfo />
    </div>
  );
};

export default Profile;