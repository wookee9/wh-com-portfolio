import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => {
  const {
    contentfulPage: {
      keywords,
      content,
      title,
    },
  } = useStaticQuery(graphql`
    query {
      contentfulPage(key: {eq: "contact"}) {
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
    </Layout>
  );
};

export default ContactPage;
