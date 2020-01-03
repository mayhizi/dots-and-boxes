require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: true,
          firestore: false,
          storage: false,
          messaging: false,
          functions: true,
          performance: false,
        },
        credentials: {
          apiKey: `.env.${process.env.GATSBY_FIREBASE_API_KEY}`,
          authDomain: `.env.${process.env.GATSBY_FIREBASE_AUTH_DOMAIN}`,
          databaseURL: `.env.${process.env.GATSBY_FIREBASE_DATABASE_URL}`,
          projectId: `.env.${process.env.GATSBY_FIREBASE_PROJECT_ID}`,
          storageBucket: `.env.${process.env.GATSBY_FIREBASE_STORAGE_BUCKET}`,
          messagingSenderId: `.env.${process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID}`,
          appId: `.env.${process.env.GATSBY_FIREBASE_APP_ID}`,
        },
      },
    },

    `gatsby-plugin-antd`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
