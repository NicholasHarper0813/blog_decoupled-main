const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Decoupled.blog`,
    description: `Resources for your Decoupled WordPress journey.`,
    author: `@muhsinlk`,
    url: "https://decoupled.blog", // No trailing slash allowed!
    image: "https://decoupled.blog/icons/icon-512x512.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@muhsinlk",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.js') },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Decoupled.blog`,
        short_name: `Decoupled.blog`,
        start_url: `/`,
        background_color: `#205D86`,
        theme_color: `#205D86`,
        display: `minimal-ui`,
        icon: `src/images/decoupled-blog-favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
