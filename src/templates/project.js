import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectTemplate = ({ 
  pageContext: {
    title,
    projectKey,
  },
}) => (
  <Layout>
    <SEO title={title} />
    <h1>{title}</h1>
    <p>{"Project summary"}</p>
  </Layout>
);


export default ProjectTemplate;
