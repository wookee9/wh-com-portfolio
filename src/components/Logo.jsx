/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const LogoH1 = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin: 4vw 4vw;
  z-index: 1;
  position: relative;
  letter-spacing: 0.15rem;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Logo = ({ children }) => (
  <LogoH1>
    <Link to="/">{children}</Link>
  </LogoH1>
);

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Logo;
