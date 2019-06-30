/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

const ModuleLayout = ({ children }) => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      minHeight: '100vh',
    }}
  >
    <section>{children}</section>
  </div>
);

ModuleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModuleLayout;
