import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';
// import ProjectLightbox from '../components/ProjectLightbox';

const WorkModule = () => {
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

  const thumbs = useStaticQuery(graphql`
    query {
      allContentfulProject {
        nodes {
          thumbnails {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
            title
          }
        }
      }
    }
  `);

  console.log(thumbs);

  const thumbImageData = thumbs.allContentfulProject.nodes[0].thumbnails[0].fluid;

  console.log(thumbImageData);
  // const spyscape = projects.find(({ project: { key } }) => key === 'spyscape').project;
  // console.log(spyscape);

  return (
    <ModuleLayout id="work">
      <SEO
        title="William Hooke - Full Stack Engineer - Selected Work"
        keywords={['william hooke', 'full stack', 'engineer', 'react', 'london', 'work']}
      />
      <h2>Selected Work</h2>

      <BackgroundImage
        // Tag="div"
        // className={className}
        fluid={thumbImageData}
        backgroundColor="#040e18"
        width="400"
        height="400"
      >
        <h1>Hello gatsby-background-image</h1>
      </BackgroundImage>
      {
        // projects.map(({ project }) => (
        //   <ProjectLightbox
        //     {...project}
        //     projectKey={project.key}
        //   />
        // ))
      }
      {/* <ProjectLightbox
        {...spyscape}
        projectKey={spyscape.key}
      /> */}
    </ModuleLayout>
  );
};

export default WorkModule;
