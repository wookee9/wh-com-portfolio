import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';

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
      <ul>
        {
          projects.map(({ project: { title, key } }) => (
            <li key={key}>
              <Link to={`/work/${key}/`}>
                {title}
              </Link>
            </li>
          ))
        }
      </ul>
    </ModuleLayout>
  );
};

export default WorkModule;
