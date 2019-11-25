import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledAlphaLabsA = styled(ProjectLightbox)`
  width: 85%;
  height: 46vh;
  display: none;

  ${mediaBreakpointUpMD} {
    width: 40%;
    height: 40vh;
    display: block;
  }
`;

const AlphaLabsA = () => (
  <StyledAlphaLabsA
    title="Alpha Labs"
    client="Nokia"
    projectKey="alpha"
    image={<TreeA />}
  />
);

export default AlphaLabsA;
