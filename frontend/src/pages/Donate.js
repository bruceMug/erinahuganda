// src/pages/Donate.js
import React from 'react';
import PageNav from '../components/PageNav';
import DonateForm from '../components/DonateForm';
import UpperFooter from '../components/upperFooter';

const Donate = () => {
  return (
    <div>
      <PageNav />
      <DonateForm />
      <UpperFooter />
    </div>
  );
};

export default Donate;
