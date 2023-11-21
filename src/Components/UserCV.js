import React from 'react';
import PersonalInfo from './PersonalInfo';
import Experience from './Experience';
import Contacts from './Contacts';

const UserCV = () => {
  return (
    <div>
      <h1>My CV</h1>
      <PersonalInfo />
      <Experience />
      <Contacts />
    </div>
  );
};

export default UserCV;