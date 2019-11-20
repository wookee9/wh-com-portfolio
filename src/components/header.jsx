/* eslint-disable jsx-a11y/interactive-supports-focus */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MenuButton from './MenuButton';

const HeaderEl = styled.header`
  position: fixed;
  z-index: 1;
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
        <MenuButton
          onClick={handleEvent}
          close={showMenu}
        />
        <Div
          onClick={handleEvent}
          onKeyPress={handleEvent}
          role="button"
          showMenu={showMenu}
        >
          <a href="/#home">Home</a>
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
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
