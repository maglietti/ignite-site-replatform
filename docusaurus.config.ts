import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Apache Ignite',
  tagline: 'Distributed Database For High-Performance Applications With In-Memory Speed',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Development URL - production URL will be configured in Phase 9
  url: 'http://localhost',
  baseUrl: '/',

  // Apache Ignite project metadata
  organizationName: 'apache',
  projectName: 'ignite-website',

  // During development: 'warn' allows building with broken links to non-existent pages
  // Before final deployment: change to 'throw' for quality assurance
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Apache Ignite Blog',
          blogDescription: 'Stay up to date with Apache Ignite news, releases, and technical articles',
          postsPerPage: 10,
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Apache Ignite Blog',
            description: 'Apache Ignite news, releases, and technical articles',
          },
          // No edit links for blog posts
          editUrl: undefined,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-pic.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Apache Ignite Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-white.svg',
      },
      items: [
        {
          label: 'Get Started',
          position: 'left',
          items: [
            {
              label: 'Quick Start Guide',
              href: 'https://ignite.apache.org/docs/latest/quick-start/java',
            },
            {
              label: 'Learning resources',
              to: '/resources',
            },
            {
              label: 'Training and Courses',
              to: '/resources',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          label: 'Features',
          position: 'left',
          items: [
            {
              label: 'Multi-Tier Storage',
              to: '/arch/multi-tier-storage',
            },
            {
              label: 'Native Persistence',
              to: '/arch/native-persistence',
            },
            {
              label: 'Distributed SQL',
              to: '/features/sql',
            },
            {
              label: 'ACID Transactions',
              to: '/features/acid-transactions',
            },
            {
              label: 'Key-Value APIs',
              to: '/features/key-value-apis',
            },
            {
              label: 'Compute APIs',
              to: '/features/compute-apis',
            },
            {
              label: 'Machine Learning',
              to: '/features/machinelearning',
            },
            {
              label: 'Services',
              to: '/features/service-apis',
            },
            {
              label: 'Real-Streaming APIs',
              to: '/features/streaming',
            },
            {
              label: 'Continuous Queries',
              href: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries',
            },
            {
              label: 'Messaging',
              href: 'https://ignite.apache.org/docs/latest/messaging',
            },
          ],
        },
        {
          label: 'Use Cases',
          position: 'left',
          items: [
            {
              label: 'In-Memory Cache',
              to: '/use-cases/in-memory-cache',
            },
            {
              label: 'In-Memory Data Grid',
              to: '/use-cases/in-memory-data-grid',
            },
            {
              label: 'In-Memory Database',
              to: '/use-cases/in-memory-database',
            },
            {
              label: 'High-Performance Computing',
              to: '/use-cases/high-performance-computing',
            },
            {
              label: 'Digital Integration Hub',
              to: '/use-cases/digital-integration-hub',
            },
            {
              label: 'Key-Value Store',
              to: '/use-cases/key-value-store',
            },
            {
              label: 'Apache Spark Acceleration',
              to: '/use-cases/spark-acceleration',
            },
            {
              label: 'Apache Hadoop Acceleration',
              to: '/use-cases/hadoop-acceleration',
            },
          ],
        },
        {
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Apache Ignite Story',
              to: '/community',
            },
            {
              label: 'Meet The Community',
              to: '/community',
            },
            {
              label: 'Start Contributing',
              to: '/community',
            },
            {
              label: 'Ask Questions',
              to: '/community',
            },
            {
              label: 'Apache Ignite Summit',
              to: '/events',
            },
            {
              label: 'Upcoming Events',
              to: '/events',
            },
            {
              label: 'Meetups',
              to: '/events',
            },
            {
              label: 'Past Events',
              to: '/events',
            },
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          label: 'Resources',
          position: 'left',
          items: [
            {
              label: 'Technical resources',
              to: '/resources',
            },
            {
              label: 'Learning resources',
              to: '/resources',
            },
            {
              label: 'Training and Courses',
              to: '/resources',
            },
            {
              label: 'Apache Ignite Book',
              to: '/resources',
            },
            {
              label: 'Mailing Lists, Forums And Discussion Archives',
              to: '/resources',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          to: '/download',
          label: 'Download',
          position: 'right',
          className: 'button-download',
        },
        {
          href: 'https://github.com/apache/ignite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Get Started',
          items: [
            {
              label: 'Download',
              to: '/download',
            },
            {
              label: 'Quick Start',
              href: 'https://ignite.apache.org/docs/latest/',
            },
            {
              label: 'FAQ',
              to: '/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mailing Lists',
              to: '/community#mailing-lists',
            },
            {
              label: 'Meetups',
              to: '/events#meetups',
            },
            {
              label: 'Contribution',
              to: '/community#contributing',
            },
          ],
        },
        {
          title: 'Apache',
          items: [
            {
              label: 'Apache Software Foundation',
              href: 'https://www.apache.org/',
            },
            {
              label: 'License',
              href: 'https://www.apache.org/licenses/',
            },
            {
              label: 'Sponsorship',
              href: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Thanks',
              href: 'https://www.apache.org/foundation/thanks.html',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/apache/ignite',
            },
            {
              label: 'Resources',
              to: '/resources',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'csharp', 'bash', 'sql', 'properties', 'groovy'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
