import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import * as projectDetails from "../styles/project-details.module.css"
import { graphql } from "gatsby"

const ProjectDetails = ({data}) => {
  const {html} = data.markdownRemark
  const {title, stack, featured} = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={projectDetails.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={projectDetails.featured}>
          <Img fluid={featured.childImageSharp.fluid} />
        </div>
        <div className={projectDetails.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
export default ProjectDetails

export const query = graphql`
query ProjectPage($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featured {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`