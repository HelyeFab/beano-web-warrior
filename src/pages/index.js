import { graphql,Link } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { data } from "vfile"
import Layout from "../components/Layout"
import { header } from '../styles/home.module.css'
import { btn } from '../styles/home.module.css'

export default function Home({ data }) {
  console.log(data)
 
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in Edinburgh</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
      <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
query homeImage {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


