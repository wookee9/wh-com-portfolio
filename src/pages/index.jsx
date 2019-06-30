import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutModule from '../content-modules/AboutModule';
import ContactModule from '../content-modules/ContactModule';
import WorkModule from '../content-modules/WorkModule';
import FooterModule from '../content-modules/FooterModule';
import ModuleLayout from '../components/ModuleLayout';

const IndexPage = () => {
  const {
    contentfulPage: {
      keywords,
      content: { json },
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
      <ModuleLayout>
        <div>
          <SEO
            title={title}
            keywords={keywords}
          />
          {documentToReactComponents(json)}
          <Link to="/#work">Continue</Link>
        </div>
      </ModuleLayout>
      <WorkModule />
      <AboutModule />
      <ContactModule />
      <FooterModule />
    </Layout>
  );
};

export default IndexPage;
