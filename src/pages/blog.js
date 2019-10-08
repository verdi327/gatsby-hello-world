import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default ({data}) => {
  return (
    <Layout>
      <SEO 
        title='V360 blog'
        description='collection of blog posts'
      />

      
      <Header headerText='Our Blog' />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 style={{marginBottom: '20px'}}>
              {node.frontmatter.title}{" "}
              <span style={{color: '#bbb'}}>
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }`