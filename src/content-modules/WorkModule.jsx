import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';
import ProjectLightbox from '../components/ProjectLightbox';

const WorkModule = () => {
  const {
    allContentfulProject: {
      projects,
    },
  } = useStaticQuery(graphql`
    query {
      allContentfulProject {
        projects: edges {
          project: node {
            title
            key
            client
          }
        }
      }
    }
  `);

  const spyscape = projects.find(({ project: { key } }) => key === 'spyscape').project;
  console.log(spyscape);

  return (
    <ModuleLayout id="work">
      <SEO
        title="William Hooke - Full Stack Engineer - Selected Work"
        keywords={['william hooke', 'full stack', 'engineer', 'react', 'london', 'work']}
      />
      <h2>Selected Work</h2>
      {
        // projects.map(({ project }) => (
        //   <ProjectLightbox
        //     {...project}
        //     projectKey={project.key}
        //   />
        // ))
      }
      <ProjectLightbox
        {...spyscape}
        projectKey={spyscape.key}
      />
    </ModuleLayout>
  );
};

export default WorkModule;
