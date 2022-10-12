module.exports = {
  // pathPrefix: "/hypercerts-landing",
  siteMetadata: {
    title: `Hypercerts`,
    description: `Using the same Hypercert primitive, funders and projects create a scalable, interoperable and transparent funding environment for innovative public goods.`,
    author: `@protocollabs`,
    siteUrl: `https://hypercerts.xyz`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
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
        name: `hypercerts-landing`,
        short_name: `hypercerts-landing`,
        start_url: `/`,
        background_color: `#FEF5AC`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Inter`,
            file: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-7PWVTP0VPX", "GT-5RMLPMS", "GTM-NG5R2SH"],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /.*\.svg/,
        },
      },
    },
  ],
}
