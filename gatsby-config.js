module.exports = {
    pathPrefix: '/',
    siteMetadata: require('./site-metadata.json'),
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: `gatsby-plugin-stackbit-static-sass`,
            options: {
                inputFile: `${__dirname}/src/sass/main.scss`,
                outputFile: `${__dirname}/public/assets/css/main.css`
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-component`]
            }
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {
                
            }
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
                menus: require('./src/data/menus.json'),
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
              // The property ID; the tracking code won't be generated without it
              trackingId: "UA-128408567-2",
              // Defines where to place the tracking script - `true` in the head and `false` in the body
              head: false,
              // Setting this parameter is optional
              anonymize: true,
              // Setting this parameter is also optional
              respectDNT: true,
              // Avoids sending pageview hits from custom paths
              exclude: ["/admin/**", "/admin"],
              // Delays sending pageview hits on route update (in milliseconds)
              pageTransitionDelay: 0
              // Enables Google Optimize using your container Id
              // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
              // Enables Google Optimize Experiment ID
              // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
              // Set Variation ID. 0 for original 1,2,3....
              // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
              // Any additional optional fields
              //sampleRate: 5,
              //siteSpeedSampleRate: 10,
              //cookieDomain: "example.com",
            }
        }
    ]
};
