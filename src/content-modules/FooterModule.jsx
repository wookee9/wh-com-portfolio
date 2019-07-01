import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Markdown from 'react-markdown';
import ModuleLayout from '../components/ModuleLayout';

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
    <div>
      <div>
        <Markdown source={footerThanks.text.text} />
      </div>
      <ModuleLayout>
        <Markdown source={jobsQuote.text.text} />
        <footer>
          {`©WH ${new Date().getFullYear()}`}
        </footer>
      </ModuleLayout>
    </div>
  );
};

export default FooterModule;
