import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';

const AboutModule = () => {
  const {
    contentfulPage: {
      keywords,
      content,
      title,
    },
  } = useStaticQuery(graphql`
    query {
      contentfulPage(key: {eq: "about"}) {
        keywords
        title
        content: childContentfulPageContentRichTextNode {
          json
        }
      }
    }
  `);

  return (
    <ModuleLayout id="about">
      <SEO
        title={title}
        keywords={keywords}
      />
      {documentToReactComponents(content.json)}
    </ModuleLayout>
  );
};

export default AboutModule;
