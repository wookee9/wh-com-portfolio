import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledAlphaLabsBall = styled(ProjectLightbox)`
  width: 88%;
  height: 47vh;

  ${mediaBreakpointUpMD} {
    width: 40%;
    height: 40vh;
  }
`;

const AlphaLabsBall = () => (
  <StyledAlphaLabsBall
    title="Alpha Labs"
    client="Nokia"
    projectKey="alphalabs"
    image={<TreeA />}
  />
);

export default AlphaLabsBall;
