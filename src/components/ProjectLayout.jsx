/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GlobalStyles from '../styles/GlobalStyles';

const ProjectLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Link to="/#work">Close</Link>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 5rem',
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
    </div>
  </>
);

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectLayout;
