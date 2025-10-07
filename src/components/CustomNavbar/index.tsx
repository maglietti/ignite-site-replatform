/**
 * Custom Navbar Component
 * Replicates original Apache Ignite site navigation with custom dropdowns
 */

import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ColorModeToggle from '@theme/ColorModeToggle';
import { useColorMode } from '@docusaurus/theme-common';
import DropdownNavbarItem from '@site/src/theme/NavbarItem/DropdownNavbarItem';
import styles from './CustomNavbar.module.css';

export default function CustomNavbar(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode, setColorMode } = useColorMode();

  return (
    <nav className={`navbar ${styles.navbar}`}>
      <div className={styles.navbarInner}>
        {/* Logo */}
        <Link to="/" className={styles.navbarBrand}>
          <img
            src={colorMode === 'dark' ? '/img/logo-white.svg' : '/img/logo.svg'}
            alt="Apache Ignite Logo"
            className={styles.logo}
          />
        </Link>

        {/* Center Navigation */}
        <div className={styles.navbarCenter}>
          {/* Get Started Dropdown */}
          <DropdownNavbarItem
            label="Get Started"
            bold={true}
            columns={3}
            sections={[
              {
                title: '',
                items: [
                  {
                    label: 'Quick Start Guide',
                    href: 'https://ignite.apache.org/docs/latest/',
                    highlighted: true,
                    icon: '/img/menu/icon-red-rocket.svg',
                  },
                  {
                    label: 'Learning resources',
                    to: '/resources#learning',
                  },
                  {
                    label: 'Training and Courses',
                    to: '/resources#training',
                  },
                  {
                    label: 'FAQ',
                    to: '/faq',
                  },
                ],
              },
              {
                title: 'USE CASES',
                titleLink: '/use-cases',
                items: [
                  { label: 'In-Memory Cache', to: '/use-cases/in-memory-cache', icon: '/img/menu/icon-folder.svg' },
                  { label: 'In-Memory Data Grid', to: '/use-cases/in-memory-data-grid', icon: '/img/menu/icon-folder.svg' },
                  { label: 'In-Memory Database', to: '/use-cases/in-memory-database', icon: '/img/menu/icon-folder.svg' },
                  { label: 'Key-Value Store', to: '/use-cases/key-value-store', icon: '/img/menu/icon-folder.svg' },
                ],
              },
              {
                title: '',
                items: [
                  { label: 'High-Performance Computing', to: '/use-cases/high-performance-computing', icon: '/img/menu/icon-folder.svg' },
                  { label: 'Digital Integration Hub', to: '/use-cases/digital-integration-hub', icon: '/img/menu/icon-folder.svg' },
                  { label: 'Spark Acceleration', to: '/use-cases/spark-acceleration', icon: '/img/menu/icon-folder.svg' },
                  { label: 'Hadoop Acceleration', to: '/use-cases/hadoop-acceleration', icon: '/img/menu/icon-folder.svg' },
                ],
              },
            ]}
            footerLink={{ text: 'View all', href: '/use-cases' }}
          />

          {/* Features Dropdown */}
          <DropdownNavbarItem
            label="Features"
            columns={4}
            sections={[
              {
                title: 'MULTI-TIER STORAGE',
                items: [
                  { label: 'Multi-Tier Storage', to: '/arch/multi-tier-storage', icon: '/img/menu/icon-db.svg' },
                  { label: 'Native Persistence', to: '/arch/native-persistence', icon: '/img/menu/icon-db.svg' },
                ],
              },
              {
                title: 'ESSENTIAL DEVELOPER APIS',
                items: [
                  { label: 'Distributed SQL', to: '/features/sql', icon: '/img/menu/icon-cube.svg' },
                  { label: 'Key-Value APIs', to: '/features/key-value-apis', icon: '/img/menu/icon-cube.svg' },
                  { label: 'ACID Transactions', to: '/features/acid-transactions', icon: '/img/menu/icon-cube.svg' },
                ],
              },
              {
                title: 'HIGH-PERFORMANCE COMPUTING APIS',
                items: [
                  { label: 'Compute APIs', to: '/features/compute-apis', icon: '/img/menu/icon-cube.svg' },
                  { label: 'Services', to: '/features/service-apis', icon: '/img/menu/icon-cube.svg' },
                  { label: 'Machine Learning', to: '/features/machinelearning', icon: '/img/menu/icon-cube.svg' },
                ],
              },
              {
                title: 'REAL-STREAMING APIS',
                items: [
                  { label: 'Real-Time Streaming APIs', to: '/features/streaming', icon: '/img/menu/icon-cube.svg' },
                  { label: 'Messaging', href: 'https://ignite.apache.org/docs/latest/messaging', icon: '/img/menu/icon-cube.svg' },
                  { label: 'Continuous Queries', href: 'https://ignite.apache.org/docs/latest/key-value-api/continuous-queries', icon: '/img/menu/icon-cube.svg' },
                ],
              },
            ]}
            footerLink={{ text: 'View all', href: '/features' }}
          />

          {/* Community Dropdown */}
          <DropdownNavbarItem
            label="Community"
            columns={4}
            sections={[
              {
                title: 'Project Info',
                titleLink: '/community',
                items: [
                  { label: 'Apache Ignite Story', to: '/community#story', icon: '/img/menu/icon-clip.svg' },
                  { label: 'Meet The Community', to: '/community#community', icon: '/img/menu/icon-comment.svg' },
                ],
              },
              {
                title: '',
                items: [
                  { label: 'Start Contributing', to: '/community#contributing', icon: '/img/menu/icon-puzzle.svg' },
                  { label: 'Ask Questions', to: '/community#faq', icon: '/img/menu/icon-question.svg' },
                ],
              },
              {
                title: 'Events',
                titleLink: '/events',
                items: [
                  { label: 'Apache Ignite Summit', to: '/events#summit', icon: '/img/menu/icon-calendar.svg' },
                  { label: 'Meetups', to: '/events#meetups', icon: '/img/menu/icon-calendar.svg' },
                ],
              },
              {
                title: '',
                items: [
                  { label: 'Upcoming Events', to: '/events#upcoming', icon: '/img/menu/icon-calendar.svg' },
                  { label: 'Past Events', to: '/events#past', icon: '/img/menu/icon-calendar.svg' },
                ],
              },
            ]}
          />

          {/* Powered By Link */}
          <Link to="/use-cases/proven-use-cases" className={styles.navLink}>
            Powered By
          </Link>

          {/* Resources Dropdown */}
          <DropdownNavbarItem
            label="Resources"
            columns={2}
            sections={[
              {
                title: '',
                items: [
                  {
                    label: 'Blog',
                    to: '/blog',
                    highlighted: true,
                    icon: '/img/menu/icon-blog.svg',
                  },
                  {
                    label: 'Technical resources',
                    to: '/resources#technical',
                  },
                  {
                    label: 'Learning resources',
                    to: '/resources#learning',
                  },
                ],
              },
              {
                title: '',
                items: [
                  {
                    label: 'Training and Courses',
                    to: '/resources#training',
                  },
                  {
                    label: 'Apache Ignite Book',
                    to: '/resources#book',
                  },
                  {
                    label: 'Mailing Lists, Forums And Discussion Archives',
                    to: '/resources#mail',
                  },
                  {
                    label: 'FAQ',
                    to: '/faq',
                  },
                ],
              },
            ]}
          />

          {/* Docs Link */}
          <Link to="/docs" className={styles.navLink}>
            Docs
          </Link>
        </div>

        {/* Right Navigation */}
        <div className={styles.navbarRight}>
          <Link to="/download" className={`${styles.navLink} ${styles.downloadButton}`}>
            Download Ignite
          </Link>
          <ColorModeToggle
            className={styles.colorModeToggle}
            value={colorMode}
            onChange={setColorMode}
          />
        </div>
      </div>
    </nav>
  );
}
