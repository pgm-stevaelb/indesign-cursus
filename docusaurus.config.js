// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const ENV = require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keuzevak InDesign 2023',
  tagline: 'Cursus InDesign, nauwkeurig opgebouwd voor keuzevak Broederschool Humaniora.',
  url: 'https://pgm-stevaelb.github.io',
  baseUrl: '/indesign-cursus/',
  // url: 'https://cursus-indesign.netlify.app/',
  // baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'pgm-stevaelb',
  projectName: 'indesign-cursus',

  i18n: {
    defaultLocale: 'nl-BE',
    locales: ['nl-BE'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: `Cursus InDesign ${new Date().getFullYear()}`,
        logo: {
          alt: `InDesign ${new Date().getFullYear()}`,
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'inleiding/1-1-introductie',
            position: 'right',
            label: 'Lessen',
          },
          {
            href: 'https://humaniora.broeders.be/',
            label: 'Humaniora',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Steevn.be - Built with Docusaurus. Alle inhoud in deze cursus mag vrij gebruikt worden.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'ZM6CWMQ92K',
        apiKey: '44d4e85d057aa9766bdd2d4c80428f8f',
        indexName: 'indesign-cursus',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      }
    ],
  ],
};

module.exports = config;
