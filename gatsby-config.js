if (process.env.BUILD_ENV) {
  console.log(`Loading .env.${process.env.BUILD_ENV}`);
  require('dotenv').config({
    path: `.env.${process.env.BUILD_ENV}`,
  });
} else {
  console.log('Loading .env');
  require('dotenv').config({
    path: `.env`,
  });
}

module.exports = {
  siteMetadata: {
    siteUrl: 'https://jakubtucek.cz',
    title: 'jakub-tucek',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GA_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-scroll-reveal',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/svg/start-laptop.svg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
