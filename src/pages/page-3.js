import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const ThirdPage = ({ data }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the second page</h1>
      {allMarkdownRemark.edges.map(el => {
        return (
          <>
            {parse(el.node.html)}
            <Link to={el.node.frontmatter.path}>
              Go back to the {el.node.frontmatter.path}
            </Link>
          </>
        )
      })}
      <div>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default ThirdPage

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          excerpt
          html
        }
      }
    }
  }
`
