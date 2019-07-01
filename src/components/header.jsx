/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './header.css';

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false);
  const showNavClassName = showMenu ? 'nav-show' : '';

  const handleEvent = () => setShowMenu(!showMenu);

  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <nav className="main-menu">
          <button
            className="menu-button"
            onClick={handleEvent}
            type="button"
          >
            Menu
          </button>
          <div
            className={`menu-links ${showNavClassName}`}
            onClick={handleEvent}
            onKeyPress={handleEvent}
            role="button"
          >
            <Link to="/">Home</Link>
            <Link to="/#work">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/#contact">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
