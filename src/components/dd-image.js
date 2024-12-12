import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const DSImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "decoupled-diagram.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid}
    alt="Decoupled Solutions Icon"
    title="Decoupled Solutions Icon"
  />
}

export default DSImage
