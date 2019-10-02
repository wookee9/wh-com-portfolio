import React from 'react';
// import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
// import BackgroundImage from 'gatsby-background-image';
// import query from './query';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = styled(Img)`
  /* margin: 0;
  padding: 0; */
  /* width: 100%; */
  height: 100%;
  position: absolute;
`;

const query = graphql`
  query {
    contentfulAsset(title: {eq: "encryption-thumb-1-img"}) {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

const TreeA = () => {
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       contentfulAsset(title: {eq: "encryption-thumb-1-img"}) {
  //         fluid(maxWidth: 1000) {
  //           ...GatsbyContentfulFluid
  //         }
  //       }
  //     }
  //   `}
  //   render={data => <Img fluid={data.contentfulAsset.fluid} />}
  // />
  // const data = useStaticQuery(graphql`
  //   query {
  //     contentfulAsset(title: {eq: "encryption-thumb-1-img"}) {
  //       fluid(maxWidth: 1000) {
  //         ...GatsbyContentfulFluid
  //       }
  //     }
  //   }
  // `);
  const data = useStaticQuery(query);

  return (
    <Image fluid={data.contentfulAsset.fluid} />
    // <BackgroundImage
    //   tag="div"
    //   fluid={data.contentfulAsset.fluid}
    // />
  );
};
export default TreeA;
