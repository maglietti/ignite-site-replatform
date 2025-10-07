/**
 * Use Cases Overview - Apache Ignite
 *
 * Landing page showcasing all Apache Ignite use cases organized by category:
 * - Application Acceleration and Scale Out
 * - Distributed Database for HTAP Workloads
 * - Other Use Cases
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Card from '@site/src/components/common/Card';
import styles from './index.module.css';

interface UseCaseCardData {
  title: string;
  description: string;
  link: string;
  longText?: boolean;
}

const accelerationUseCases: UseCaseCardData[] = [
  {
    title: 'In-Memory Cache',
    description:
      'Cache data with extra capabilities: query with SQL and update atomically by using ACID transactions.',
    link: '/use-cases/in-memory-cache',
  },
  {
    title: 'In-Memory Data Grid',
    description:
      'Use an advanced read-through / write-through cache that is deployed on top of one or several databases.',
    link: '/use-cases/in-memory-data-grid',
  },
  {
    title: 'In-Memory Database',
    description:
      'Use Apache Ignite as an ultra-fast and horizontally scalable in-memory database.',
    link: '/use-cases/in-memory-database',
  },
  {
    title: 'High-Performance Computing',
    description:
      'Execute kilobyte-size custom code over petabytes of data. Turn your Ignite database into a distributed supercomputer for low-latency calculations, complex analytics, and machine learning.',
    link: '/use-cases/high-performance-computing',
    longText: true,
  },
];

const otherUseCases: UseCaseCardData[] = [
  {
    title: 'Key-Value Store',
    description:
      'Access the cluster with key-value requests or take advantage of APIs available exclusively in Ignite.',
    link: '/use-cases/key-value-store',
  },
  {
    title: 'Apache Spark Performance Acceleration',
    description:
      'Accelerate the performance of Apache Spark® by keeping data in a shared Apache Ignite® in-memory cluster.',
    link: '/use-cases/spark-acceleration',
  },
  {
    title: 'Apache Hadoop Performance Acceleration',
    description:
      'Get real-time analytics across Apache™ Hadoop® operational and historical data silos.',
    link: '/use-cases/hadoop-acceleration',
  },
];

export default function UseCases(): JSX.Element {
  return (
    <Layout
      title="Use Cases"
      description="The most common use-cases for Apache Ignite. Learn more how companies deploy Apache Ignite in production."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroPre}>Apache Ignite</div>
              <h1 className={`h1 ${styles.heroTitle}`}>Use Cases</h1>
              <div className={`${styles.heroDescription} h5`}>
                With plenty of capabilities, Apache Ignite finds its route in
                many use-cases, ranging from a basic distributed cache,
                distributed database for hybrid transactional/analytical
                processing, to a sophisticated digital integration hub.
              </div>
            </div>
            <img
              className={styles.heroImage}
              src="/img/usecases/head-bg.svg"
              alt="Apache Ignite Use Cases"
            />
          </div>
        </div>
      </section>

      {/* Application Acceleration Section */}
      <section className={styles.section}>
        <div className="container">
          <p className={styles.sectionLabel}>Widespread use-cases</p>
          <header className={`${styles.sectionHeader} flexi`}>
            <h2 className={`h4 ${styles.sectionHeaderLeft}`}>
              Application Acceleration
              <br />
              And Scale Out
            </h2>
            <div className={styles.sectionHeaderRight}>
              <p>
                Accelerate your existing applications by 100x or more by using
                in-memory computing. There are several deployment options.
              </p>
            </div>
          </header>
          <div className={styles.cardGrid}>
            {accelerationUseCases.map((useCase) => (
              <div
                key={useCase.title}
                className={`${styles.cardWrapper} ${
                  useCase.longText ? styles.cardWrapperLong : ''
                }`}
              >
                <Card
                  title={useCase.title}
                  description={useCase.description}
                  link={useCase.link}
                  linkText="Learn More"
                  className={styles.useCaseCard}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HTAP Database Section */}
      <section className={styles.htapSection}>
        <div className="container">
          <div className={`${styles.sectionHeader} ${styles.htapBlock} flexi`}>
            <h2 className={`h4 ${styles.sectionHeaderLeft}`}>
              Distributed Database For HTAP Workloads
            </h2>
            <div className={styles.sectionHeaderRight}>
              <p>
                Build modern applications that support transactional and
                analytical workloads by using Ignite as a database that scales
                beyond available memory capacity.
              </p>
              <p>
                Ignite allocates memory for your hot data and goes to disk
                whenever applications query cold records.
              </p>
            </div>
          </div>
          <div className={`${styles.sectionHeader} ${styles.htapBlock} flexi`}>
            <h2 className={`h4 ${styles.sectionHeaderLeft}`}>
              Digital Integration Hub
            </h2>
            <div className={styles.sectionHeaderRight}>
              <p>
                An advanced platform architecture that aggregates multiple
                back-end systems and databases into a low-latency and shared
                data store.
              </p>
              <Link
                to="/use-cases/digital-integration-hub"
                className={`button button--shadow ${styles.htapButton}`}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Use Cases Section */}
      <section className={styles.otherSection}>
        <div className="container">
          <p className={styles.sectionLabel}>Other use-cases</p>
          <div className={styles.cardGrid}>
            {otherUseCases.map((useCase) => (
              <div key={useCase.title} className={styles.cardWrapper}>
                <Card
                  title={useCase.title}
                  description={useCase.description}
                  link={useCase.link}
                  linkText="Learn More"
                  className={styles.useCaseCard}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
