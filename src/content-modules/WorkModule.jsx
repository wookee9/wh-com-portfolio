import React from 'react';
// import { graphql, useStaticQuery } from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
// import Img from 'gatsby-image';
import styled from 'styled-components';
import ModuleLayout from '../components/ModuleLayout';
import ProjectLightbox from '../components/ProjectLightbox';
import TreeA from '../thumbnails/TreeA';

const ProjectContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
`;

const WorkModule = () => (
  <ModuleLayout id="work">
    <h2>Selected Work</h2>
    <ProjectContainerDiv>
      <ProjectLightbox
        title="Spyscape New York"
        client="Spyscape"
        projectKey="spyscape"
        w={50}
        h={50}
        image={<TreeA />}
      />
      <ProjectLightbox
        title="Spyscape.com"
        client="Spyscape"
        projectKey="spyscape"
        w={40}
        h={40}
        image={<TreeA />}
      />
      <ProjectLightbox
        title="Christmas Tree"
        client="Burberry for Claridge's"
        projectKey="spyscape"
        w={40}
        h={40}
        image={<TreeA />}
      />
      <ProjectLightbox
        title="Title"
        client="Client"
        projectKey="spyscape"
        w={60}
        h={40}
        image={<TreeA />}
      />
      <ProjectLightbox
        title="Title"
        client="Client"
        projectKey="spyscape"
        w={50}
        h={40}
        image={<TreeA />}
      />
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
