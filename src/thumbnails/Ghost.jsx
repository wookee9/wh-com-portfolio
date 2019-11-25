import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledGhost = styled(ProjectLightbox)`
  width: 75%;
  height: 55vh;

  ${mediaBreakpointUpMD} {
    width: 70%;
    height: 55vh;
  }
`;

const Ghost = () => (
  <StyledGhost
    title="The Ghost of 16 Hanbury St"
    client="Wieden+Kennedy"
    projectKey="ghost"
    image={<TreeA />}
  />
);

export default Ghost;
