const { resolve } = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = resolve('./src/templates/project.js')
  const { data: { allContentfulProject: { projects } } } = await graphql(`
    query {
      allContentfulProject {
        projects: edges {
          project: node {
            title
            key
          }
        }
      }
    }
  `);

  projects.forEach(({ project: { key, title } }) => {
      createPage({
          component: projectTemplate,
          path: `/work/${key}`,
          context: {
              projectKey: key,
              title,
          },
      })
  })
}