import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AuditImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "audit-screenshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img
    fluid={data.placeholderImage.childImageSharp.fluid}
    alt="Lighthouse Audit Report"
    title="Lighthouse Audit Report"
  />
}

export default AuditImage
