import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/seo';
import ModuleLayout from '../components/ModuleLayout';

const HomeModuleLayout = styled(ModuleLayout)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;

  h1 {
    padding: 0;
    margin: 0;
  }

  h2 {
    margin: 0;
    padding: 0;
    margin-bottom: 1.2rem;
  }

  p {
    max-width: 560px;
  }
`;

const WrapperDiv = styled.div`
  margin: 0 22vw 0 11vw;
`;

const HomeModule = () => {
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
    <HomeModuleLayout id="home">
      <SEO
        title={title}
        keywords={keywords}
      />
      <WrapperDiv>
        {documentToReactComponents(json)}
      </WrapperDiv>
    </HomeModuleLayout>
  );
};

export default HomeModule;
