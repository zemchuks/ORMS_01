import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

export default function Sidebar({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode-variables');
  };

  return (
    <div className="container">
      <aside className={isMenuOpen ? 'show' : ''}>
        <div className="toggle">
          <div className="logo">
            <img src='/assets/images/logo1.png' alt='Logo' />
            <h2>Oramsys</h2>
          </div>
          <div className="close" id="close-btn" onClick={toggleMenu}>
            <span className="material-icons-sharp">close</span>
          </div>
        </div>
        <div className="sidebar">
          <a href="/"><span className="material-icons-sharp">dashboard</span><h3>Dashboard</h3></a>
          <a href="/administration"><span className="material-icons-sharp">admin_panel_settings</span><h3>Administration</h3></a>
          <a href="#"><span className="material-icons-sharp">point_of_sale</span><h3>User</h3></a>
          <a href="#"><span className="material-icons-sharp">receipt_long</span><h3>History</h3></a>
          <a href="#" className='active'><span className="material-icons-sharp">query_stats</span><h3>Analytics</h3></a>
          <a href="#"><span className="material-icons-sharp">mail_outline</span><h3>Tickets</h3><span className="message-count">27</span></a>
          <a href="#"><span className="material-icons-sharp">inventory</span><h3>Sale List</h3></a>
          <a href="#"><span className="material-icons-sharp">report</span><h3>Reports</h3></a>
          <a href="#"><span className="material-icons-sharp">settings</span><h3>Settings</h3></a>
          <a href="#"><span className="material-icons-sharp">add</span><h3>New Login</h3></a>
          <a href="#"><span className="material-icons-sharp">logout</span><h3>Logout</h3></a>
        </div>
      </aside>

      <div className="main-content">
        {children}
      </div>

      <div className="right-section">
        <div className="nav">
          <button id="menu-btn" onClick={toggleMenu}>
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="dark-mode" onClick={toggleDarkMode}>
            <span className={`${!isDarkMode ? 'active' : ''} material-icons-sharp`}>light_mode</span>
            <span className={`${isDarkMode ? 'active' : ''} material-icons-sharp`}>dark_mode</span>
          </div>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>Reza</b></p>
              <p className="text-muted font-normal text-red-500">Admin</p>
            </div>
            <div className="profile-photo">
              <img src='/assets/images/logo1.png' alt='Profile' />
            </div>
          </div>
        </div>

        {/* <div className="user-profile">
          <div className="logo">
            <img src='/assets/images/logo1.png' alt='Logo' />
            <h2>AsmrProg</h2>
            <p>Fullstack Web Developer</p>
          </div>
        </div> */}

        {/* <div className="reminders">
          <div className="header">
            <h2>Reminders</h2>
            <span className="material-icons-sharp">
              notifications_none
            </span>
          </div>

          <div className="notification">
            <div className="icon"><span className="material-icons-sharp">volume_up</span></div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification deactive">
            <div className="icon">
              <span className="material-icons-sharp">edit</span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted">08:00 AM - 12:00 PM</small>
              </div>
              <span className="material-icons-sharp">more_vert</span>
            </div>
          </div>

          <div className="notification add-reminder">
            <div><span className="material-icons-sharp">add</span>
              <h3>Add Reminder</h3>
            </div>
          </div>

        </div> */}
      </div>
    </div>
  );
}