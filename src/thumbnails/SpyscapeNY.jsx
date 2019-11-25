import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledSpyscapeNY = styled(ProjectLightbox)`
  width: 95%;
  height: 50vh;

  ${mediaBreakpointUpMD} {
    width: 50%;
    height: 50vh;
  }
`;

const SpyscapeNY = () => (
  <StyledSpyscapeNY
    title="Spyscape New York"
    client="Spyscape"
    projectKey="spyscapeny"
    image={<TreeA />}
  />
);

export default SpyscapeNY;
