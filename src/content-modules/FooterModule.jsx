import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'react-markdown';
import styled from 'styled-components';
import ModuleLayout from '../components/ModuleLayout';

const FooterModuleLayout = styled(ModuleLayout)`
  margin: 0;
`;

const QuoteDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background: #1a1a1a;
  color: lightgray;

  P {
    width: 50%;
    max-width: 440px;
  }
`;

const ThanksDiv = styled.div`
  background: linear-gradient(to bottom, #f4f4f4 0%, #1a1a1a 100%);

  p {
    text-align: center;
    padding: 15rem;
    margin: 0;

    &:last-child {
      padding-bottom: 25rem;
    }
  }
`;

const FooterModule = () => {
  const {
    jobsQuote,
    footerThanks,
  } = useStaticQuery(graphql`
    query {
      jobsQuote: contentfulPhrase(key: {eq: "jobs-quote"}) {
        text {
          text
        }
      }
      footerThanks: contentfulPhrase(key: {eq: "footer-thanks"}) {
        text {
          text
        }
      }
    }
  `);

  return (
    <FooterModuleLayout>
      <ThanksDiv>
        <Markdown source={footerThanks.text.text} />
      </ThanksDiv>
      <QuoteDiv>
        <Markdown source={jobsQuote.text.text} />
      </QuoteDiv>
    </FooterModuleLayout>
  );
};

export default FooterModule;
