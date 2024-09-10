// src/components/Header.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/style.css";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const isDonatePage = location.pathname === "/donate";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(true);
  }, [location]);

  const handleSectionNavigation = (sectionId) => {
    if (isDonatePage) {
      // Navigate to the home page and then to the section
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={
        isDonatePage
          ? "container-fluid header-non-fixed"
          : "container-fluid header-fixed"
      }
    >
      {/* <div id="menu-jk" className="header-bottom " style={{ height: "70px" }}> */}
      <div id="menu-jk" className="header-bottom ">
        <div className="container">
          <div className="row nav-row">
            <div className="col-lg-3 col-md-12 logo">
              <Link to="/">
                <img src="assets/images/ErinahUgLogo.png" alt="erinahlogo" />
              </Link>
              <span
                className="d-block d-lg-none small-menu"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faBars} />
              </span>
            </div>
            <div
              ref={menuRef}
              id="menu"
              className={`col-lg-9 col-md-12 ${
                menuOpen ? "d-none" : "d-block"
              } d-lg-block nav-col`}
            >
              <ul className="navbad">
                <li className="nav-item active">
                  <Link className="nav-link" to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      handleSectionNavigation("about-us");
                      toggleMenu();
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    onClick={() => {
                      handleSectionNavigation("contact-us");
                      toggleMenu();
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
                {!isDonatePage && (
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/donate"
                      onClick={toggleMenu}
                    >
                      Donate
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
