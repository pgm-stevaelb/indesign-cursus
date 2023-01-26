// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keuzevak InDesign 2023',
  tagline: 'Cursus InDesign, nauwkeurig opgebouwd voor keuzevak Broederschool Humaniora.',
  url: 'https://pgm-stevaelb.github.io',
  baseUrl: '/indesign-cursus/',
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
            docId: 'intro',
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
    }),
};

module.exports = config;