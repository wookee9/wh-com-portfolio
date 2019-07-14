/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const HeaderEl = styled.header`
  position: fixed;
  z-index: 1;
`;

const Button = styled.button`
  display: block;
  position: fixed;
  top: 4vw;
  right: 4vw;
  z-index: 1;
  cursor: pointer;
`;

const Div = styled.div`
  display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;

  a {
    font-size: 1.9rem;
    text-decoration: none;
    margin: 0.7rem;
    color: black;
    transition: color 0.6s ease;

    &:hover {
      color: lightgray;
    }
  }
`;

const NavEl = styled.nav`
  position: relative;
`;

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleEvent = () => setShowMenu(!showMenu);

  return (
    <HeaderEl>
      <Logo>
        {siteTitle}
      </Logo>
      <NavEl>
        <Button
          onClick={handleEvent}
          type="button"
        >
          Menu
        </Button>
        <Div
          onClick={handleEvent}
          onKeyPress={handleEvent}
          role="button"
          showMenu={showMenu}
        >
          <Link to="/">Home</Link>
          <Link to="/#work">Work</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </Div>
      </NavEl>
    </HeaderEl>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
