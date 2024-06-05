import React, { useEffect } from 'react';

const Navbar = ({ isSidebarClosed, setSidebarClosed, theme, setTheme }) => {
  const [isSearchFormShown, setSearchFormShown] = React.useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 576) {
        setSearchFormShown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  const handleSearchClick = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormShown(!isSearchFormShown);
    }
  };

  const handleThemeToggle = () => {
    setTheme(!theme);
    if (theme) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return (
    <nav>
      <i className='bx bx-menu' onClick={handleMenuClick}></i>
      <form action="#">
        <div className={`form-input ${isSearchFormShown ? 'show' : ''}`}>
          <input type="search" placeholder="Search..." />
          <button className="search-btn" type="submit" onClick={(e) => handleSearchClick(e)}>
            <i className={`bx ${isSearchFormShown ? 'bx-x' : 'bx-search'}`}></i>
          </button>
        </div>
      </form>
      <input type="checkbox" id="theme-toggle" hidden checked={theme} onChange={handleThemeToggle} />
      <label htmlFor="theme-toggle" className="theme-toggle"></label>
      <a href="#" className="notif">
        <i className='bx bx-bell'></i>
        <span className="count">12</span>
      </a>
      <a href="#" className="profile">
        <img src="/assets/images/logo1.png" alt="profile" />
      </a>
    </nav>
  );
};

export default Navbar;
