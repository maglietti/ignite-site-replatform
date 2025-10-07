/**
 * Community Page - Apache Ignite
 *
 * Showcases the Apache Ignite community, including project history,
 * committers, PMC members, and contribution guidelines.
 */

import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { committers, pmcMembers } from '@site/src/data/committers';
import styles from './community.module.css';

export default function Community(): JSX.Element {
  const [showAllCommitters, setShowAllCommitters] = useState(false);
  const [showAllPMC, setShowAllPMC] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  const visibleCommitters = showAllCommitters
    ? committers
    : committers.slice(0, 14);
  const visiblePMC = showAllPMC ? pmcMembers.slice(1) : pmcMembers.slice(1, 4);

  const pmcChair = pmcMembers.find((m) => m.isPMCChair);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Layout
      title="Community - Start Contributing"
      description="Meet an Apache Ignite community and get help. Contribute to Ignite by helping answer user questions, coding, changing technical documentation, or becoming a committer and PMC member."
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__main}>
            <h1 className={styles.hero__title}>
              Welcome To The Apache
              <br />
              Ignite Community
            </h1>
            <p className={styles.hero__text}>
              A community of software engineers, tech writers, and
              technologists who drive the evolution of a top-5 project of the
              Apache Software Foundation
            </p>
            <div className={styles.hero__sub}>
              <Link
                to="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from"
                target="_blank"
              >
                Learn more
              </Link>{' '}
              about Ignite ranking in various categories.
            </div>
          </div>
          <Link
            to="https://blogs.apache.org/ignite/entry/apache-ignite-momentum-highlights-from"
            target="_blank"
            className={styles.hero__img}
          >
            <img
              src="/img/community/b1-photo.svg"
              alt="Welcome to the Apache Ignite Community"
            />
          </Link>
        </div>
      </section>

      {/* Navigation Block */}
      <section className={styles.navBlock}>
        <div className="container">
          <ul className={styles.navBlock__list}>
            <li>
              <a href="#story" className={styles.navBlock__active}>
                Learn Our Story
              </a>
            </li>
            <li>
              <a href="#community">Meet the Community</a>
            </li>
            <li>
              <a href="#contributing">Start Contributing</a>
            </li>
            <li>
              <a href="#faq">Ask a Question</a>
            </li>
          </ul>
        </div>
      </section>

      {/* History Section */}
      <section className={styles.history} id="story">
        <div className="container">
          <h2 className={styles.history__title}>Apache Ignite Story</h2>

          {/* 2014 - Contributed to ASF */}
          <div className={styles.historyItem}>
            <div className={styles.historyItem__wrap}>
              <div className={styles.historyItem__left}>
                <div className={styles.historyItem__year}>2014</div>
                <img src="/img/community/b3-rocket1.svg" alt="" />
              </div>
              <div className={styles.historyItem__right}>
                <h3 className={styles.historyItem__h3}>
                  Ignite is contributed to ASF
                </h3>
                <p>
                  GridGain donates the core of its in-memory computing platform
                  to the Apache Software Foundation under the name of "Apache
                  Ignite". The{' '}
                  <Link
                    to="https://incubator.apache.org/projects/ignite.html"
                    target="_blank"
                  >
                    project enters the Apache Incubator
                  </Link>
                  . The first members form its community.
                </p>
                <button
                  className={styles.historyItem__toggle}
                  onClick={() => toggleSection('history1')}
                  aria-expanded={expandedSections.history1}
                >
                  <i />
                  <span />
                </button>
                {expandedSections.history1 && (
                  <div className={styles.historyItem__more}>
                    <blockquote className={styles.historyItem__quote}>
                      It was a time of intense learning and almost daily
                      challenges. Incubation lets people find ways to become a
                      true community, how to create a project without fighting
                      for an "intellectual property", and how to multiply the
                      success by sharing rather than restricting. It wasn't an
                      easy, quick nor smooth transition, but in retrospect it
                      was worth it!
                    </blockquote>
                    <div className={styles.historyItem__avatar}>
                      <div className={styles.historyItem__avatarImg}>
                        <img src="/img/community/b2-cos.jpg" alt="" />
                      </div>
                      <div className={styles.historyItem__avatarInfo}>
                        <div className={styles.historyItem__avatarName}>
                          Konstantin (Cos) Boudnik
                        </div>
                        <div className={styles.historyItem__avatarTitle}>
                          ASF member, Apache Ignite Mentor
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2015 - Graduates */}
          <div className={`${styles.historyItem} ${styles.historyItem__right}`}>
            <div className={styles.historyItem__wrap}>
              <div className={styles.historyItem__left}>
                <div
                  className={`${styles.historyItem__year} ${styles.historyItem__yearRight}`}
                >
                  2015
                </div>
                <img src="/img/community/b3-rocket2.svg" alt="" />
              </div>
              <div className={styles.historyItem__content}>
                <h3 className={styles.historyItem__h3}>
                  Ignite graduates from the incubator
                </h3>
                <p>
                  In less than a year{' '}
                  <Link
                    to="https://blogs.apache.org/foundation/entry/the_apache_software_foundation_announces79"
                    target="_blank"
                  >
                    Ignite successfully graduates
                  </Link>{' '}
                  from the ASF incubator and became a top-level project of the
                  Apache Software Foundation.
                </p>
                <button
                  className={styles.historyItem__toggle}
                  onClick={() => toggleSection('history2')}
                  aria-expanded={expandedSections.history2}
                >
                  <i />
                  <span />
                </button>
                {expandedSections.history2 && (
                  <div className={styles.historyItem__more}>
                    <p>
                      The community keeps expanding rapidly. Hundreds of
                      developers and architects start using Ignite as a
                      distributed in-memory data grid (aka.
                      write-through/read-through cache) for its native support
                      of SQL, ACID transactions and high-performance computing
                      APIs.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2017 - Native Persistence */}
          <div className={styles.historyItem}>
            <div className={styles.historyItem__wrap}>
              <div className={styles.historyItem__left}>
                <div className={styles.historyItem__year}>2017</div>
                <img src="/img/community/b3-rocket3.svg" alt="" />
              </div>
              <div className={styles.historyItem__right}>
                <h3 className={styles.historyItem__h3}>
                  Ignite introduces Native Persistence and becomes a Top-5
                  Project
                </h3>
                <p>In 2017, two notable events happened.</p>
                <button
                  className={styles.historyItem__toggle}
                  onClick={() => toggleSection('history3')}
                  aria-expanded={expandedSections.history3}
                >
                  <i />
                  <span />
                </button>
                {expandedSections.history3 && (
                  <div className={styles.historyItem__more}>
                    <p>
                      <Link
                        to="https://incubator.apache.org/ip-clearance/persistent-distributed-store-ignite.html"
                        target="_blank"
                      >
                        First, with the donation of the Ignite native
                        persistence
                      </Link>{' '}
                      to the project's codebase, a new chapter in the Ignite
                      story begins. Since then, many will be using Ignite as a
                      distributed database that scales across memory and disk
                      with no compromises.
                    </p>
                    <p>
                      Second, this is the year when Ignite is ranked as a top-5
                      project of the ASF in various categories for the first
                      time. A trend that will continue in the years to come.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 2020 - Distributed Database */}
          <div className={`${styles.historyItem} ${styles.historyItem__right}`}>
            <div className={styles.historyItem__wrap}>
              <div className={styles.historyItem__left}>
                <div
                  className={`${styles.historyItem__year} ${styles.historyItem__yearRight}`}
                >
                  2020
                </div>
                <img src="/img/community/b3-rocket4.svg" alt="" />
              </div>
              <div className={styles.historyItem__content}>
                <h3 className={styles.historyItem__h3}>
                  Ignite becomes (officially)
                  <br />a distributed database
                </h3>
                <p>
                  3 years after the initial release of the Ignite native
                  persistence, the community and application developers carried
                  on improving and adopting this capability for mission-critical
                  production workloads.
                </p>
                <button
                  className={styles.historyItem__toggle}
                  onClick={() => toggleSection('history4')}
                  aria-expanded={expandedSections.history4}
                >
                  <i />
                  <span />
                </button>
                {expandedSections.history4 && (
                  <div className={styles.historyItem__more}>
                    <p>
                      Finally, after seeing the rapid adoption of Ignite as a
                      database by application developers, the community
                      repositions Ignite as a "distributed database for
                      high-performance computing with in-memory speed".
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Today - Ignite 3.0 */}
          <div className={styles.historyItem}>
            <div className={styles.historyItem__wrap}>
              <div className={styles.historyItem__left}>
                <div className={styles.historyItem__year}>Today</div>
                <img src="/img/community/b3-rocket5.svg" alt="" />
              </div>
              <div className={styles.historyItem__right}>
                <h3 className={styles.historyItem__h3}>
                  Ignite 3.0 version is under way
                </h3>
                <p>
                  Even when your project boasts hundreds of thousands of
                  downloads a month and is being selected by elite developers
                  and architects for applications that are used by millions of
                  people daily, there is still room for innovation.
                </p>
                <button
                  className={styles.historyItem__toggle}
                  onClick={() => toggleSection('history5')}
                  aria-expanded={expandedSections.history5}
                >
                  <i />
                  <span />
                </button>
                {expandedSections.history5 && (
                  <div className={styles.historyItem__more}>
                    <p>
                      Ignite 3 is a significant leap forward for both the
                      project and its community. Join or support us in an effort
                      to create a cutting-edge distributed database...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Community */}
      <section className={styles.meetCommunity} id="community">
        <div className="container">
          <div className={styles.meetCommunity__wrap}>
            <div className={styles.meetCommunity__main}>
              <h2 className={styles.meetCommunity__title}>
                Meet The Community
              </h2>
              <p className={styles.meetCommunity__text}>
                A global community of professionals with different skills and
                experiences who drive the evolution of Ignite.
              </p>
              <div className={styles.meetCommunity__sub}>
                <Link to="http://www.apache.org/theapacheway/" target="_blank">
                  The Apache Way
                </Link>{' '}
                &ndash; get to know our collaboration and contribution values
                with principles.
              </div>
            </div>
            <div className={styles.meetCommunity__pic}>
              <img src="/img/community/b4-img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className={styles.contributors}>
        <div className="container">
          <div className={styles.contributors__wrap}>
            <div className={styles.contributors__main}>
              <h3 className="h4">Contributors</h3>
              <p className={styles.contributors__text}>
                More than 100 members help the project grow and progress daily.
                Code contributions, documentation creation, project awareness,
                developer support{' '}
                <strong>
                  this is just a sample of the contributions that we recognize.
                </strong>
              </p>
            </div>
            <div className={styles.contributors__pic}>
              <img src="/img/community/b5-img.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Committers */}
      <section className={styles.committers}>
        <div className="container">
          <h3 className="h4">Committers</h3>
          <p className={styles.committers__text}>
            Most active contributors who make a significant contribution to the
            project become Apache Ignite committers.
          </p>
          <p className={styles.committers__small}>
            Here is the list of committers for the project.
          </p>

          <div className={styles.committers__grid}>
            {visibleCommitters.map((committer, idx) => (
              <div key={idx} className={styles.committer}>
                <div className={styles.committer__name}>{committer.name}</div>
                <div className={styles.committer__links}>
                  {committer.github && (
                    <Link
                      to={committer.github}
                      target="_blank"
                      className={styles.committer__link}
                    >
                      <img src="/img/icon-github.svg" alt="GitHub" />
                    </Link>
                  )}
                  {committer.apacheProfile && (
                    <Link
                      to={committer.apacheProfile}
                      target="_blank"
                      className={styles.committer__link}
                    >
                      <img src="/img/icon-pero.svg" alt="Apache" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!showAllCommitters && committers.length > 14 && (
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAllCommitters(true)}
            >
              <i>Load more</i>
            </button>
          )}
          {showAllCommitters && (
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAllCommitters(false)}
            >
              <span>Hide</span>
            </button>
          )}
        </div>
      </section>

      {/* PMC Members */}
      <section className={styles.pmc}>
        <div className="container">
          <h3 className="h4">Project Management Committee</h3>
          <p className={styles.committers__text}>
            A group of Ignite committers who oversee project management and
            operational matters. They vote on new committers, releases and make
            other vital decisions.
          </p>
          <p className={styles.committers__small}>
            Here is the list of PMC members for the project.
          </p>

          <div className={styles.pmc__grid}>
            {pmcChair && (
              <div className={styles.pmcMember}>
                <div className={styles.pmcMember__badge}>
                  <img src="/img/community/b7-chair-star.svg" alt="" />
                  <span>PMC CHAIR</span>
                </div>
                <p className={`${styles.pmcMember__name} h5`}>
                  {pmcChair.name}
                </p>
                <div className={styles.pmcMember__links}>
                  {pmcChair.github && (
                    <Link
                      to={pmcChair.github}
                      target="_blank"
                      className={styles.pmcMember__link}
                    >
                      <img src="/img/icon-github.svg" alt="GitHub" />
                    </Link>
                  )}
                  {pmcChair.apacheProfile && (
                    <Link
                      to={pmcChair.apacheProfile}
                      target="_blank"
                      className={styles.pmcMember__link}
                    >
                      <img src="/img/icon-pero.svg" alt="Apache" />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {visiblePMC.map((member, idx) => (
              <div key={idx} className={styles.pmcMember}>
                <p className={`${styles.pmcMember__name} h5`}>{member.name}</p>
                <div className={styles.pmcMember__links}>
                  {member.github && (
                    <Link
                      to={member.github}
                      target="_blank"
                      className={styles.pmcMember__link}
                    >
                      <img src="/img/icon-github.svg" alt="GitHub" />
                    </Link>
                  )}
                  {member.apacheProfile && (
                    <Link
                      to={member.apacheProfile}
                      target="_blank"
                      className={styles.pmcMember__link}
                    >
                      <img src="/img/icon-pero.svg" alt="Apache" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!showAllPMC && pmcMembers.length > 4 && (
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAllPMC(true)}
            >
              <i>Load more</i>
            </button>
          )}
          {showAllPMC && (
            <button
              className={styles.loadMoreBtn}
              onClick={() => setShowAllPMC(false)}
            >
              <span>Hide</span>
            </button>
          )}
        </div>
      </section>

      {/* Start Contributing */}
      <section className={styles.startContributing} id="contributing">
        <div className="container">
          <div className={styles.startContributing__wrap}>
            <div className={styles.startContributing__main}>
              <h2 className={`h3 ${styles.startContributing__title}`}>
                Start Contributing
              </h2>
              <p className={`h5 ${styles.startContributing__text}`}>
                There are multiple ways you can contribute to Ignite &mdash;
                contribute to the codebase, help developers on the mailing
                lists, write technical docs or popularize our technology!
              </p>
            </div>
            <div className={styles.startContributing__pic}>
              <img src="/img/community/b8-img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Code and Docs Contributions */}
      <section className={styles.docs}>
        <div className="container">
          <h3 className="h4">Code and technical documentation contributions</h3>
          <div className={styles.docs__wrap}>
            <div className={styles.docBlock}>
              <div className={styles.docBlock__icon}>
                <img src="/img/community/b9-icon-code.svg" alt="" />
              </div>
              <h3 className={`h4 ${styles.docBlock__title}`}>
                Develop Ignite
              </h3>
              <p className={styles.docBlock__text}>
                Contribute to the Apache Ignite:
              </p>
              <ul className={styles.docBlock__list}>
                <li>code base</li>
                <li>integrations and extensions</li>
                <li>
                  programming languages, such as .NET, Python, Node.JS, or other
                  programming languages different from Java
                </li>
              </ul>
            </div>
            <div className={`${styles.docBlock} ${styles.docBlock__bg}`}>
              <div className={styles.docBlock__icon}>
                <img src="/img/community/b9-icon-paper.svg" alt="" />
              </div>
              <h3 className={`h4 ${styles.docBlock__title}`}>
                Improve technical documentation
              </h3>
              <p className={styles.docBlock__text}>
                Documentation educates users about Ignite capabilities,
                configuration techniques, optimization aspects and many other
                things.
              </p>
              <ul className={styles.docBlock__list}>
                <li>
                  Produce and maintain the documentation pages or API references
                </li>
                <li>Edit and correct existing content</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start */}
      <section className={styles.ready}>
        <div className="container">
          <h3 className="h4">
            <strong>Ready to start?</strong>
          </h3>
          <p className={styles.ready__text}>
            4 Steps to Start Contributing to the Code and Technical
            Documentation
          </p>
          <div className={styles.ready__steps}>
            <div className={styles.ready__step}>
              <i>01</i>
              <p>
                Join <strong>dev mailing list</strong> (send an email to{' '}
                <Link to="mailto:dev-subscribe@ignite.apache.org?subject=Subscribe&body=Hello">
                  dev-subscribe@ignite.apache.org
                </Link>
                ) and introduce yourself.
              </p>
            </div>
            <div className={styles.ready__step}>
              <i>02</i>
              <p>
                If you don't have an{' '}
                <Link to="https://issues.apache.org/jira/" target="_blank">
                  ASF JIRA
                </Link>{' '}
                account, request it{' '}
                <Link
                  to="https://selfserve.apache.org/jira-account.html"
                  target="_blank"
                >
                  here
                </Link>
                .
              </p>
            </div>
            <div className={styles.ready__step}>
              <i>03</i>
              <div>
                <p>Pick a ticket to start with:</p>
                <p>
                  <Link
                    to="https://issues.apache.org/jira/projects/IGNITE/issues/IGNITE-15437?filter=allopenissues"
                    target="_blank"
                  >
                    View tickets for code contribution
                  </Link>
                </p>
                <p>
                  <Link
                    to="https://issues.apache.org/jira/browse/IGNITE-15644?jql=project%20%3D%20IGNITE%20AND%20component%20%3D%20documentation"
                    target="_blank"
                  >
                    View tickets for technical documentation
                  </Link>
                </p>
              </div>
            </div>
            <div className={styles.ready__step}>
              <i>04</i>
              <p>
                To get more details, check out the{' '}
                <Link
                  to="https://cwiki.apache.org/confluence/display/IGNITE/How+to+Contribute"
                  target="_blank"
                >
                  Contribution and Development
                </Link>{' '}
                process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Build Awareness */}
      <section className={styles.awareness}>
        <div className="container">
          <h3 className="h4">
            Contribute By Building The Awareness Of Ignite And Helping Fellow
            Developers
          </h3>
          <div className={styles.awareness__wrap}>
            <div className={styles.awarenessBlock}>
              <img src="/img/community/b12-code.svg" alt="" />
              <h3 className="h4">Build the project awareness</h3>
              <p>
                You can contribute by taking part in project awareness
                activities.
              </p>
              <ul className={styles.awareness__list}>
                <li>
                  <Link
                    to="https://recognition.gridgain.com/main?product=ignite"
                    target="_blank"
                  >
                    Create demos
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://recognition.gridgain.com/main?product=ignite"
                    target="_blank"
                  >
                    Write a blog post
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://recognition.gridgain.com/main?product=ignite"
                    target="_blank"
                  >
                    Talk about Ignite at conferences and other events
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.awarenessBlock}>
              <img
                src="/img/community/b12-icon-quest.svg"
                alt=""
                className={styles.awarenessBlock__questImg}
              />
              <h3 className="h4">Help application developers</h3>
              <p>
                If you already have some experience with Apache Ignite, come and
                help others.
              </p>
              <ul className={styles.awareness__list}>
                <li>
                  <Link to="mailto:user@ignite.apache.org">
                    Answer on the user list
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://stackoverflow.com/questions/tagged/ignite"
                    target="_blank"
                  >
                    Answer on StackOverflow
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ask a Question */}
      <section className={styles.askQuestion} id="faq">
        <div className="container">
          <div className={styles.askQuestion__wrap}>
            <div className={styles.askQuestion__main}>
              <h2 className={styles.askQuestion__title}>Ask a Question</h2>
              <p className={styles.askQuestion__text}>
                Feel free to reach out to our community if you have any
                questions, doubts or proposals. There are a few ways to do this.
              </p>
            </div>
            <img
              src="/img/community/b15-askimg.svg"
              alt=""
              className={styles.askQuestion__bg}
            />
          </div>
        </div>
      </section>

      {/* FAQ Blocks */}
      <section className={styles.faq}>
        <div className="container">
          {/* General Questions */}
          <div className={styles.faqBlock}>
            <h3 className={`h5 ${styles.faqBlock__title}`}>
              <img src="/img/community/b16-icon-quest.svg" alt="" />
              <span>For General Questions</span>
            </h3>
            <div className={styles.faqBlock__content}>
              <p className={styles.faqBlock__subtitle}>By e-mail</p>
              <p>
                For general questions about Ignite{' '}
                <Link to="mailto:user@ignite.apache.org">
                  user@ignite.apache.org
                </Link>
              </p>
              <div className={styles.faqBlock__buttons}>
                <Link
                  to="mailto:user-subscribe@ignite.apache.org"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-email+.svg" alt="" />
                  <span>Subscribe</span>
                </Link>
                <Link
                  to="mailto:user-unsubscribe@ignite.apache.org?subject=Unsubscribe&body=Stop"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-email-.svg" alt="" />
                  <span>Unsubscribe</span>
                </Link>
                <Link
                  to="https://lists.apache.org/list.html?user@ignite.apache.org"
                  target="_blank"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-folder.svg" alt="" />
                  <span>Archives</span>
                </Link>
              </div>
              <p className={styles.faqBlock__subtitle}>On StackOverflow</p>
              <p>
                Many Ignite community members watch{' '}
                <Link
                  to="http://stackoverflow.com/questions/tagged/ignite"
                  target="_blank"
                >
                  Stack Overflow
                </Link>{' '}
                for the tag "ignite" or "apacheignite", so you can post your
                questions there as well.
              </p>
              <div className={styles.faqBlock__buttons}>
                <Link
                  to="http://stackoverflow.com/questions/tagged/ignite"
                  target="_blank"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-stackoverflow.svg" alt="" />
                  <span>Ask question on StackOverflow</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Contribution Questions */}
          <div className={styles.faqBlock}>
            <h3 className={`h5 ${styles.faqBlock__title}`}>
              <img src="/img/community/b16-icon-comments.svg" alt="" />
              <span>
                For Contribution Related
                <br />
                Questions And Discussions
              </span>
            </h3>
            <div className={styles.faqBlock__content}>
              <p className={styles.faqBlock__subtitle}>By e-mail</p>
              <p>
                For contribution-related discussions{' '}
                <Link to="mailto:dev@ignite.apache.org">
                  dev@ignite.apache.org
                </Link>
              </p>
              <div className={styles.faqBlock__buttons}>
                <Link
                  to="mailto:dev-subscribe@ignite.apache.org?subject=Subscribe&body=Hello"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-email+.svg" alt="" />
                  <span>Subscribe</span>
                </Link>
                <Link
                  to="mailto:dev-unsubscribe@ignite.apache.org?subject=Unsubscribe&body=Stop"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-email-.svg" alt="" />
                  <span>Unsubscribe</span>
                </Link>
                <Link
                  to="https://lists.apache.org/list.html?dev@ignite.apache.org"
                  target="_blank"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-folder.svg" alt="" />
                  <span>Archives</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Report Issue */}
          <div className={styles.faqBlock}>
            <h3 className={`h5 ${styles.faqBlock__title}`}>
              <img src="/img/community/b16-icon-reports.svg" alt="" />
              <span>Report An Issue</span>
            </h3>
            <div className={styles.faqBlock__content}>
              <p className={styles.faqBlock__subtitle}>On GitHub</p>
              <p>
                Visit{' '}
                <Link
                  to="https://github.com/apache/ignite/issues"
                  target="_blank"
                >
                  Ignite GitHub
                </Link>{' '}
                if you would like to file a new issue.
              </p>
              <div className={styles.faqBlock__buttons}>
                <Link
                  to="https://github.com/apache/ignite/issues"
                  target="_blank"
                  className={styles.faqBlock__button}
                >
                  <img src="/img/icon-jira.svg" alt="" />
                  <span>File ticket on GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
