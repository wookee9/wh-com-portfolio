/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // eslint-disable-next-line no-unused-vars
    render={data => (
      <>
        <Header siteTitle="WH" />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            {`©WH ${new Date().getFullYear()}`}
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
