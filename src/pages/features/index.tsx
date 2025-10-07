import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const storageFeatures: FeatureCard[] = [
  {
    icon: '/img/features/01-multi-tier-storage.svg',
    title: 'Multi-Tier Storage',
    description: 'Chose a storage mode for your performance and capacity needs: in-memory, in-memory + external database, or in-memory + native persistence.',
    link: '/architecture/multi-tier-storage'
  },
  {
    icon: '/img/features/02-native-persistence.svg',
    title: 'Native Persistence',
    description: 'Turn Ignite into a database with capacity and durability characteristics of traditional disk-based databases.',
    link: '/architecture/native-persistence'
  }
];

const developerFeatures: FeatureCard[] = [
  {
    icon: '/img/features/03-distributed-SQL.svg',
    title: 'Distributed SQL',
    description: 'Interact with Ignite as with a regular SQL database using JDBC, ODBC drivers, or native SQL APIs.',
    link: '/features/sql'
  },
  {
    icon: '/img/features/04-ACID-transactions.svg',
    title: 'ACID Transactions',
    description: 'Operate in a strongly consistent mode with full support for distributed ACID transactions',
    link: '/features/acid-transactions'
  },
  {
    icon: '/img/features/05-key-value-APIs.svg',
    title: 'Key Value APIs',
    description: 'Use simple key-value requests for fast data look-ups and updates.',
    link: '/features/key-value-apis'
  }
];

const computeFeatures: FeatureCard[] = [
  {
    icon: '/img/features/06-compute-APIs.svg',
    title: 'Compute APIs',
    description: 'Execute data-intensive and compute-intensive logic over your distributed cluster.',
    link: '/features/compute-apis'
  },
  {
    icon: '/img/features/07-machine-learning.svg',
    title: 'Machine Learning',
    description: 'Use built-in algorithms to train and execute machine and deep learning models at scale.',
    link: '/features/machine-learning'
  },
  {
    icon: '/img/features/08-services.svg',
    title: 'Services',
    description: 'Create and deploy custom micro-service on your cluster nodes.',
    link: '/features/service-apis'
  }
];

const streamingFeatures: FeatureCard[] = [
  {
    icon: '/img/features/09-streaming.svg',
    title: 'Streaming',
    description: 'Stream and process your data in a scalable and fault-tolerant fashion.',
    link: '/features/streaming'
  },
  {
    icon: '/img/features/10-continuous-queries.svg',
    title: 'Continuous Queries',
    description: 'Execute your custom logic in response to data changes happening across the cluster.',
    link: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries'
  },
  {
    icon: '/img/features/11-messaging.svg',
    title: 'Messaging',
    description: 'Exchange messages across the publisher-subscriber pattern.',
    link: 'https://ignite.apache.org/docs/latest/messaging'
  }
];

const additionalLinks = [
  { label: 'Data Structures', link: 'https://ignite.apache.org/docs/latest/data-structures/queue-and-set' },
  { label: 'Clustering', link: 'https://ignite.apache.org/docs/latest/clustering/clustering' },
  { label: 'Other Integrations', link: 'https://ignite.apache.org/docs/latest/extensions-and-integrations/spring/spring-boot' },
  { label: 'Multi-Language Support', link: '/features/multi-language' }
];

function FeatureCard({ icon, title, description, link }: FeatureCard) {
  const isExternal = link.startsWith('http');

  return (
    <div className={styles.featureCard}>
      <div className={styles.cardIcon}>
        <img src={icon} alt="" />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardBottom}>
        {isExternal ? (
          <a href={link} className="button button--shadow" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        ) : (
          <Link to={link} className="button button--shadow">
            Learn More
          </Link>
        )}
      </div>
    </div>
  );
}

function FeatureSection({ title, description, features }: { title: string; description: string; features: FeatureCard[] }) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionDescription}>{description}</p>
        </header>
        <div className={styles.cardsGrid}>
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FeaturesPage(): JSX.Element {
  return (
    <Layout
      title="Product Features - Apache Ignite Components"
      description="Apache Ignite set of components. Learn more about Apache Ignite product features on our website.">

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <p className={styles.heroPre}>Apache Ignite</p>
              <h1 className={styles.heroTitle}>Features</h1>
              <p className={styles.heroDescription}>
                Scale across memory and disk with no compromises.<br />
                Process your data with SQL, compute, real-time streaming and other APIs.
              </p>
            </div>
            <img
              src="/img/features/hero-bg.svg"
              alt="Apache Ignite Features"
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.intro}>
        <div className="container">
          <h2 className={styles.introTitle}>
            Apache Ignite comprises the following<br />set of components
          </h2>
        </div>
      </section>

      {/* Storage Features */}
      <FeatureSection
        title="Distributed Multi-Tiered Storage"
        description="State-of-the-art storage engine that performs at in-memory speed and stores data durably at unlimited scale"
        features={storageFeatures}
      />

      {/* Developer APIs */}
      <FeatureSection
        title="Essential Developer APIs"
        description="Start with Ignite seamlessly using the APIs you are already experienced with"
        features={developerFeatures}
      />

      {/* Compute APIs */}
      <FeatureSection
        title="High-Performance Computing APIs"
        description="Execute kilobyte-size custom code over petabytes of data"
        features={computeFeatures}
      />

      {/* Streaming APIs */}
      <FeatureSection
        title="Real-Time Streaming APIs"
        description="Implement event-driven architectures seamlessly with the following Ignite product features:"
        features={streamingFeatures}
      />

      {/* Additional Resources */}
      <section className={styles.additional}>
        <div className="container">
          <div className={styles.additionalContent}>
            <h2 className={styles.additionalTitle}>Looking For Something Else?</h2>
            <p className={styles.additionalDescription}>
              Explore our technical documentation to discover Ignite's other features
            </p>
            <ul className={styles.additionalLinks}>
              {additionalLinks.map((item, idx) => {
                const isExternal = item.link.startsWith('http');
                return (
                  <li key={idx}>
                    {isExternal ? (
                      <a href={item.link} className="arrowlink" target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </a>
                    ) : (
                      <Link to={item.link} className="arrowlink">
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
