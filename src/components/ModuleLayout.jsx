/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  margin: 0 auto;
  max-width: 960;
  min-height: 100vh;
  margin: 0 22vw 0 11vw;
  position: relative;

  h1 {
    font-weight: 700;
    font-size: 1.9rem;
  }

  h2 {
    font-weight: 400;
    font-size: 1.9rem;
    margin-bottom: 4rem;
    padding-top: 9rem;
  }

  p {
    line-height: 1.6rem;
  }

  a {
    font-weight: 700;
    color: black;
  }
`;

const ModuleLayout = ({ children, ...restProps }) => (
  <Section {...restProps}>
    {children}
  </Section>
);

ModuleLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModuleLayout;
