/**
 * Custom Dropdown Navbar Item
 * Supports multi-column layouts with category headers matching original site
 */

import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './DropdownNavbarItem.module.css';

interface DropdownItem {
  label: string;
  to?: string;
  href?: string;
  category?: string;
  highlighted?: boolean;
  icon?: string;
}

interface DropdownSection {
  title: string;
  titleLink?: string;
  items: DropdownItem[];
}

interface Props {
  label: string;
  items?: DropdownItem[];
  sections?: DropdownSection[];
  columns?: number;
  position?: 'left' | 'right';
  bold?: boolean;
  footerLink?: {
    text: string;
    href: string;
  };
}

export default function DropdownNavbarItem({
  label,
  items = [],
  sections = [],
  columns = 1,
  position = 'left',
  bold = false,
  footerLink,
}: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const hasItems = items.length > 0 || sections.length > 0;

  return (
    <div
      className={`${styles.dropdown} navbar__item navbar__item--dropdown`}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={`${styles.dropdownButton} ${bold ? styles.bold : ''} navbar__link`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <span className={styles.dropdownArrow}>▼</span>
      </button>

      {hasItems && isOpen && (
        <div
          className={`${styles.dropdownMenu} ${styles[`columns${columns}`]}`}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {sections.length > 0 ? (
            sections.map((section, idx) => (
              <div key={idx} className={styles.dropdownSection}>
                {section.title && (
                  <div className={styles.sectionTitle}>
                    {section.titleLink ? (
                      <Link to={section.titleLink} className={styles.sectionTitleLink}>
                        {section.title}
                      </Link>
                    ) : (
                      section.title
                    )}
                  </div>
                )}
                <ul className={styles.sectionList}>
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      {item.to ? (
                        <Link
                          to={item.to}
                          className={`${styles.dropdownLink} ${
                            item.highlighted ? styles.highlighted : ''
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.icon && (
                            <img src={item.icon} alt="" className={styles.dropdownIcon} />
                          )}
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={`${styles.dropdownLink} ${
                            item.highlighted ? styles.highlighted : ''
                          }`}
                          onClick={() => setIsOpen(false)}
                          target={item.href?.startsWith('http') ? '_blank' : undefined}
                          rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.icon && (
                            <img src={item.icon} alt="" className={styles.dropdownIcon} />
                          )}
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul className={styles.simpleList}>
              {items.map((item, idx) => (
                <li key={idx}>
                  {item.to ? (
                    <Link
                      to={item.to}
                      className={`${styles.dropdownLink} ${
                        item.highlighted ? styles.highlighted : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon && (
                        <img src={item.icon} alt="" className={styles.dropdownIcon} />
                      )}
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`${styles.dropdownLink} ${
                        item.highlighted ? styles.highlighted : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                      target={item.href?.startsWith('http') ? '_blank' : undefined}
                      rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.icon && (
                        <img src={item.icon} alt="" className={styles.dropdownIcon} />
                      )}
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
          {footerLink && (
            <div className={styles.dropdownFooter}>
              <Link to={footerLink.href} className={styles.footerLink}>
                {footerLink.text}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
