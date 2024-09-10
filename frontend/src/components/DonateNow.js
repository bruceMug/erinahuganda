import React from 'react';
import '../styles/style.css';

const DonateNow = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="d-md-flex cta-20101 align-self-center bg-light p-5 ">
          <div className='col-md-10'>
            <h3 className="text-cursive">Giving hope to Orphans, the Needy and Vulnerable</h3>
          </div>
          <div className="ml-auto col-md-2">
            <a href="/donate" className="btn btn-primary">Donate Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateNow;
