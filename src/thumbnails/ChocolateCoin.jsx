import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledChocolateCoin = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;

  ${mediaBreakpointUpMD} {
    width: 88%;
    height: 54vh;
  }
`;

const ChocolateCoin = () => (
  <StyledChocolateCoin
    title="Chocolate Coin Factory"
    client="Wieden+Kennedy"
    projectKey="chocolate"
    image={<TreeA />}
  />
);

export default ChocolateCoin;
