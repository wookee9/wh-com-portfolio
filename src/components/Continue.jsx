import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const ContinueLink = ({ visible, ...props }) => (
  <Link to="/#work" {...props}>
    <svg
      height="20"
      width="20"
      viewBox="0 0 20 20"
      role="img"
      aria-labelledby="title"
    >
      <title id="title">Continue</title>
      <polyline
        points="0,0 10,10 20,0"
        style={{
          fill: 'none',
          stroke: 'black',
          strokeWidth: 1,
        }}
      />
    </svg>
  </Link>
);

ContinueLink.propTypes = {
  visible: PropTypes.bool.isRequired,
};

const Continue = styled(ContinueLink)`
  width: 20px;
  height: 20px;
  z-index: 1;
  position: fixed;
  display: block;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity .25s;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
`;

export default Continue;
