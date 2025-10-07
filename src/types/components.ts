/**
 * Common TypeScript interfaces for Apache Ignite components
 *
 * This file defines reusable type definitions for component props
 * across the application to ensure type safety and consistency.
 */

/**
 * Base props that all components should accept
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Button component variants and props
 */
export type ButtonVariant = 'primary' | 'secondary' | 'shadow' | 'link';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

/**
 * Card component props for feature showcases and content blocks
 */
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  link?: string;
  linkText?: string;
}

/**
 * Hero section props for page headers
 */
export type HeroVariant = 'default' | 'blue' | 'dark';

export interface HeroProps extends BaseComponentProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  variant?: HeroVariant;
  backgroundImage?: string;
  image?: string;
  cta?: {
    text: string;
    href: string;
  };
  primaryButton?: {
    text: string;
    href: string;
  };
}

/**
 * Code example tabs for multi-language code samples
 */
export interface CodeExample {
  language: string;
  label: string;
  code: string;
}

export interface CodeTabsProps extends BaseComponentProps {
  examples: CodeExample[];
  defaultLanguage?: string;
}

/**
 * Video showcase component props
 */
export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration?: string;
}

export interface VideoShowcaseProps extends BaseComponentProps {
  videos: VideoItem[];
  title?: string;
  autoplay?: boolean;
}

/**
 * Download widget props for software downloads
 */
export interface DownloadOption {
  version: string;
  type: 'binary' | 'source';
  size: string;
  date: string;
  downloadUrl: string;
}

export interface DownloadWidgetProps extends BaseComponentProps {
  options: DownloadOption[];
  releaseNotesUrl?: string;
}

/**
 * Navigation link props
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Footer link section props
 */
export interface FooterLinkSection {
  title: string;
  links: NavLink[];
}

export interface FooterProps extends BaseComponentProps {
  sections: FooterLinkSection[];
  copyright?: string;
}
