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
          }
        }
      }
    }
  `);

  return (
    <ModuleLayout id="work">
      <SEO
        title="William Hooke - Full Stack Engineer - Selected Work"
        keywords={['william hooke', 'full stack', 'engineer', 'react', 'london', 'work']}
      />
      <h2>Selected Work</h2>
      {
        projects.map(({ project: { title, key } }) => (
          // <li key={key}>
          //   <Link to={`/work/${key}/`}>
          //     {title}
          //   </Link>
          // </li>
          <ProjectLightbox key={key} projectKey={key} title={title} />
        ))
      }
    </ModuleLayout>
  );
};

export default WorkModule;
