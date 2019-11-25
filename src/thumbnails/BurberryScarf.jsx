import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledBurberryScarf = styled(ProjectLightbox)`
  width: 99%;
  height: 45vh;

  ${mediaBreakpointUpMD} {
    width: 90%;
    height: 45vh;
  }
`;

const BurberryScarf = () => (
  <StyledBurberryScarf
    title="Scarf Bar Picadilly"
    client="Burberry"
    projectKey="scarf"
    image={<TreeA />}
  />
);

export default BurberryScarf;
