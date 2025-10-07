/**
 * FAQ Page - Apache Ignite
 *
 * Frequently Asked Questions about Apache Ignite, covering what it is,
 * its capabilities, and how it fits into various use cases.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Button from '@site/src/components/common/Button';
import styles from './faq.module.css';

interface FAQItem {
  question: string;
  answer: 'Yes' | 'Not fully' | 'Not exactly' | 'Both';
  description: string | JSX.Element;
  learnMoreLink?: string;
  learnMoreText?: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Is Ignite A Distributed Cache?',
    answer: 'Yes',
    description: (
      <p>
        When Ignite native persistence is disabled, Ignite can function as a
        distributed in-memory cache with support distributed ACID transactions,
        SQL queries, high-performance computing APIs, and more.
      </p>
    ),
    learnMoreLink: '/use-cases/in-memory-cache',
    learnMoreText: 'Learn More: In-Memory Cache',
  },
  {
    question: 'Is Ignite A Distributed Database?',
    answer: 'Yes',
    description: (
      <>
        <p>
          Ignite is a distributed database for high-performance computing with
          in-memory speed.
        </p>
        <p>
          Data in Ignite is stored in-memory and/or on-disk, and is either
          partitioned or replicated across a cluster of multiple nodes. This
          provides scalability, performance, and resiliency.
        </p>
      </>
    ),
    learnMoreLink: '/architecture/multi-tier-storage',
    learnMoreText: 'Learn More: Multi-Tier Storage',
  },
  {
    question: 'Is Ignite An In-Memory Database?',
    answer: 'Yes',
    description: (
      <p>
        Ignite multi-tier storage supports both in-memory and disk tiers. You
        can always disable the native persistence and use Ignite as a
        distributed in-memory database, with support for SQL, transactions and
        other APIs.
      </p>
    ),
    learnMoreLink: '/use-cases/in-memory-database',
    learnMoreText: 'Learn More: In-Memory Database',
  },
  {
    question: 'Is Ignite An In-Memory Data Grid?',
    answer: 'Yes',
    description: (
      <p>
        Ignite is a full-featured distributed data grid. As a grid, Ignite can
        automatically integrate with and accelerate any 3rd party databases,
        including any RDBMS or NoSQL stores.
      </p>
    ),
    learnMoreLink: '/use-cases/in-memory-data-grid',
    learnMoreText: 'Learn More: In-Memory Data Grid',
  },
  {
    question: 'Is Ignite An SQL Database?',
    answer: 'Not fully',
    description: (
      <>
        <p>
          Although Ignite supports SQL natively, there are differences in how
          Ignite handles constraints and indexes.
        </p>
        <p>
          Ignite supports primary and secondary indexes, however the uniqueness
          can only be enforced for the primary indexes. Ignite also does not
          support foreign key constraints at the moment.
        </p>
      </>
    ),
    learnMoreLink: '/use-cases/in-memory-database',
    learnMoreText: 'Learn More: SQL Database',
  },
  {
    question: 'Is Ignite A Disk- Or Memory-Only Storage?',
    answer: 'Both',
    description: (
      <>
        <p>
          Native persistence in Ignite can be turned on and off. This allows
          Ignite to store data sets bigger than can fit in the available
          memory.
        </p>
        <p>
          Essentially, smaller operational data sets can be stored in-memory
          only, and larger data sets that do not fit in memory can be stored on
          disk, using memory as a caching layer for better performance.
        </p>
      </>
    ),
    learnMoreLink: '/architecture/native-persistence',
    learnMoreText: 'Learn More: Native Persistence',
  },
  {
    question: 'Is Ignite A NoSQL Database?',
    answer: 'Not exactly',
    description: (
      <>
        <p>
          Just like other NoSQL databases, Ignite is highly available and
          horizontally scalable.
        </p>
        <p>
          However, unlike other NoSQL databases, Ignite supports SQL and ACID
          transactions across multiple cluster nodes.
        </p>
      </>
    ),
  },
  {
    question: 'Is Ignite A Transactional Database?',
    answer: 'Not fully',
    description: (
      <>
        <p>
          ACID Transactions are supported, but only at key-value API level.
          Ignite also supports cross-partition transactions, which means that
          transactions can span keys residing in different partitions on
          different servers.
        </p>
        <p>
          At SQL level, Ignite supports atomic but not yet transactional
          consistency. A SQL transactions implementation is already{' '}
          <a
            href="https://cwiki.apache.org/confluence/display/IGNITE/IEP-3%3A+Transactional+SQL"
            target="_blank"
            rel="noopener noreferrer"
          >
            in the works
          </a>{' '}
          and will be released in Ignite 3.
        </p>
      </>
    ),
    learnMoreLink: '/features/acid-transactions',
    learnMoreText: 'Learn More: ACID Transactions',
  },
  {
    question: 'Is Ignite A Multi-Model Database?',
    answer: 'Yes',
    description: (
      <>
        <p>
          Ignite supports both key-value and SQL for modelling and accessing
          data.
        </p>
        <p>
          In addition, Ignite provides strong processing APIs for computing on
          distributed data.
        </p>
      </>
    ),
  },
  {
    question: 'Is Ignite A Key-Value Store?',
    answer: 'Yes',
    description: (
      <p>
        Ignite provides a feature-rich key-value API that is JCache (JSR-107)
        compliant and supports Java, C++, .NET, and other programming languages.
      </p>
    ),
    learnMoreLink: '/use-cases/key-value-store',
    learnMoreText: 'Learn More: Distributed Key-Value Store',
  },
];

export default function FAQ(): JSX.Element {
  return (
    <Layout
      title="What Is Apache Ignite - FAQ"
      description="What is Apache Ignite? What is in-memory computing? Read the answers on our FAQ page."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className="h1">
              Frequently Asked Questions
              <br />
              About Apache Ignite
            </h1>
            <p className={`${styles.heroDescription} h4 pt-5`}>
              Ignite's rich feature set means it has a myriad of use cases.
              <br />
              Is Ignite a cache, transactional database, key-value store?{' '}
              <br />
              Find the answers below.
            </p>
          </div>
          <img
            className={styles.heroImage}
            src="/img/faq/hero.svg"
            alt="Frequently asked questions"
          />
        </div>
      </section>

      {/* What Is In-Memory Computing Section */}
      <section className={`${styles.about} container`}>
        <p className="capstext">Apache Ignite FAQs</p>
        <div className={`${styles.aboutWrap} pt-5`}>
          <div className={styles.aboutLeft}>
            <h2 className="h4 pb-2">What Is In-Memory Computing?</h2>
            <p>
              In-memory computing is a software and data-processing technique
              that stores data sets in memory across a cluster of interconnected
              nodes. An average speed performance is 10-1000x faster than in
              disk-based systems.
            </p>
            <p>
              In-memory computing software includes a distributed in-memory
              store with APIs and libraries optimized for high-performance data
              processing. Each cluster node (physical or virtual machine)
              contributes its available memory space with CPU cores to the total
              capacity of the cluster.
            </p>
            <p>
              An application interacts with the cluster as a single unit,
              letting the in-memory computing software shield and manage all the
              internals related to inter-node communications, data distribution,
              and queries processing. The cluster scales linearly and
              horizontally to meet the data volume and throughput goals of the
              applications.
            </p>
          </div>
          <aside className={styles.aboutRight}>
            <div className={`${styles.aboutNum} h3`}>10-1000x</div>
            <p className="h5">performance increase</p>
            <div className={`${styles.aboutRightBot} h5`}>
              Unlimited horizontal scalability
            </div>
          </aside>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.features} container`}>
        <h2 className={`${styles.featuresTitle} h4`}>
          Apache Ignite Belongs To The In-Memory
          <br />
          Computing Category:
        </h2>
        <div className={`${styles.featuresWrap} pt-5`}>
          <article className={`${styles.feature} pt-1`}>
            <div className={styles.featureIconWrap}>
              <img src="/img/faq/icon-faq1.svg" alt="" />
            </div>
            <p className={`${styles.featureText} pt-2`}>
              Build real-time and event-driven solutions that process data with
              in-memory speed
            </p>
          </article>
          <article className={`${styles.feature} pt-1`}>
            <div className={styles.featureIconWrap}>
              <img src="/img/faq/icon-faq2.svg" alt="" />
            </div>
            <p className={`${styles.featureText} pt-2`}>
              Scale up and out across available memory and disk capacity
            </p>
          </article>
          <article className={`${styles.feature} pt-1`}>
            <div className={styles.featureIconWrap}>
              <img src="/img/faq/icon-faq3.svg" alt="" />
            </div>
            <p className={`${styles.featureText} pt-2`}>
              Take advantage of built-in SQL, high-performance computing and
              real-time processing APIs
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Grid Section */}
      <section className={`${styles.faqGrid} container`}>
        {faqItems.map((item, index) => (
          <article key={index} className={styles.faqCard}>
            <h3 className={`${styles.faqCardTitle} h5`}>{item.question}</h3>
            <div className={`${styles.faqCardAnswer} h5 pt-3`}>
              {item.answer}
            </div>
            <div className={`${styles.faqCardText} pt-3`}>
              {item.description}
            </div>
            {item.learnMoreLink && (
              <div className={styles.faqCardBottom}>
                <Button
                  variant="shadow"
                  size="medium"
                  href={item.learnMoreLink}
                >
                  {item.learnMoreText || 'Learn More'}
                </Button>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <p className={`${styles.ctaTitle} h3`}>
              <strong>Ready To Start?</strong>
            </p>
            <p className="h5 pt-2">
              Discover our quick start guides and build your first
              <br />
              application in 5-10 minutes
            </p>
          </div>
          <div className={styles.ctaAction}>
            <Button
              variant="primary"
              size="large"
              href="https://ignite.apache.org/docs/latest/"
              target="_blank"
            >
              Discover Quick Start Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
