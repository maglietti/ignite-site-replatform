/**
 * Button Component
 *
 * Reusable button component following Apache Ignite design system.
 * Supports multiple variants (primary, secondary, shadow) and sizes.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium" href="/download">
 *   Download
 * </Button>
 * ```
 */

import React from 'react';
import Link from '@docusaurus/Link';
import { ButtonProps } from '@site/src/types/components';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  disabled = false,
  ariaLabel,
  className = '',
  children,
}: ButtonProps): JSX.Element {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    disabled && styles['button--disabled'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const buttonProps = {
    className: buttonClasses,
    onClick: disabled ? undefined : onClick,
    'aria-label': ariaLabel,
    disabled,
  };

  if (href && !disabled) {
    return (
      <Link to={href} {...buttonProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" {...buttonProps}>
      {children}
    </button>
  );
}
