import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';

const ContactModule = () => {
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
    <ModuleLayout>
      <div id="contact">
        <SEO
          title={title}
          keywords={keywords}
        />
        {documentToReactComponents(content.json)}
      </div>
    </ModuleLayout>
  );
};

export default ContactModule;
