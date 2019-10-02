import { graphql } from 'gatsby';

const query = graphql`
  query {
    contentfulAsset(title: {eq: "encryption-thumb-1-img"}) {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
    }
  }
`;

export default query;
