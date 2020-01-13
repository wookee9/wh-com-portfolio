import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledSpyscapeCom = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;

  ${mediaBreakpointUpMD} {
    width: 40%;
    height: 40vh;
  }
`;

const SpyscapeCom = () => (
  <StyledSpyscapeCom
    title="Spyscape.com"
    client="Spyscape"
    projectKey="spyscapecom"
    image={<TreeA />}
  />
);

export default SpyscapeCom;
