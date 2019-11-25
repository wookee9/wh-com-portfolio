import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledChristmasTreeClose = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;
  display: none;

  ${mediaBreakpointUpMD} {
    display: block;
    width: 40%;
    height: 50vh;
  }
`;

const ChristmasTreeClose = () => (
  <StyledChristmasTreeClose
    title="Christmas Tree"
    client="Burberry for Claridge's"
    projectKey="tree"
    image={<TreeA />}
  />
);

export default ChristmasTreeClose;
