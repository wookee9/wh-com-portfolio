const { resolve } = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = resolve('./src/templates/project.jsx');
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
    });
  });
};

module.exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.cast5$/,
          use: [
            {
              loader: 'file-loader',
              // Not including [ext] strips the .cast5 extension from the filename
              options: { name: '[name]' },
            },
            {
              loader: 'decryption-loader',
              options: { password: process.env.SP_KEY },
            },
          ],
        },
      ],
    },
  });
};
