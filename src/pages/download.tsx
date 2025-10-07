/**
 * Download Page - Apache Ignite
 *
 * Complete download page for Apache Ignite releases including:
 * - Source and Binary releases for Ignite 3 and Ignite 2
 * - Slim binary releases (Ignite 2 only)
 * - Docker and Cloud images
 * - Git repository information
 * - Extensions (source and binary)
 * - Third-party binaries
 * - Verification instructions
 */

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import styles from './download.module.css';

interface DownloadRelease {
  version: string;
  date: string;
  guide?: string;
  javadoc?: string;
  scaladoc?: string;
  notes?: string;
  sourcelink: string;
}

interface ExtensionRelease {
  name: string;
  version: string;
  date: string;
  guide?: string;
  notes?: string;
  sourcelink: string;
}

interface DockerImage {
  name: string;
  date: string;
  guide: string;
  links: { url: string }[];
}

const ignite3SourceReleases: DownloadRelease[] = [
  {
    version: '3.0.0 (latest)',
    date: '2025-02-05',
    guide: '/docs/ignite3/3.0.0',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourcelink: 'https://archive.apache.org/dist/ignite/3.0.0/apache-ignite-3.0.0-src.zip',
  },
];

const ignite2SourceReleases: DownloadRelease[] = [
  {
    version: '2.17.0 (latest)',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourcelink: 'https://www.apache.org/dyn/closer.cgi?path=ignite/2.17.0/apache-ignite-2.17.0-src.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-src.zip',
  },
  {
    version: '2.15.0',
    date: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-src.zip',
  },
  {
    version: '2.14.0',
    date: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-src.zip',
  },
  {
    version: '2.13.0',
    date: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-src.zip',
  },
];

const ignite3BinaryReleases: DownloadRelease[] = [
  {
    version: '3.0.0 (latest)',
    date: '2025-02-05',
    guide: 'https://ignite.apache.org/docs/ignite3/3.0.0',
    javadoc: 'https://ignite.apache.org/releases/ignite3/3.0.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite3/3.0.0/RELEASE_NOTES.txt',
    sourcelink: 'https://dlcdn.apache.org/ignite/3.0.0/ignite3-3.0.0.zip',
  },
];

const ignite2BinaryReleases: DownloadRelease[] = [
  {
    version: '2.17.0 (latest)',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourcelink: 'https://www.apache.org/dyn/closer.cgi?path=ignite/2.17.0/apache-ignite-2.17.0-bin.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-2.16.0-bin.zip',
  },
  {
    version: '2.15.0',
    date: '2023-05-02',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-2.15.0-bin.zip',
  },
  {
    version: '2.14.0',
    date: '2022-10-07',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.14.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.14.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.14.0/apache-ignite-2.14.0-bin.zip',
  },
  {
    version: '2.13.0',
    date: '2022-04-26',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.13.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.13.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.13.0/apache-ignite-2.13.0-bin.zip',
  },
];

const slimBinaryReleases: DownloadRelease[] = [
  {
    version: '2.17.0 (latest)',
    date: '2025-02-13',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.17.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.17.0/release_notes.html',
    sourcelink: 'https://www.apache.org/dyn/closer.cgi?path=ignite/2.17.0/apache-ignite-slim-2.17.0-bin.zip',
  },
  {
    version: '2.16.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.16.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.16.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.16.0/apache-ignite-slim-2.16.0-bin.zip',
  },
  {
    version: '2.15.0',
    date: '2023-12-25',
    guide: 'https://ignite.apache.org/docs/latest',
    javadoc: 'https://ignite.apache.org/releases/ignite2/2.15.0/javadoc/',
    notes: 'https://ignite.apache.org/releases/ignite2/2.15.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/2.15.0/apache-ignite-slim-2.15.0-bin.zip',
  },
];

const dockerImages: DockerImage[] = [
  {
    name: 'Docker Image',
    date: '2020-03-03',
    guide: 'https://ignite.apache.org/docs/latest/installation/installing-using-docker',
    links: [{ url: 'https://hub.docker.com/r/apacheignite/ignite/tags/' }],
  },
  {
    name: 'Amazon Image',
    date: '2018-07-16',
    guide: 'https://apacheignite.readme.io/docs/aws-deployment',
    links: [
      { url: 'https://console.aws.amazon.com/ec2/home?region=us-west-1#launchAmi=ami-9cdbb3fc' },
      { url: 'https://console.aws.amazon.com/ec2/home?region=us-east-1#launchAmi=ami-ce82caa4' },
      { url: 'https://console.aws.amazon.com/ec2/home?region=eu-central-1#launchAmi=ami-191b0775' },
    ],
  },
];

const extensionSourceReleases: ExtensionRelease[] = [
  {
    name: 'ignite-aws-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-src.zip',
  },
  {
    name: 'ignite-azure-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-src.zip',
  },
  {
    name: 'ignite-gce-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-src.zip',
  },
  {
    name: 'ignite-spring-tx-ext',
    version: '1.0.0',
    date: '2021-11-02',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-tx.html',
    notes: '/releases/ext/spring-tx-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-tx-ext/1.0.0/ignite-spring-tx-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-cache-ext',
    version: '1.0.0',
    date: '2021-11-02',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-caching.html',
    notes: '/releases/ext/spring-cache-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-cache-ext/1.0.0/ignite-spring-cache-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-spring-data-ext',
    version: '2.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-data.html',
    notes: '/releases/ext/spring-data-ext-2.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-data-ext/2.0.0/ignite-spring-data-ext-src.zip',
  },
  {
    name: 'ignite-session-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/spring/spring-data.html',
    notes: '/releases/ext/spring-session-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-spring-session-ext/1.0.0/ignite-spring-session-ext-src.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    version: '1.0.0',
    date: '2021-07-07',
    guide: '/docs/latest/extensions-and-integrations/performance-statistics.html',
    notes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-src.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    notes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-src.zip',
  },
];

const extensionBinaryReleases: ExtensionRelease[] = [
  {
    name: 'ignite-aws-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/aws-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-aws-ext/1.0.0/ignite-aws-ext-bin.zip',
  },
  {
    name: 'ignite-azure-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/azure-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-azure-ext/1.0.0/ignite-azure-ext-bin.zip',
  },
  {
    name: 'ignite-gce-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/clustering/discovery-in-the-cloud.html',
    notes: '/releases/ext/gce-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-gce-ext/1.0.0/ignite-gce-ext-bin.zip',
  },
  {
    name: 'ignite-performance-statistics-ext',
    version: '1.0.0',
    date: '2021-07-07',
    guide: '/docs/latest/extensions-and-integrations/performance-statistics.html',
    notes: '/releases/ext/performance-statistics-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-performance-statistics-ext/1.0.0/ignite-performance-statistics-ext-1.0.0-bin.zip',
  },
  {
    name: 'ignite-zookeeper-ip-finder-ext',
    version: '1.0.0',
    date: '2022-05-17',
    guide: '/docs/latest/extensions-and-integrations/zookeeper-ip-finder-ext.html',
    notes: '/releases/ext/zookeeper-ip-finder-ext-1.0.0/release_notes.html',
    sourcelink: 'https://archive.apache.org/dist/ignite/ignite-extensions/ignite-zookeeper-ip-finder-ext/1.0.0/zookeeper-ip-finder-ext-bin.zip',
  },
];

const springBootExtensionsCode = `<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>
<dependency>
    <groupId>org.apache.ignite</groupId>
    <artifactId>ignite-spring-boot-thin-client-autoconfigure-ext</artifactId>
    <version>1.0.0</version>
</dependency>`;

function DownloadRow({ release }: { release: DownloadRelease }): JSX.Element {
  const fileName = release.sourcelink.split('/').pop() || '';

  return (
    <tr>
      <td>{release.version}</td>
      <td>
        {release.guide && (
          <a href={release.guide} target="_blank" rel="noopener noreferrer">
            guide
          </a>
        )}
        {release.javadoc && (
          <>
            {release.guide && ' '}
            <a href={release.javadoc} target="_blank" rel="noopener noreferrer">
              javadoc
            </a>
          </>
        )}
        {release.scaladoc && (
          <>
            {' '}
            <a href={release.scaladoc} target="_blank" rel="noopener noreferrer">
              scaladoc
            </a>
          </>
        )}
      </td>
      <td>
        {release.notes && (
          <a href={release.notes} target="_blank" rel="noopener noreferrer">
            release notes
          </a>
        )}
      </td>
      <td>{release.date}</td>
      <td className={styles.linksCell}>
        <a href={release.sourcelink} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
          {fileName}
        </a>
        {' ('}
        <a href={`${release.sourcelink}.asc`} target="_blank" rel="noopener noreferrer">
          pgp
        </a>
        <a href={`${release.sourcelink}.sha512`} target="_blank" rel="noopener noreferrer">
          sha512
        </a>
        {')'}
      </td>
    </tr>
  );
}

function ExtensionRow({ extension }: { extension: ExtensionRelease }): JSX.Element {
  const fileName = extension.sourcelink.split('/').pop() || '';

  return (
    <tr>
      <td>{extension.name}</td>
      <td>{extension.version}</td>
      <td>
        {extension.guide && (
          <a href={extension.guide} target="_blank" rel="noopener noreferrer">
            guide
          </a>
        )}
      </td>
      <td>
        {extension.notes && (
          <a href={extension.notes} target="_blank" rel="noopener noreferrer">
            release notes
          </a>
        )}
      </td>
      <td>{extension.date}</td>
      <td className={styles.linksCell}>
        <a href={extension.sourcelink} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
          {fileName}
        </a>
        {' ('}
        <a href={`${extension.sourcelink}.asc`} target="_blank" rel="noopener noreferrer">
          pgp
        </a>
        <a href={`${extension.sourcelink}.sha512`} target="_blank" rel="noopener noreferrer">
          sha512
        </a>
        {')'}
      </td>
    </tr>
  );
}

function DockerRow({ docker }: { docker: DockerImage }): JSX.Element {
  return (
    <tr>
      <td>{docker.name}</td>
      <td>
        <a href={docker.guide} target="_blank" rel="noopener noreferrer">
          guide
        </a>
      </td>
      <td>{docker.date}</td>
      <td>
        {docker.links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
              {link.url}
            </a>
            {index < docker.links.length - 1 && <br />}
          </React.Fragment>
        ))}
      </td>
    </tr>
  );
}

export default function Download(): JSX.Element {
  const [sourceTab, setSourceTab] = useState<'ignite3' | 'ignite2'>('ignite3');
  const [binaryTab, setBinaryTab] = useState<'ignite3' | 'ignite2'>('ignite3');
  const [activeNav, setActiveNav] = useState<string>('source');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['source', 'binary', 'docker', 'git', 'extensions', 'party3rd'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Layout
      title="Download - Apache Ignite"
      description="Download Apache Ignite here and install in your environment. Select from one of the available options and download."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <p className={styles.heroLabel}>Apache Ignite</p>
              <h1 className={styles.heroTitle}>Downloads</h1>
            </div>
            <img
              src="/img/downloads/hero.svg"
              alt="Downloads"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className={styles.downloadTitle}>
        <div className="container">
          <p>
            Download Apache Ignite and install in your environment.
            <br />
            Select from one of the available options.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className={styles.navBlock}>
        <div className="container">
          <ul className={styles.navList}>
            <li>
              <button
                className={activeNav === 'source' ? styles.navActive : ''}
                onClick={() => scrollToSection('source')}
              >
                Source Releases
              </button>
            </li>
            <li>
              <button
                className={activeNav === 'binary' ? styles.navActive : ''}
                onClick={() => scrollToSection('binary')}
              >
                Binary Releases
              </button>
            </li>
            <li>
              <button
                className={activeNav === 'docker' ? styles.navActive : ''}
                onClick={() => scrollToSection('docker')}
              >
                Docker and <br />
                Cloud Images
              </button>
            </li>
            <li>
              <button
                className={activeNav === 'git' ? styles.navActive : ''}
                onClick={() => scrollToSection('git')}
              >
                Git Repository
              </button>
            </li>
            <li>
              <button
                className={activeNav === 'extensions' ? styles.navActive : ''}
                onClick={() => scrollToSection('extensions')}
              >
                Extensions
              </button>
            </li>
            <li>
              <button
                className={activeNav === 'party3rd' ? styles.navActive : ''}
                onClick={() => scrollToSection('party3rd')}
              >
                3rd Party Binaries
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Source Releases */}
      <section id="source" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>SOURCE RELEASES</h2>

          <div className={styles.tableWrapper}>
            <div className={styles.tabs}>
              <div className={styles.tabButtons}>
                <button
                  className={sourceTab === 'ignite3' ? styles.tabActive : ''}
                  onClick={() => setSourceTab('ignite3')}
                >
                  Ignite 3
                </button>
                <button
                  className={sourceTab === 'ignite2' ? styles.tabActive : ''}
                  onClick={() => setSourceTab('ignite2')}
                >
                  Ignite 2
                </button>
              </div>

              <div className={styles.tabContent}>
                {sourceTab === 'ignite3' && (
                  <div className={styles.tableScroller}>
                    <table className={styles.downloadTable}>
                      <thead>
                        <tr>
                          <th>Version</th>
                          <th>Docs</th>
                          <th>Release Notes</th>
                          <th>Date</th>
                          <th>Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ignite3SourceReleases.map((release, idx) => (
                          <DownloadRow key={idx} release={release} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {sourceTab === 'ignite2' && (
                  <div className={styles.tableScroller}>
                    <table className={styles.downloadTable}>
                      <thead>
                        <tr>
                          <th>Version</th>
                          <th>Docs</th>
                          <th>Release Notes</th>
                          <th>Date</th>
                          <th>Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ignite2SourceReleases.map((release, idx) => (
                          <DownloadRow key={idx} release={release} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={styles.bottomNote}>
            <p>
              If you are looking for an earlier version of Apache Ignite, please find it in the{' '}
              <a href="https://archive.apache.org/dist/ignite" target="_blank" rel="noopener noreferrer">
                archive
              </a>
              . If you encounter a problem with the selected mirror, please choose another one. If
              primary mirrors are not reachable, switch to backup servers added to the end of the
              list.
            </p>
          </div>
        </div>
      </section>

      {/* Binary Releases */}
      <section id="binary" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>BINARY RELEASES</h2>

          <div className={styles.binaryHeader}>
            <p>
              Binary release packages are provided for your convenience and not considered as
              primary release artifacts of the ASF. It's recommended to verify a release
              downloadable, following{' '}
              <a href="#verification">this guidelines.</a> For more information about Apache release
              policy see{' '}
              <a href="http://www.apache.org/dev/release.html#what" target="_blank" rel="noopener noreferrer">
                What is a Release?
              </a>
            </p>
          </div>

          <div className={styles.tableWrapper}>
            <div className={styles.tabs}>
              <div className={styles.tabButtons}>
                <button
                  className={binaryTab === 'ignite3' ? styles.tabActive : ''}
                  onClick={() => setBinaryTab('ignite3')}
                >
                  Ignite 3
                </button>
                <button
                  className={binaryTab === 'ignite2' ? styles.tabActive : ''}
                  onClick={() => setBinaryTab('ignite2')}
                >
                  Ignite 2
                </button>
              </div>

              <div className={styles.tabContent}>
                {binaryTab === 'ignite3' && (
                  <div className={styles.tableScroller}>
                    <table className={styles.downloadTable}>
                      <thead>
                        <tr>
                          <th>Version</th>
                          <th>Docs</th>
                          <th>Release Notes</th>
                          <th>Date</th>
                          <th>Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ignite3BinaryReleases.map((release, idx) => (
                          <DownloadRow key={idx} release={release} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {binaryTab === 'ignite2' && (
                  <div className={styles.tableScroller}>
                    <table className={styles.downloadTable}>
                      <thead>
                        <tr>
                          <th>Version</th>
                          <th>Docs</th>
                          <th>Release Notes</th>
                          <th>Date</th>
                          <th>Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ignite2BinaryReleases.map((release, idx) => (
                          <DownloadRow key={idx} release={release} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>

          <p className={styles.archiveNote}>
            If you are looking for previous release versions of Apache Ignite, please have a look in
            the{' '}
            <a href="https://archive.apache.org/dist/ignite" target="_blank" rel="noopener noreferrer">
              archive
            </a>
            .
          </p>
        </div>
      </section>

      {/* Slim Binary Releases */}
      <section className={styles.sectionSlim}>
        <div className="container">
          <h3 className={styles.subsectionTitle}>Slim binary releases</h3>

          <div className={styles.tableWrapper}>
            <div className={styles.tableScroller}>
              <table className={styles.downloadTable}>
                <thead>
                  <tr>
                    <th>Version</th>
                    <th>Docs</th>
                    <th>Release Notes</th>
                    <th>Date</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {slimBinaryReleases.map((release, idx) => (
                    <DownloadRow key={idx} release={release} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Docker and Cloud Images */}
      <section id="docker" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>DOCKER AND CLOUD IMAGES</h2>

          <div className={styles.tableWrapper}>
            <div className={styles.tableScroller}>
              <table className={`${styles.downloadTable} ${styles.dockerTable}`}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Docs</th>
                    <th>Date</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {dockerImages.map((docker, idx) => (
                    <DockerRow key={idx} docker={docker} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verification" className={styles.verifySection}>
        <div className="container">
          <h3 className={styles.subsectionTitle}>How to verify</h3>

          <div className={styles.verifyContent}>
            <div className={styles.verifyLeft}>
              <p>
                The PGP signatures can be verified using PGP or GPG. First download the{' '}
                <a href="https://downloads.apache.org/ignite/KEYS" target="_blank" rel="noopener noreferrer">
                  Apache Ignite KEYS
                </a>{' '}
                file as well as the .asc signature files for the desired release version. Make sure
                you get these files from the main distribution directory, rather than from a mirror.
                Then verify the signatures.
              </p>
            </div>
            <div className={styles.verifyRight}>
              <p>
                Please check{' '}
                <a
                  href="https://www.apache.org/info/verification.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to Verify Downloaded Files
                </a>{' '}
                for more information on how and why you should verify Apache Ignite releases.
              </p>
              <div className={styles.verifyCode}>
                <CodeBlock language="bash">
                  {`% gpg --import KEYS
% gpg --verify apache-ignite-2.9.1-src.zip.asc apache-ignite-2.9.1-src.zip`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Git Repository */}
      <section id="git" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>GIT REPOSITORY</h2>

          <CodeBlock language="bash">
            $ git clone https://gitbox.apache.org/repos/asf/ignite
          </CodeBlock>
        </div>
      </section>

      {/* Extensions */}
      <section id="extensions" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>EXTENSIONS</h2>

          <h3 className={styles.subsectionTitle}>Source Releases</h3>
          <div className={styles.tableWrapper}>
            <div className={styles.tableScroller}>
              <table className={styles.downloadTable}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Version</th>
                    <th>Docs</th>
                    <th>Release Notes</th>
                    <th>Date</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {extensionSourceReleases.map((ext, idx) => (
                    <ExtensionRow key={idx} extension={ext} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <h3 className={`${styles.subsectionTitle} ${styles.extensionBinaryTitle}`}>
            Binary Releases
          </h3>
          <p className={styles.extensionNote}>
            Binary release packages are provided for your convenience and not considered as primary
            release artifacts of the ASF. It's recommended to verify a release downloadable,
            following <a href="#verification">this guidelines</a>. For more information about Apache
            release policy see{' '}
            <a
              href="https://www.apache.org/legal/release-policy.html#what"
              target="_blank"
              rel="noopener noreferrer"
            >
              What is a Release?
            </a>
          </p>

          <div className={styles.tableWrapper}>
            <div className={styles.tableScroller}>
              <table className={styles.downloadTable}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Version</th>
                    <th>Docs</th>
                    <th>Release Notes</th>
                    <th>Date</th>
                    <th>Source</th>
                  </tr>
                </thead>
                <tbody>
                  {extensionBinaryReleases.map((ext, idx) => (
                    <ExtensionRow key={idx} extension={ext} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className={styles.springBootNote}>Spring Boot extensions:</p>
          <CodeBlock language="xml">{springBootExtensionsCode}</CodeBlock>
        </div>
      </section>

      {/* 3rd Party Binaries */}
      <section id="party3rd" className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>3RD PARTY BINARIES</h2>

          <div className={styles.partyContent}>
            <div className={styles.partyLeft}>
              <p>
                This is a list of 3rd party binary packages based on Apache Ignite. The Apache
                Ignite project does not endorse or maintain any 3rd party binary packages.
              </p>
              <p>
                <a
                  href="https://www.gridgain.com/resources/download#communityEdition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GridGain Community Edition
                </a>{' '}
                is a binary build of Apache Ignite created by GridGain, which includes optional LGPL
                dependencies, such as Hibernate L2 cache integration and Geospatial Indexing, as
                well as bug fixes and features which may be included into the future official Apache
                Ignite releases.
              </p>
            </div>
            <div className={styles.partyRight}>
              <p>
                GridGain also provides his own{' '}
                <a
                  href="http://www.gridgainsystems.com/nexus/content/repositories/external"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GridGain Maven Repository
                </a>{' '}
                containing Apache Ignite LGPL artifacts such as ignite-hibernate.
              </p>
              <p>
                Please note that artifacts located at GridGain Maven Repository provided for
                convenience and are NOT official Apache Ignite artifacts.
              </p>
              <p>
                If you would like to provide your own edition of Apache Ignite here, please send
                email to <a href="mailto:dev@ignite.apache.org">Ignite dev list.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
