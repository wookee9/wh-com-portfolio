/* eslint-disable jsx-a11y/interactive-supports-focus */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const TitleH3 = styled.h3`
  font-size: 1.9rem;
  font-weight: 400;
  width: 100%;
  margin: 1rem;
`;

const SubtitleH4 = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  margin: 1rem;
`;

const CoverLink = styled(Link)`
  display: flex;
  flex-direction: vertical;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.8);
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  text-decoration: none;
  transition: opacity 0.5s ease;
  font-size: 1.9rem;
  color: white;
  text-align: center;

  &:link,
  &:visited,
  &:active {
    color: white;
    font-weight: 400;
    letter-spacing: 0.5px;
  }

  &:hover {
    opacity: 1;
  }
`;

const LightboxDiv = styled.div`
  width: 100%;
  height: 70vh;
  background: silver;
  margin: 5px;
  background-size: cover;
  background-image: url(${props => props.img});
`;

const ProjectLightbox = ({ title, client, projectKey }) => (
  <LightboxDiv img="icons/icon-512x512.png">
    <CoverLink to={`/work/${projectKey}/`}>
      <div>
        <TitleH3>{title}</TitleH3>
        <SubtitleH4>{client}</SubtitleH4>
      </div>
    </CoverLink>
  </LightboxDiv>
);

ProjectLightbox.propTypes = {
  projectKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired,
};


export default ProjectLightbox;
