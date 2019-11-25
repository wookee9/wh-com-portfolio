import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import ModuleLayout from '../components/ModuleLayout';
import SpyscapeNY from '../thumbnails/SpyscapeNY';
import SpyscapeCom from '../thumbnails/SpyscapeCom';
import ChristmasTreeBig from '../thumbnails/ChristmasTreeBig';
import ChristmasTreeClose from '../thumbnails/ChristmasTreeClose';
import BurberryScarf from '../thumbnails/BurberryScarf';
import GumulonMouth from '../thumbnails/GumulonMouth';
import GumulonMonster from '../thumbnails/GumulonMonster';
import MorkUlnes from '../thumbnails/MorkUlnes';
import HondaJazz from '../thumbnails/HondaJazz';
import AlphaLabsA from '../thumbnails/AlphaLabsA';
import AlphaLabsBall from '../thumbnails/AlphaLabsBall';
import ChocolateCoin from '../thumbnails/ChocolateCoin';
import Ghost from '../thumbnails/Ghost';
import Experiments from '../thumbnails/Experiments';

const ProjectContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const WorkModule = () => (
  <ModuleLayout id="work">
    <h2>Selected Work</h2>
    <ProjectContainerDiv>
      <SpyscapeNY />
      <SpyscapeCom />
      <ChristmasTreeBig />
      <ChristmasTreeClose />
      <BurberryScarf />
      <GumulonMouth />
      <GumulonMonster />
      <MorkUlnes />
      <HondaJazz />
      <AlphaLabsA />
      <AlphaLabsBall />
      <ChocolateCoin />
      <Ghost />
      <Experiments />
    </ProjectContainerDiv>
  </ModuleLayout>
);

export default WorkModule;


// const {
//   allContentfulProject: {
//     projects,
//   },
// } = useStaticQuery(graphql`
//   query {
//     allContentfulProject {
//       projects: edges {
//         project: node {
//           title
//           key
//           client
//         }
//       }
//     }
//   }
// `);

// const thumbs = useStaticQuery(graphql`
//   query {
//     allContentfulProject {
//       nodes {
//         thumbnails {
//           fluid(maxWidth: 1000) {
//             ...GatsbyContentfulFluid
//           }
//           title
//         }
//       }
//     }
//   }
// `);
