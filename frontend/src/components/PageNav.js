// src/components/PageNav.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/style.css';

const PageNav = () => {
  return (
    <div className="page-nav no-margin row">
      <div className="container">
        <div className="row">
          <h2>Donate</h2>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className='mx-2' />  Home
              </Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faAngleDoubleRight} className='mx-2'/> Donate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageNav;
