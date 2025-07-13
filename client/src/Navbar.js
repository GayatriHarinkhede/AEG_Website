import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">IFERP</div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Achievements</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>

            {/* Dropdown Menu */}
            <li className="dropdown">
              <a href="#" className="dropdown-toggle">
                Conference
              </a>
              <div className="dropdown-menu">
                {/* Sidebar Links */}
                <div className="dropdown-sidebar">
                  <ul>
                    <li>
                      <a href="#">About IFERP Conference</a>
                    </li>
                    <li>
                      <a href="#">Plan a Scientific Conference</a>
                    </li>
                    <li>
                      <a href="#">Sponsors & Exhibitors</a>
                    </li>
                    <li>
                      <a href="#">Awards & Recognition</a>
                    </li>
                    <li>
                      <a href="#">Workshops & Courses</a>
                    </li>
                    <li>
                      <a href="#">Conference FAQ</a>
                    </li>
                  </ul>
                </div>

                {/* Grid Section */}
                <div className="dropdown-grid">
                  <div className="grid-item">
                    <span className="icon">📅</span>
                    <h3>Upcoming Conferences</h3>
                  </div>
                  <div className="grid-item">
                    <span className="icon">🖼️</span>
                    <h3>Scientific Gallery</h3>
                  </div>
                  <div className="grid-item">
                    <span className="icon">🔙</span>
                    <h3>Past Webinars</h3>
                  </div>
                  <div className="grid-item">
                    <span className="icon">🎥</span>
                    <h3>Upcoming Webinars</h3>
                  </div>
                  <div className="grid-item">
                    <span className="icon">🏆</span>
                    <h3>Past Conferences</h3>
                  </div>
                  <div className="grid-item">
                    <span className="icon">📹</span>
                    <h3>Conference Videos & Galleries</h3>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <a href="#">Workshop</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
