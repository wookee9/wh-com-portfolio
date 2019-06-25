import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const {
    contentfulPage: {
      keywords,
      content,
      title,
    },
  } = useStaticQuery(graphql`
    query {
      contentfulPage(key: {eq: "home"}) {
        keywords
        title
        content: childContentfulPageContentRichTextNode {
          json
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title={title}
        keywords={keywords}
      />
      {documentToReactComponents(content.json)}
      <Link to="/work">Continue</Link>
    </Layout>
  );
};

export default IndexPage;
