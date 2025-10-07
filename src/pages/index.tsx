/**
 * Homepage - Apache Ignite
 *
 * Main landing page for the Apache Ignite website.
 * Showcases key features, use cases, and customer stories.
 */

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeTabs from '@site/src/components/features/CodeTabs';
import VideoShowcase from '@site/src/components/features/VideoShowcase';
import Card from '@site/src/components/common/Card';
import Button from '@site/src/components/common/Button';
import styles from './index.module.css';

const features = [
  {
    id: 'multi-tier',
    title: 'Multi-Tier Storage',
    description:
      'Ignite scales up and out across memory and disk. By default, Ignite operates in a pure in-memory mode. But, by toggling a single configuration setting, you can turn a cluster into a database that can grow beyond the cluster memory capacity:',
    examples: [
      {
        language: 'properties',
        label: 'XML',
        code: `<bean class="org.apache.ignite.configuration.IgniteConfiguration">
    <property name="dataStorageConfiguration">
        <bean class="org.apache.ignite.configuration.DataStorageConfiguration">
            <property name="defaultDataRegionConfiguration">
                <bean class="org.apache.ignite.configuration.DataRegionConfiguration">
                    <property name="persistenceEnabled" value="true"/>
                </bean>
            </property>
        </bean>
    </property>
</bean>`,
      },
      {
        language: 'java',
        label: 'Java',
        code: `IgniteConfiguration cfg = new IgniteConfiguration();

DataStorageConfiguration storageCfg = new DataStorageConfiguration();

// Enable Ignite Persistence
storageCfg.getDefaultDataRegionConfiguration().setPersistenceEnabled(true);

// Using the new storage configuration
cfg.setDataStorageConfiguration(storageCfg);`,
      },
      {
        language: 'csharp',
        label: 'C#/.NET',
        code: `var cfg = new IgniteConfiguration
{
    DataStorageConfiguration = new DataStorageConfiguration
    {
        DefaultDataRegionConfiguration = new DataRegionConfiguration
        {
            Name = "Default_Region",
            PersistenceEnabled = true
        }
    }
};`,
      },
    ],
    link: '/architecture/multi-tier-storage',
  },
  {
    id: 'sql',
    title: 'Distributed SQL',
    description:
      'Use Ignite as a traditional SQL database by leveraging JDBC drivers, ODBC drivers, or the native SQL APIs that are available for Java, C#, C++, Python, and other programming languages. Seamlessly join, group, aggregate, and order your distributed in-memory and on-disk data:',
    examples: [
      {
        language: 'sql',
        label: 'SQL',
        code: `SELECT country.name, city.name, MAX(city.population) as max_pop
FROM country JOIN city ON city.countrycode = country.code
WHERE country.code IN ('USA','BRA','ESP','JPN')
GROUP BY country.name, city.name
ORDER BY max_pop DESC LIMIT 3;`,
      },
    ],
    link: '/features/sql',
  },
  {
    id: 'acid',
    title: 'ACID Transactions',
    description:
      'Ignite can operate in a strongly consistent mode that provides full support for distributed ACID transactions. Transact across multiple cluster nodes, caches, tables, and partitions:',
    examples: [
      {
        language: 'java',
        label: 'Java',
        code: `IgniteTransactions transactions = ignite.transactions();

try (Transaction tx = transactions.txStart()) {
    Integer hello = cache.get("Hello");

    if (hello == 1)
        cache.put("Hello", 11);

    cache.put("World", 22);

    tx.commit();
}`,
      },
      {
        language: 'csharp',
        label: 'C#/.NET',
        code: `var transactions = ignite.GetTransactions();

using (var tx = transactions.TxStart()) {
    int hello = cache.Get("Hello");

    if (hello == 1) {
        cache.Put("Hello", 11);
    }

    cache.Put("World", 22);

    tx.Commit();
}`,
      },
    ],
    link: '/features/acid-transactions',
  },
  {
    id: 'compute',
    title: 'Compute APIs',
    description:
      'Execute custom code in a distributed fashion on your cluster. Ignite compute APIs are designed to solve complex computational problems by breaking them down into smaller tasks and distributing them to your cluster nodes:',
    examples: [
      {
        language: 'java',
        label: 'Java',
        code: `IgniteCompute compute = ignite.compute();

// Broadcast to all cluster nodes
compute.broadcast(() -> System.out.println("Hello Node!"));

// Execute on a specific node
ClusterNode node = ignite.cluster().forRemotes().nodes().iterator().next();
compute.run(node, () -> System.out.println("Hello from " + node.id()));`,
      },
      {
        language: 'csharp',
        label: 'C#/.NET',
        code: `var compute = ignite.GetCompute();

// Broadcast to all cluster nodes
compute.Broadcast(new HelloAction());

// Execute on remote nodes
compute.Run(new HelloAction());`,
      },
    ],
    link: '/features/compute-apis',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    description:
      'Use Ignite ML to build, train, and deploy machine learning and deep learning models at scale. Ignite supports popular algorithms such as linear regression, decision trees, clustering, and neural networks:',
    examples: [
      {
        language: 'java',
        label: 'Java',
        code: `// Build a decision tree classifier
DecisionTreeClassificationTrainer trainer =
    new DecisionTreeClassificationTrainer(5, 0);

// Train the model
DecisionTreeModel mdl = trainer.fit(
    ignite,
    dataCache,
    vectorizer
);

// Make predictions
double prediction = mdl.predict(observation);`,
      },
    ],
    link: '/features/machinelearning',
  },
  {
    id: 'streaming',
    title: 'Continuous Queries',
    description:
      'Register continuous queries to get notified for data modifications on the server nodes. This way, you can execute custom logic in response to data changes without having to poll the cluster:',
    examples: [
      {
        language: 'java',
        label: 'Java',
        code: `ContinuousQuery<Integer, String> qry = new ContinuousQuery<>();

qry.setLocalListener(evts -> {
    for (CacheEntryEvent<? extends Integer, ? extends String> e : evts) {
        System.out.println("Updated entry [key=" + e.getKey() +
            ", val=" + e.getValue() + ']');
    }
});

cache.query(qry);`,
      },
      {
        language: 'csharp',
        label: 'C#/.NET',
        code: `var qry = new ContinuousQuery<int, string>(
    new Listener<int, string>());

qry.Listener = new ContinuousQueryListener();

cache.QueryContinuous(qry);`,
      },
    ],
    link: '/features/streaming',
  },
];

const useCases = [
  {
    title: 'Application Acceleration & Scale Out',
    description:
      'Accelerate your existing applications by 100x using Ignite as an in-memory cache or in-memory data grid that is deployed over one or more external databases.',
  },
  {
    title: 'Distributed Database For HTAP Workloads',
    description:
      'Build applications that support transactional and analytical workloads by using Ignite as a database that scales beyond available memory capacity.',
  },
  {
    title: 'Digital Integration Hub',
    description:
      'Create an advanced platform architecture that aggregates multiple back-end systems and databases into a low-latency and shared data store.',
    link: '/use-cases/digital-integration-hub',
    linkText: 'Learn More',
  },
];

const videos = [
  {
    id: '1',
    title: 'Real-time Data Access with Apache Ignite SQL',
    thumbnail: '/img/poweredby/videos/bloomberg.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=3w0H3zLH594',
  },
  {
    id: '2',
    title: 'Improving the CERN Control and Monitoring Platform (C2MON) with Apache Ignite',
    thumbnail: '/img/poweredby/videos/cern.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=BSGFL72u2iY',
  },
  {
    id: '3',
    title: 'How nference.ai leverages Ignite for distributed analytics in the bioinformatics domain',
    thumbnail: '/img/poweredby/videos/012.png',
    videoUrl: 'https://www.youtube.com/watch?v=NUxdoL-K9Ys',
  },
  {
    id: '4',
    title: 'Apache Ignite, Load Reduction and System Scaling for Banking',
    thumbnail: '/img/poweredby/videos/002.png',
    videoUrl: 'https://www.youtube.com/watch?v=Mhtt2QL_qCQ',
  },
];

export default function Home(): JSX.Element {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <Layout
      title="Distributed Database"
      description="Apache Ignite is a leading distributed database management system for high-performance computing with in-memory speed. Learn how to use the Ignite decentralized database system and get started."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={`${styles.heroTitle} h1`}>
            Distributed Database For <br />
            High-Performance Applications <br />
            With In-Memory Speed
          </h1>
          <p className={`${styles.heroSubtitle} h4`}>
            Scale Across Memory And Disk Without Compromise
          </p>
          <div className={styles.heroAction}>
            <Button
              variant="primary"
              size="large"
              href="https://ignite.apache.org/docs/latest/index"
            >
              Start Coding
            </Button>
          </div>
        </div>
      </section>

      {/* Top Cards Section */}
      <section className={styles.topCards}>
        <div className="container">
          <div className={styles.cardsGrid}>
            <Link
              to="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from"
              className={styles.topCard}
            >
              <h2 className={`${styles.topCardTitle} h5`}>
                A top-5 project of the Apache Software Foundation
              </h2>
              <div className={styles.badges}>
                <div className={styles.badge}>
                  <span>Big Data Users Lists</span>
                </div>
                <div className={styles.badge}>
                  <span>Users Lists</span>
                </div>
                <div className={styles.badge}>
                  <span>Dev Lists</span>
                </div>
              </div>
            </Link>

            <Link to="/use-cases/provenusecases" className={styles.topCard}>
              <div className={styles.topCardIcon}>
                <img src="/img/frontpage/b1-planet.svg" alt="" />
              </div>
              <h2 className={`${styles.topCardTitle} h5`}>
                Leading companies around the world select Ignite to speed up and scale
                applications used by millions of people daily
              </h2>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className={styles.features}>
        <div className="container">
          <h2 className={`${styles.featuresTitle} h3`}>
            Use Ignite Core Capabilities To Start Easily <br />
            And Scale Faster
          </h2>

          <div className={styles.featuresWrap}>
            <div className={styles.featuresMenu}>
              <ul>
                {features.map((feature) => (
                  <li key={feature.id}>
                    <button
                      type="button"
                      className={
                        activeFeature === feature.id ? styles.activeFeature : ''
                      }
                      onClick={() => setActiveFeature(feature.id)}
                    >
                      {feature.title}
                    </button>
                  </li>
                ))}
              </ul>
              <Link to="/features" className={styles.viewAll}>
                View all features
              </Link>
            </div>

            <div className={styles.featureContent}>
              <h3 className={`${styles.featureTitle} fz20`}>{currentFeature.title}</h3>
              <p className={styles.featureDescription}>{currentFeature.description}</p>
              <CodeTabs
                examples={currentFeature.examples}
                defaultLanguage={currentFeature.examples[0].language}
              />
              <div className={styles.featureAction}>
                <Button variant="primary" href={currentFeature.link}>
                  Learn More About {currentFeature.title}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Scenarios */}
      <section className={styles.useCases}>
        <div className="container">
          <h2 className={`${styles.useCasesTitle} h3`}>
            New To Ignite? <br />
            Three Primary Usage Scenarios
          </h2>
          <div className={styles.useCasesGrid}>
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                title={useCase.title}
                description={useCase.description}
                link={useCase.link}
                linkText={useCase.linkText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* User Stories */}
      <section className={styles.stories}>
        <div className="container">
          <VideoShowcase title="Ignite User Stories" videos={videos} />
        </div>
      </section>
    </Layout>
  );
}
