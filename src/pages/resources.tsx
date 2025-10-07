/**
 * Resources Page - Apache Ignite
 *
 * Comprehensive hub for Apache Ignite resources including:
 * - Technical resources (documentation, wiki, Git repositories)
 * - Learning resources (videos, webinar recordings)
 * - Training and courses
 * - Apache Ignite Book
 * - Mailing lists and forums
 */

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './resources.module.css';

interface VideoResource {
  url: string;
  title: string;
  description: string;
  thumbnail?: string;
}

const videos: VideoResource[] = [
  {
    url: 'https://www.youtube.com/watch?v=UeQKuAQaMNU',
    title: 'In-Memory Computing Essentials',
    description: 'In this video, we introduce the fundamental capabilities of in-memory computing platforms, such as high-speed performance and scalability.',
  },
  {
    url: 'https://www.youtube.com/watch?v=hrnrsIkCnI0',
    title: 'Distributed Computing With Apache Ignite',
    description: 'In this video, we demonstrate how to design and execute distributed computations, and consider all the pros and cons.',
  },
  {
    url: 'https://www.youtube.com/watch?v=TCsl-W0tsEE',
    title: 'Consistency And Transactions Of Apache Ignite',
    description: 'In this webinar, we provide a deep understanding of Apache Ignite\'s support for ACID transactions and data consistency.',
  },
  {
    url: 'https://www.youtube.com/watch?v=eYV-tNLzIts',
    title: 'Apache Ignite SQL Essentials',
    description: 'Learn how to apply a classic SQL database experience while enabling in-memory speeds at petabyte scale for a variety of workloads.',
  },
  {
    url: 'https://www.youtube.com/watch?v=38YgdAOs038',
    title: 'Deploying Apache Ignite In Kubernetes',
    description: 'In this webinar, speakers provide steps on how to deploy Ignite in Kubernetes.',
  },
  {
    url: 'https://www.youtube.com/watch?v=eGlmZoBSS8g',
    title: 'Machine Learning With Apache Ignite',
    description: 'Watch this webinar to learn how to leverage the Apache Ignite machine learning framework to implement a continuous machine learning platform.',
  },
];

interface MailingListProps {
  title: string;
  emailAddress: string;
  subscribeEmail: string;
  unsubscribeEmail: string;
  archiveUrl: string;
  showStackOverflow?: boolean;
}

function MailingListSection({
  title,
  emailAddress,
  subscribeEmail,
  unsubscribeEmail,
  archiveUrl,
  showStackOverflow = false,
}: MailingListProps) {
  const [showSubDetails, setShowSubDetails] = useState(false);
  const [showUnsubDetails, setShowUnsubDetails] = useState(false);

  return (
    <article className={styles.mailingList}>
      <h3 className={`${styles.mailingListTitle} h5`}>
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </h3>
      <div className={styles.mailingListContent}>
        <p className={styles.mailingListLabel}>By e-mail</p>
        <p>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </p>
        <div className={styles.mailingListButtons}>
          <div className={styles.mailingListButton}>
            <button
              onClick={() => setShowSubDetails(!showSubDetails)}
              className={styles.popupButton}
            >
              <img src="/img/icon-email+.svg" alt="" className={styles.emailIcon} />
              <span>Subscribe</span>
            </button>
            {showSubDetails && (
              <div className={styles.popup}>
                <p>
                  By sending a <a href={`mailto:${subscribeEmail}`}>default e-mail</a>
                </p>
                <p>
                  By sending Hello to this e-mail <strong>{subscribeEmail}</strong>
                </p>
              </div>
            )}
          </div>
          <div className={styles.mailingListButton}>
            <button
              onClick={() => setShowUnsubDetails(!showUnsubDetails)}
              className={styles.popupButton}
            >
              <img src="/img/icon-email-.svg" alt="" className={styles.emailIcon} />
              <span>Unsubscribe</span>
            </button>
            {showUnsubDetails && (
              <div className={styles.popup}>
                <p>
                  By sending a <a href={`mailto:${unsubscribeEmail}`}>default e-mail</a>
                </p>
                <p>
                  By sending Stop to this e-mail <strong>{unsubscribeEmail}</strong>
                </p>
              </div>
            )}
          </div>
          <a
            href={archiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mailingListButton}
          >
            <img src="/img/icon-folder.svg" alt="" />
            <span>Archives</span>
          </a>
        </div>
        {showStackOverflow && (
          <>
            <p className={`${styles.mailingListLabel} ${styles.stackOverflowSection}`}>
              On StackOverflow
            </p>
            <p>
              Or ask a question on StackOverflow tagging the question with "ignite" or
              "apacheignite"
            </p>
            <div className={styles.mailingListButtons}>
              <a
                href="http://stackoverflow.com/questions/tagged/ignite"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mailingListButton}
              >
                <img src="/img/icon-stackoverflow.svg" alt="" className={styles.stackIcon} />
                <span>Ask question on StackOverflow</span>
              </a>
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default function Resources(): JSX.Element {
  return (
    <Layout
      title="Resources – Videos, Examples, Book"
      description="Explore our collection of videos, webinar recordings, examples, and other Ignite resources. Download the Apache Ignite book."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <img src="/img/resourses/hero.svg" alt="" className={styles.heroImage} />
          <h1 className={`${styles.heroTitle} h1`}>
            Apache Ignite
            <br />
            Resources
          </h1>
          <p className={`${styles.heroDescription} h5`}>
            Elevate your Ignite experience with the help of community-curated technical resources,
            code samples, how-to videos, training courses and other materials
          </p>
        </div>
      </section>

      {/* Technical Resources Section */}
      <section className={`${styles.technicalResources} container`} id="technical">
        <p className="capstext">TECHNICAL RESOURCES</p>
        <div className={styles.technicalGrid}>
          {/* Documentation */}
          <article className={styles.technicalItem}>
            <div className={styles.technicalHeader}>
              <img src="/img/resourses/res2-book.svg" alt="" />
              <h2 className="h4">Apache Ignite Documentation</h2>
            </div>
            <div className={styles.technicalCard}>
              <h3 className="h5">Start with the technical documentation to discover:</h3>
              <div className={styles.technicalText}>
                <ul className="dashlist">
                  <li>Apache Ignite's key capabilities</li>
                  <li>How to use certain features</li>
                  <li>How to approach cluster optimizations</li>
                  <li>Best troubleshooting techniques</li>
                </ul>
              </div>
              <div className={styles.technicalAction}>
                <a
                  href="https://ignite.apache.org/docs/latest/index"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Discover The Entire Documentation
                </a>
              </div>
            </div>
          </article>

          {/* Wiki */}
          <article className={styles.technicalItem}>
            <div className={styles.technicalHeader}>
              <img src="/img/resourses/res2-book2.svg" alt="" />
              <h2 className="h4">Ignite Wiki</h2>
            </div>
            <div className={styles.technicalCard}>
              <h3 className="h5">A collection of low-level design documents and instructions:</h3>
              <div className={styles.technicalText}>
                <ul className="dashlist">
                  <li>Architectural internals of Ignite components</li>
                  <li>Ignite Enhancement Proposals: next big things for Ignite</li>
                  <li>Coding and release guidelines</li>
                </ul>
              </div>
              <div className={styles.technicalAction}>
                <a
                  href="https://cwiki.apache.org/confluence/display/IGNITE/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Check Out Wiki
                </a>
              </div>
            </div>
          </article>

          {/* Git Repositories - Source Code */}
          <article className={styles.technicalItem} id="git">
            <div className={styles.technicalHeader}>
              <img src="/img/icon-github.svg" alt="" />
              <h2 className="h4">Git Repositories</h2>
            </div>
            <div className={styles.technicalCard}>
              <h3 className="h5">Ignite Source Code</h3>
              <div className={styles.technicalText}>
                <p>Download Apache Ignite and install in your environment.</p>
                <p>Select one of the following links:</p>
              </div>
              <div className={styles.technicalActionRow}>
                <a
                  href="https://github.com/apache/ignite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Ignite 2.X
                </a>
                <a
                  href="https://github.com/apache/ignite-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Ignite 3.X
                </a>
              </div>
            </div>
          </article>

          {/* Extensions */}
          <article className={styles.technicalItem}>
            <div className={styles.technicalHeader}>
              <span className="h4">&nbsp;</span>
            </div>
            <div className={styles.technicalCard}>
              <h3 className="h5">Ignite Extensions</h3>
              <div className={styles.technicalText}>
                <p>
                  A group of integrations between Apache Ignite and various Java frameworks such as
                  Kafka, Flink, and others.
                </p>
              </div>
              <div className={styles.technicalAction}>
                <a
                  href="https://github.com/apache/ignite-extensions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Ignite Extensions
                </a>
              </div>
            </div>
          </article>

          {/* Teamcity Bot */}
          <div className={styles.technicalCard}>
            <h3 className="h5">Ignite Teamcity Bot</h3>
            <div className={styles.technicalText}>
              <p>A tool intended to monitor Apache Ignite Teamcity where Apache Ignite is tested</p>
            </div>
            <div className={styles.technicalAction}>
              <a
                href="https://github.com/apache/ignite-teamcity-bot"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Teamcity Bot
              </a>
            </div>
          </div>

          {/* Website */}
          <div className={styles.technicalCard}>
            <h3 className="h5">Ignite Website</h3>
            <div className={styles.technicalText}>
              <p>
                The repository hosts the source code
                <br />
                of the Apache Ignite website
              </p>
            </div>
            <div className={styles.technicalAction}>
              <a
                href="https://github.com/apache/ignite-website"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                Ignite Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Resources - Videos */}
      <section className={styles.learningResources} id="learning">
        <div className="container">
          <p className="capstext">LEARNING RESOURCES</p>
          <h2 className={`${styles.sectionTitleWithIcon} h4`}>
            <img src="/img/resourses/block-video.svg" alt="" />
            <span>Essential Videos And Webinar Recordings</span>
          </h2>
          <p className="h5">Explore our collection of videos featuring widespread use-cases.</p>
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <article key={index} className={styles.videoCard}>
                <div className={styles.videoBox}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.videoScreen}
                  >
                    <span className={styles.videoTitle} dangerouslySetInnerHTML={{ __html: video.title }} />
                    <span className={styles.videoSubtitle}>
                      Webinar
                      <br />
                      recording
                    </span>
                    <img src={video.thumbnail || '/img/resourses/video.png'} alt="" />
                  </a>
                </div>
                <div className={styles.videoDescription}>
                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className={`${styles.youtubeLink} h5`}>
            Explore{' '}
            <a
              href="https://www.youtube.com/channel/UChYD3lCEnzHlWioUb2sNgSg"
              target="_blank"
              rel="noopener noreferrer"
            >
              the full collection of Apache Ignite videos
            </a>{' '}
            and recordings on YouTube.
          </div>
        </div>
      </section>

      {/* Training and Courses */}
      <section className={`${styles.training} container`} id="training">
        <h2 className={`${styles.sectionTitleWithIcon} h4`}>
          <img src="/img/resourses/icon-training.svg" alt="" />
          <span>Training and Courses</span>
        </h2>
        <p className="h5">
          Enhance your knowledge of building high-performance and
          <br />
          data-intensive applications with the Apache Ignite capabilities.
        </p>
        <div className={styles.coursesGrid}>
          <article className={styles.courseCard}>
            <p className={styles.courseTitle}>
              Apache Ignite Essentials: Key Design Principles For Building Data-Intensive
              Applications
            </p>
            <img src="/img/resourses/training2.svg" alt="" className={styles.courseImage} />
            <p className={styles.courseDescription}>
              Learn about data partitioning, affinity co-location, and co-located processing
            </p>
            <a
              href="https://www.gridgain.com/products/services/training/apache-ignite-essentials"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Training Schedule
            </a>
          </article>
          <article className={styles.courseCard}>
            <p className={styles.courseTitle}>
              Apache Ignite and Kubernetes: Deployment and Orchestration Strategies
            </p>
            <img src="/img/resourses/kubernetes.svg" alt="" className={styles.courseImage} />
            <p className={styles.courseDescription}>
              Learn how to deploy and orchestrate Apache Ignite in a Kubernetes environment
            </p>
            <a
              href="https://www.gridgain.com/products/services/training/apache-ignite-and-kubernetes-deployment-and-orchestration-strategies"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Training Schedule
            </a>
          </article>
          <article className={styles.courseCard}>
            <p className={styles.courseTitle}>
              Apache Ignite For Spring Boot And Spring Data Development
            </p>
            <img src="/img/resourses/training3.svg" alt="" className={styles.courseImage} />
            <p className={styles.courseDescription}>
              Explore the best practices and nuances of using Spring Boot and Spring Data with
              Apache Ignite
            </p>
            <a
              href="https://www.gridgain.com/products/services/training/apache-ignite-spring-boot-and-spring-data-development"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Training Schedule
            </a>
          </article>
        </div>
        <div className={styles.trainingBottom}>
          <a
            href="https://www.gridgain.com/services/training"
            target="_blank"
            rel="noopener noreferrer"
            className="button button--shadow"
          >
            Explore Other Free Training Courses
          </a>
        </div>
      </section>

      {/* Apache Ignite Book */}
      <section className={`${styles.book} container`} id="book">
        <h2 className={`${styles.sectionTitleWithIcon} h4`}>
          <img src="/img/resourses/block-book.svg" alt="" />
          <span>Apache Ignite Book</span>
        </h2>
        <p className="h5">
          This book is useful for developers and architects who want to expand
          <br />
          their knowledge of in-memory computing and distributed databases.
        </p>
        <div className={styles.bookContent}>
          <div className={styles.bookImageWrap}>
            <img src="/img/resourses/book-cover.jpg" alt="Apache Ignite Book Cover" />
          </div>
          <div className={styles.bookText}>
            <p className={`${styles.bookRecommendation} capstext`}>
              The book is recommended by
              <br />
              the Apache Ignite Community
            </p>
            <blockquote className={`${styles.bookQuote} h5`}>
              This is one of the very few good books on Apache Ignite. It covers
              <br />
              the whole spectrum of Ignite. From use-cases and architecture to maintenance and code
              examples that get your hands dirty. If you want one book to get it all, this is it!
            </blockquote>
            <div className={styles.bookAuthor}>
              <div className={styles.bookAuthorName}>Edward Kuenen</div>
              <div className={styles.bookAuthorTitle}>Software developer</div>
            </div>
            <a
              href="https://github.com/srecon/the-apache-ignite-book"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Visit Book GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Mailing Lists and Forums */}
      <section className={`${styles.mailingLists} container`} id="mail">
        <h2 className={`${styles.sectionTitleWithIcon} h4`}>
          <img src="/img/resourses/block-email.svg" alt="" />
          <span>Mailing Lists, Forums And Discussion Archives</span>
        </h2>
        <div className={styles.mailingListsGrid}>
          <MailingListSection
            title="For general questions about Ignite"
            emailAddress="user@ignite.apache.org"
            subscribeEmail="user-subscribe@ignite.apache.org"
            unsubscribeEmail="user-unsubscribe@ignite.apache.org"
            archiveUrl="https://lists.apache.org/list.html?user@ignite.apache.org"
            showStackOverflow={true}
          />
          <MailingListSection
            title="For contribution-related discussions"
            emailAddress="dev@ignite.apache.org"
            subscribeEmail="dev-subscribe@ignite.apache.org"
            unsubscribeEmail="dev-unsubscribe@ignite.apache.org"
            archiveUrl="https://lists.apache.org/list.html?dev@ignite.apache.org"
          />
          <MailingListSection
            title="Report bugs, possible <br>improvements and ctr."
            emailAddress="issues@ignite.apache.org"
            subscribeEmail="notifications-subscribe@ignite.apache.org"
            unsubscribeEmail="notifications-unsubscribe@ignite.apache.org"
            archiveUrl="https://lists.apache.org/list.html?issues@ignite.apache.org"
          />
        </div>
      </section>

      {/* FAQ Link */}
      <section className={`${styles.faqSection} container`}>
        <div className={styles.faqCard}>
          <h2 className="h4">Need More Help?</h2>
          <p>Check out our frequently asked questions for quick answers to common questions.</p>
          <Link to="/faq" className="button">
            Visit FAQ Page
          </Link>
        </div>
      </section>
    </Layout>
  );
}
