/**
 * Hero Component
 *
 * Page header component for Apache Ignite pages.
 * Supports multiple variants (default, blue, dark) and optional CTA button.
 *
 * @example
 * ```tsx
 * <Hero
 *   title="Apache Ignite"
 *   subtitle="Distributed Database"
 *   variant="blue"
 *   cta={{ text: "Get Started", href: "/download" }}
 * />
 * ```
 */

import React from 'react';
import { HeroProps } from '@site/src/types/components';
import Button from '@site/src/components/common/Button';
import styles from './Hero.module.css';

export default function Hero({
  title,
  subtitle,
  description,
  variant = 'default',
  backgroundImage,
  image,
  cta,
  primaryButton,
  className = '',
  children,
}: HeroProps): JSX.Element {
  const heroClasses = [
    styles.hero,
    styles[`hero--${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const heroStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  const ctaButton = primaryButton || cta;

  return (
    <section className={heroClasses} style={heroStyle}>
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          {subtitle && (
            <p className={`${styles.hero__subtitle} capstext`}>{subtitle}</p>
          )}
          <h1 className={`${styles.hero__title} h1`}>{title}</h1>
          {description && (
            <p className={`${styles.hero__description} fz20`}>{description}</p>
          )}
          {ctaButton && (
            <div className={styles.hero__cta}>
              <Button
                variant="primary"
                size="large"
                href={ctaButton.href}
                aria-label={ctaButton.text}
              >
                {ctaButton.text}
              </Button>
            </div>
          )}
          {children}
        </div>
        {image && (
          <div className={styles.hero__image}>
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  );
}
