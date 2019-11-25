import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledMorkUlnes = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;

  ${mediaBreakpointUpMD} {
    width: 80%;
    height: 48vh;
  }
`;

const MorkUlnes = () => (
  <StyledMorkUlnes
    title="MorkUlnes.com"
    client="Mork Ulnes"
    projectKey="morkulnes"
    image={<TreeA />}
  />
);

export default MorkUlnes;
