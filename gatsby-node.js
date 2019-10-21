/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  console.log(actions)
  const blogPostTemplate = path.resolve("src/templates/blogPost.js")
  return graphql(
    `
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                date(formatString: "")
                title
                path
              }
              html
            }
          }
        }
      }
    `
  ).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.path}`,
        component: blogPostTemplate,
        context: {
          pathSlug: `${node.frontmatter.path}`,
        },
      })
    })
  })
}
