/**
 * Card Component
 *
 * Reusable card component for displaying features, use cases, blog posts, etc.
 * Supports optional image, title, description, and link.
 *
 * @example
 * ```tsx
 * <Card
 *   title="Distributed SQL"
 *   description="Query distributed data with ANSI SQL"
 *   image="/img/features/sql-icon.svg"
 *   imageAlt="SQL icon"
 *   link="/features/sql"
 *   linkText="Learn More"
 * />
 * ```
 */

import React from 'react';
import Link from '@docusaurus/Link';
import { CardProps } from '@site/src/types/components';
import styles from './Card.module.css';

export default function Card({
  title,
  description,
  image,
  imageAlt,
  link,
  linkText = 'Learn More',
  className = '',
  children,
}: CardProps): JSX.Element {
  const CardContent = (
    <>
      {image && (
        <div className={styles.card__image}>
          <img src={image} alt={imageAlt || title || ''} />
        </div>
      )}
      {title && <h3 className={`${styles.card__title} h5`}>{title}</h3>}
      {description && <p className={styles.card__description}>{description}</p>}
      {children}
      {link && linkText && (
        <div className={styles.card__link}>
          <span className="arrowlink">{linkText}</span>
        </div>
      )}
    </>
  );

  const cardClasses = `${styles.card} ${className}`;

  if (link) {
    return (
      <Link to={link} className={`${cardClasses} ${styles.cardClickable}`}>
        {CardContent}
      </Link>
    );
  }

  return <div className={cardClasses}>{CardContent}</div>;
}
