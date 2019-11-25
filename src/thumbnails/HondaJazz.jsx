import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledHondaJazz = styled(ProjectLightbox)`
  width: 98%;
  height: 53vh;

  ${mediaBreakpointUpMD} {
    width: 40%;
    height: 40vh;
  }
`;

const HondaJazz = () => (
  <StyledHondaJazz
    title="This Unpredictable Life"
    client="Honda"
    projectKey="jazz"
    image={<TreeA />}
  />
);

export default HondaJazz;
