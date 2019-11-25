import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledExperiments = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;

  ${mediaBreakpointUpMD} {
    width: 80%;
    height: 55vh;
  }
`;

const Experiments = () => (
  <StyledExperiments
    title="Experiments"
    client="Self-initiated"
    projectKey="experiments"
    image={<TreeA />}
  />
);

export default Experiments;
