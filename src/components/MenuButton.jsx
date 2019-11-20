import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  display: block;
  position: fixed;
  top: 4vw;
  right: 4vw;
  z-index: 1;
  cursor: pointer;

  border: none;
  background: none;
  outline: none;

  height: 26px;
  line-height: 0;
  transform: translateY(-4px);

  &:before,
  &:after {
    content: "";
    width: 26px;
    display: block;
    background: black;
    height: 1px;
    margin: 0;
    transition: transform 0.5s;
  }

  &:after {
    transform: ${({ close }) => (close ? 'rotate(-45deg) translateY(-1px)' : 'translateY(-5px)')};
  }

  &:before {
    transform: ${({ close }) => (close ? 'rotate(45deg) translateY(1px)' : 'translateY(5px)')};
  }
`;

const MenuButton = ({ onClick, close }) => (
  <Button
    onClick={onClick}
    type="button"
    close={close}
  />
);

MenuButton.propTypes = {
  close: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
