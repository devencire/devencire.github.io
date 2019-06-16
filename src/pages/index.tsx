import React from "react"
import { Layout } from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import { SiteTitleQuery } from "../graphqlTypes"

export default () => {
  const data: SiteTitleQuery = useStaticQuery(
    graphql`
      query SiteTitle {
        site {
          buildTime
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Layout>
      <h2>{data.site.siteMetadata.title}</h2>
      <p>There's nothing here... yet...</p>
      <p>This last rebuilt at {data.site.buildTime}</p>
    </Layout>
  )
}
