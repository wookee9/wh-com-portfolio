import React from 'react';
import Layout from '../components/layout';
import HomeModule from '../content-modules/HomeModule';
import AboutModule from '../content-modules/AboutModule';
import ContactModule from '../content-modules/ContactModule';
import WorkModule from '../content-modules/WorkModule';
import FooterModule from '../content-modules/FooterModule';

const IndexPage = () => (
  <Layout>
    <HomeModule />
    <WorkModule />
    <AboutModule />
    <ContactModule />
    <FooterModule />
  </Layout>
);

export default IndexPage;
