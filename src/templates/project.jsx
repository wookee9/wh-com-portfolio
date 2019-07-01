import React from 'react';
import PropTypes from 'prop-types';
import ProjectLayout from '../components/ProjectLayout';
import SEO from '../components/seo';

const ProjectTemplate = ({
  pageContext: {
    title,
    projectKey,
  },
}) => (
  <ProjectLayout>
    <SEO title={title} />
    <h1 className={projectKey}>{title}</h1>
    <p>Project summary</p>
  </ProjectLayout>
);

ProjectTemplate.propTypes = {
  pageContext: PropTypes.exact({
    title: PropTypes.string.isRequired,
    projectKey: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectTemplate;
