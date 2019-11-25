/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { mediaBreakpointUpLG, mediaBreakpointUpMD } from '../styles/constants';

const TitleH3 = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  width: 100%;
  display: block;
  /* position: absolute; */
  margin: 0.5rem 0;

  ${mediaBreakpointUpLG} {
    font-size: 1.7rem;
  }
`;

const SubtitleH4 = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  display: block;
  margin: 0.5rem 0;

  ${mediaBreakpointUpLG} {
    font-size: 1rem;
  }
`;

const TitleContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  font-size: 1.9rem;
  color: white;
  text-align: center;
  background: rgba(0,0,0,0.8);
  opacity: 0;
  margin: 0;
  padding: 0;
  text-decoration: none;
  width: inherit;
  height: inherit;
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;

  &:link,
  &:visited,
  &:active {
    color: white;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-decoration: none;
  }

  &:hover {
    opacity: 1;
  }
`;


const CoverLink = styled(Link)`
  display: block;
  background: rgba(0,0,0,0.8);
  font-size: 1.9rem;
  color: white;
  text-align: center;
  padding: 0;
  text-decoration: none;
  background: silver;
  transition: opacity 0.5s ease;
  margin-bottom: 4px;

  ${mediaBreakpointUpMD} {
    margin-right: 4px;
  }
`;

const ProjectLightbox = ({
  title,
  client,
  projectKey,
  image,
  className,
}) => (
  <CoverLink
    {...{ className }}
    to={`/work/${projectKey}/`}
  >
    <TitleContainerDiv>
      <TitleH3>{title}</TitleH3>
      <SubtitleH4>{client}</SubtitleH4>
    </TitleContainerDiv>
    {image}
  </CoverLink>
);

ProjectLightbox.propTypes = {
  projectKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};


export default ProjectLightbox;
