import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledChristmasTreeBig = styled(ProjectLightbox)`
  width: 70%;
  height: 65vh;

  ${mediaBreakpointUpMD} {
    width: 40%;
    height: 40vh;
  }
`;

const ChristmasTreeBig = () => (
  <StyledChristmasTreeBig
    title="Christmas Tree"
    client="Burberry for Claridge's"
    projectKey="tree"
    image={<TreeA />}
  />
);

export default ChristmasTreeBig;
