/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import GlobalStyles from '../styles/GlobalStyles';

const MainEl = styled.main`
  position: relative;
`;

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
        <GlobalStyles />
        <Header siteTitle="WH" />
        <MainEl>
          {children}
        </MainEl>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
