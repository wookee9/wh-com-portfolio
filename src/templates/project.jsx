import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectTemplate = ({
  pageContext: {
    title,
    projectKey,
  },
}) => (
  <Layout>
    <SEO title={title} />
    <h1 className={projectKey}>{title}</h1>
    <p>Project summary</p>
  </Layout>
);

ProjectTemplate.propTypes = {
  pageContext: PropTypes.exact({
    title: PropTypes.string.isRequired,
    projectKey: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectTemplate;
