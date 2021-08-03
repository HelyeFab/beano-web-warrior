  
import React from 'react'
import Layout from '../../components/Layout'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import * as portfolioStyle from "../../styles/portfolio.module.css"


const Projects = ({ data }) => {
  const projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolioStyle.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={portfolioStyle.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div key={project.id}>
               <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? email me at {contact} for a quote!</p>
      </div>
    </Layout>
  );
}
 
export default Projects

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
