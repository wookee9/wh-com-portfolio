import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const { allContentfulProject: { projects } } = useStaticQuery(graphql`
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
    <Layout>
      <SEO
        title="William Hooke - Full Stack Engineer"
        keywords={['william hooke', 'full stack', 'engineer', 'react', 'london']}
      />
      <h1>William Hooke</h1>
      <h2>Full Stack Engineer</h2>
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
    </Layout>
  );
};

export default IndexPage;
