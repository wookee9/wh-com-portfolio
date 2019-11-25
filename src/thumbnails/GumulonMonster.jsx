import React from 'react';
import styled from 'styled-components';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from './TreeA';
import { mediaBreakpointUpMD } from '../styles/constants';

const StyledGumulonMonster = styled(ProjectLightbox)`
  width: 85%;
  height: 58vh;

  ${mediaBreakpointUpMD} {
    width: 50%;
    height: 58vh;
  }
`;

const GumulonMonster = () => (
  <StyledGumulonMonster
    title="Gumulon"
    client="Modeléz"
    projectKey="gumulon"
    image={<TreeA />}
  />
);

export default GumulonMonster;
