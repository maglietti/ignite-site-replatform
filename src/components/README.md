# Apache Ignite Component Architecture

**Version:** 1.0
**Date:** 2025-10-06
**Status:** Phase 1 Complete - Ready for Component Development

This document defines the component architecture patterns and standards for the Apache Ignite Docusaurus site replatforming project.

---

## Directory Structure

```
src/components/
├── layout/           # Layout components (Header, Footer, MobileMenu)
│   ├── Header/
│   │   ├── Header.tsx
│   │   ├── Header.module.css
│   │   └── index.ts
│   ├── Footer/
│   ├── MobileMenu/
│   └── Layout/
├── features/         # Feature-specific components
│   ├── CodeTabs/
│   ├── VideoShowcase/
│   └── DownloadWidget/
├── pages/            # Page-specific components
│   └── [page-name]/
└── common/           # Reusable components
    ├── Button/
    ├── Card/
    └── Hero/
```

### Directory Categories

- **layout/**: Core layout components used across all pages (headers, footers, navigation)
- **features/**: Complex feature components with specific functionality (code tabs, video showcases, download widgets)
- **pages/**: Components specific to individual pages that aren't reused elsewhere
- **common/**: Reusable UI components used throughout the site (buttons, cards, heroes)

---

## Component File Pattern

Every component follows the same three-file pattern:

### 1. ComponentName.tsx

The main React component file written in TypeScript.

**Requirements:**
- Export as default function
- Use TypeScript interfaces from `@site/src/types/components.ts`
- Include JSDoc comments with description and usage example
- Follow functional component pattern with hooks

**Example:**
```tsx
/**
 * Button Component
 *
 * Reusable button component following Apache Ignite design system.
 *
 * @example
 * ```tsx
 * <Button variant="primary" href="/download">Download</Button>
 * ```
 */

import React from 'react';
import { ButtonProps } from '@site/src/types/components';
import styles from './Button.module.css';

export default function Button({
  variant = 'primary',
  className = '',
  children,
}: ButtonProps): JSX.Element {
  // Component logic
}
```

### 2. ComponentName.module.css

Component-scoped styles using CSS Modules.

**Requirements:**
- Use Apache Ignite design tokens from `custom.css` (CSS variables)
- Follow BEM-like naming: `.component`, `.component__element`, `.component--modifier`
- Include dark mode styles with `[data-theme='dark']` selectors
- Add responsive styles with media queries
- Include file header comment describing the component styles

**Example:**
```css
/**
 * Button Component Styles
 *
 * Following Apache Ignite design system tokens.
 */

.button {
  background-color: var(--ignite-blue-primary);
  border-radius: var(--border-radius-lg);
  padding: 0 var(--space-md);
}

.button--primary {
  /* variant styles */
}

[data-theme='dark'] .button {
  /* dark mode adjustments */
}

@media (max-width: 767px) {
  .button {
    /* mobile styles */
  }
}
```

### 3. index.ts

Barrel export file for clean imports.

**Example:**
```typescript
/**
 * Button component barrel export
 */

export { default } from './Button';
```

This pattern allows importing like:
```tsx
import Button from '@site/src/components/common/Button';
```

---

## TypeScript Interfaces

All component props interfaces are defined in `src/types/components.ts`.

**Pattern:**
```typescript
export interface ButtonProps extends BaseComponentProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}
```

**BaseComponentProps includes:**
- `className?: string` - For additional CSS classes
- `children?: React.ReactNode` - For child content

---

## Design System Integration

### CSS Variables

All components must use Apache Ignite design tokens defined in `src/css/custom.css`:

**Colors:**
```css
var(--ignite-blue-primary)    /* Primary brand blue */
var(--ignite-blue-dark)       /* Hover/active states */
var(--ignite-red-primary)     /* Secondary red */
var(--ignite-grey-1)          /* Light grey backgrounds */
var(--ignite-dark-1)          /* Primary dark text */
```

**Spacing:**
```css
var(--space-xs)    /* 0.5rem (5px) */
var(--space-sm)    /* 1rem (10px) */
var(--space-md)    /* 2rem (20px) */
var(--space-lg)    /* 3rem (30px) */
var(--space-xl)    /* 4rem (40px) */
```

**Border Radius:**
```css
var(--border-radius-sm)    /* 0.3rem (3px) */
var(--border-radius-md)    /* 0.5rem (5px) */
var(--border-radius-lg)    /* 1rem (10px) */
```

**Transitions:**
```css
var(--transition-fast)     /* 0.1s ease-in-out */
var(--transition-normal)   /* 0.25s ease */
var(--transition-slow)     /* 0.3s ease */
```

### Typography Classes

Use utility classes from `custom.css`:

```css
.h1, .h2, .h3, .h4, .h5    /* Heading styles */
.fz20                       /* 20px font size */
.capstext                   /* Uppercase with letter-spacing */
```

### Spacing Classes

```css
.pt-2, .pt-3, .pt-4, .pt-5  /* Padding top */
.pb-2, .pb-3, .pb-4, .pb-5  /* Padding bottom */
.mt-2, .mt-3                /* Margin top */
.mb-2, .mb-3                /* Margin bottom */
```

---

## Responsive Design

### Breakpoints

Follow Apache Ignite design system breakpoints:

```css
/* Mobile */
@media (max-width: 767px) { }

/* Tablet */
@media (max-width: 992px) { }

/* Small Desktop */
@media (max-width: 1199px) { }
```

### Mobile-First Typography

The site uses responsive rem-based typography:
- Desktop: `html { font-size: 62.5%; }` (1rem = 10px)
- Tablet/Mobile: `html { font-size: 56.25%; }` (1rem = 9px)

All component styles automatically scale with this system.

---

## Dark Mode

All components must support dark mode using Docusaurus's `[data-theme='dark']` attribute.

**Pattern:**
```css
.component {
  background: var(--ignite-blue-primary);
  color: var(--ignite-dark-1);
}

[data-theme='dark'] .component {
  background: var(--ifm-color-primary-light);
  color: var(--ifm-font-color-base);
}
```

**Dark Mode Colors:**
- `var(--ifm-color-primary)` - Adjusted for dark backgrounds
- `var(--ifm-background-color)` - Dark background (#1a1a1a)
- `var(--ifm-font-color-base)` - Light text (#e6e6e6)
- `var(--ifm-font-color-secondary)` - Secondary text (#9c9c9c)

---

## Accessibility

### Requirements

- Include `aria-label` props where needed
- Use semantic HTML elements (button, nav, section, article)
- Ensure keyboard navigation support
- Maintain WCAG AA contrast ratios (4.5:1 for normal text)

### Keyboard Navigation

Interactive components must support:
- Enter/Space for activation
- Tab for focus navigation
- Escape for closing modals/dropdowns

---

## Component Examples

### Button Component

Located at: `src/components/common/Button/`

**Features:**
- Multiple variants (primary, secondary, shadow, link)
- Three sizes (small, medium, large)
- Supports href (Link) or onClick (button)
- Disabled state
- Dark mode support

**Usage:**
```tsx
import Button from '@site/src/components/common/Button';

<Button variant="primary" size="large" href="/download">
  Download Apache Ignite
</Button>
```

### Hero Component

Located at: `src/components/common/Hero/`

**Features:**
- Three variants (default, blue, dark)
- Optional subtitle, description, background image
- CTA button support
- Responsive layout

**Usage:**
```tsx
import Hero from '@site/src/components/common/Hero';

<Hero
  title="Apache Ignite"
  subtitle="Distributed Database"
  description="High-performance applications with in-memory speed"
  variant="blue"
  cta={{ text: "Get Started", href: "/download" }}
/>
```

---

## Implementation Guidelines

### Creating New Components

1. **Create directory structure:**
   ```bash
   mkdir src/components/[category]/[ComponentName]
   ```

2. **Create three files:**
   - `ComponentName.tsx` - React component
   - `ComponentName.module.css` - Scoped styles
   - `index.ts` - Barrel export

3. **Define TypeScript interface in `src/types/components.ts`:**
   ```typescript
   export interface ComponentNameProps extends BaseComponentProps {
     // props here
   }
   ```

4. **Use design system tokens:**
   - Colors: `var(--ignite-*)`
   - Spacing: `var(--space-*)`
   - Radius: `var(--border-radius-*)`
   - Transitions: `var(--transition-*)`

5. **Add dark mode support:**
   ```css
   [data-theme='dark'] .component { }
   ```

6. **Add responsive styles:**
   ```css
   @media (max-width: 767px) { }
   ```

7. **Include accessibility:**
   - Semantic HTML
   - ARIA labels
   - Keyboard support

### Code Quality

- Use TypeScript strict mode
- Include JSDoc comments with examples
- Follow React best practices (hooks, functional components)
- Use meaningful variable and function names
- Keep components focused (single responsibility)
- Extract complex logic into custom hooks

---

## Next Steps (Phase 2)

With Phase 1 complete, the component architecture is ready for Phase 2 development:

1. **Create Layout Components** (Header, Footer, MobileMenu)
2. **Build Feature Components** (CodeTabs, VideoShowcase, DownloadWidget)
3. **Develop Page Components** as pages are migrated

All components should follow the patterns and standards defined in this document.

---

**Maintained by:** Development Team
**Last updated:** 2025-10-06
