/**
 * 404 Page - Apache Ignite
 * Custom error page for handling not found routes
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './404.module.css';

export default function NotFound(): JSX.Element {
  return (
    <Layout title="404 Not found - Apache Ignite">
      <div className={styles.error404}>
        <img
          src="/img/404.svg"
          alt="Page not found"
          className={styles.error404__pic}
        />
        <h1 className={styles.error404__title}>
          <strong>Not found</strong>
        </h1>
        <p className={styles.error404__subtitle}>
          The requested URL was not found on this server
        </p>

        <div className={styles.error404__actions}>
          <Link to="/" className="button button--primary button--lg">
            Go to Homepage
          </Link>
          <Link to="/docs/intro" className="button button--secondary button--lg">
            Browse Documentation
          </Link>
        </div>

        <div className={styles.error404__links}>
          <h2 className={styles.error404__linksTitle}>Popular Pages</h2>
          <ul className={styles.error404__linksList}>
            <li>
              <Link to="/download">Download Apache Ignite</Link>
            </li>
            <li>
              <Link to="/features">Features Overview</Link>
            </li>
            <li>
              <Link to="/community">Join the Community</Link>
            </li>
            <li>
              <Link to="/resources">Resources and Learning</Link>
            </li>
            <li>
              <Link to="/blog">Read the Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
