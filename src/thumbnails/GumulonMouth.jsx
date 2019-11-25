import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledGumulonMouth = styled(ProjectLightbox)`
  width: 100%;
  height: 50vh;
  display: none;

  ${mediaBreakpointUpMD} {
    display: block;
    width: 45%;
    height: 58vh;
  }
`;

const GumulonMouth = () => (
  <StyledGumulonMouth
    title="Gumulon"
    client="Modeléz"
    projectKey="gumulon"
    image={<TreeA />}
  />
);

export default GumulonMouth;
