// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HexArchon',
  tagline: 'The wiki for the HexArchon Minecraft server.',
  url: 'http://wiki.hexarchon.net/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'HexArchon', // Usually your GitHub org/user name.
  projectName: 'HexArchon-Wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   '',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'HexArchon',
        logo: {
          alt: 'HexArchon Logo',
          src: 'img/docusaurus.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Main Page',
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://hexarchon.net/',
            label: 'Portal',
            position: 'left',
          },
          {
            href: 'https://store.hexarchon.net/',
            label: 'Store',
            position: 'left',
          },
          {
            href: 'https://map.hexarchon.net/',
            label: 'Map',
            position: 'left',
          },
          {
            href: 'https://discord.hexarchon.net/',
            label: 'Discord',
            position: 'left',
          },
          // {
          //   href: 'https://github.com/hexarchon/hexarchon-wiki',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'HexArchon Logo',
          src: 'img/hexarchon-200.png',
          href: 'https://hexarchon.net',
          width: 280,
          height: 165,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'Custom Items',
                to: '/custom-items',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.hexarchon.net/',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portal',
                href: 'https://hexarchon.net/',
              },
              {
                label: 'Store',
                href: 'https://store.hexarchon.net/',
              },
              {
                label: 'Map',
                href: 'https://map.hexarchon.net/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HexArchon. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'U2OKIBYWYT',
  
        // Public API key: it is safe to commit it
        apiKey: 'fa0ec072dd4aa2fdd5d8cc970c98e180',
  
        indexName: 'hexarchon',
  
        // Optional: see doc section below
        contextualSearch: false,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;