# Apache Ignite Design System

**Version:** 1.0
**Date:** 2025-10-06
**Source:** Extracted from original PUG/CSS site

This document defines the design system extracted from the original Apache Ignite website. All values are documented here to ensure consistency during the Docusaurus migration.

---

## Color Palette

### Brand Colors

```css
--ignite-blue-primary: #0070cc;    /* Primary brand blue */
--ignite-blue-dark: #0061b0;       /* Hover/active states */
--ignite-blue-light: #91c2ea;      /* Light blue accents */
--ignite-blue-pale: #e8f2fa;       /* Very light blue backgrounds */

--ignite-red-primary: #ed1c24;     /* Primary red */
--ignite-red-dark: #ce2034;        /* Red hover/active */
--ignite-red-light: #f4898d;       /* Light red */
--ignite-red-pale-1: #ffcfd1;      /* Very light red */
--ignite-red-pale-2: #feeff0;      /* Extremely light red */
```

### Neutral Colors

```css
--ignite-grey-1: #f6f6f6;          /* Lightest grey - backgrounds */
--ignite-grey-2: #e6e6e6;          /* Light grey - borders */
--ignite-grey-3: #f0f0f0;          /* Light grey - alternate */
--ignite-grey-4: #9c9c9c;          /* Medium grey - secondary text */
--ignite-grey-5: #6e6e6e;          /* Dark grey - body text */

--ignite-dark-1: #2d2d2d;          /* Primary dark - headings */
--ignite-dark-2: #6e6e6e;          /* Secondary dark */
--ignite-dark-3: #9c9c9c;          /* Tertiary dark */
```

### Semantic Colors

```css
--ignite-white: #ffffff;
--ignite-black: #000000;
```

---

## Typography

### Font Families

```css
--font-family-base: Arial, Helvetica, sans-serif;
--font-family-open-sans: 'Open Sans', Arial, Helvetica, sans-serif; /* Used in some sections */
```

### Font Size Scale

**Base:** `html { font-size: 10px; }` (1rem = 10px)
**Body:** `body { font-size: 1.6rem; }` (16px)

```css
--font-size-base: 1.6rem;          /* 16px - body text */
--font-size-h1: 8rem;              /* 80px */
--font-size-h2: 6rem;              /* 60px */
--font-size-h3: 4.8rem;            /* 48px */
--font-size-h4: 3rem;              /* 30px */
--font-size-h5: 2.4rem;            /* 24px */
--font-size-small: 1.4rem;         /* 14px */
--font-size-large: 2rem;           /* 20px */
```

### Line Heights

```css
--line-height-base: 2.4rem;        /* Body text */
--line-height-h1: 9.4rem;
--line-height-h2: 7rem;
--line-height-h3: 6.4rem;
--line-height-h4: 4rem;
--line-height-h5: 3.4rem;
--line-height-tight: 1.15;
--line-height-normal: 1.5;
```

### Font Weights

```css
--font-weight-normal: 400;
--font-weight-bold: 700;
```

---

## Spacing System

### Container & Layout

```css
--container-max-width: 1200px;     /* Main content container */
--container-padding: 45px;         /* Desktop padding */
--container-padding-mobile: 15px;  /* Mobile padding */
```

### Spacing Scale

Pattern observed: Multiples of 0.5rem, 1rem, 2rem, etc.

```css
--space-xs: 0.5rem;                /* 5px */
--space-sm: 1rem;                  /* 10px */
--space-md: 2rem;                  /* 20px */
--space-lg: 3rem;                  /* 30px */
--space-xl: 4rem;                  /* 40px */
--space-2xl: 5rem;                 /* 50px */
--space-3xl: 6rem;                 /* 60px */
--space-4xl: 8rem;                 /* 80px */
```

---

## Responsive Breakpoints

### Breakpoint Values

```css
--breakpoint-mobile: 767px;        /* max-width for mobile */
--breakpoint-tablet: 992px;        /* max-width for tablet */
--breakpoint-desktop: 1199px;      /* max-width for small desktop */
--breakpoint-large: 1200px;        /* min-width for large desktop */
```

### Media Query Usage

```css
/* Mobile: max-width: 767px */
@media (max-width: 767px) { ... }

/* Tablet: max-width: 992px */
@media (max-width: 992px) { ... }

/* Small Desktop: max-width: 1199px */
@media (max-width: 1199px) { ... }

/* Large Desktop: min-width: 1200px */
@media (min-width: 1200px) { ... }
```

**Mobile-first approach:** Adjust font-size on `<html>` at breakpoints:
- Desktop: `10px`
- Tablet (< 1200px): `9px`

---

## Components

### Buttons

```css
.button {
  height: 5rem;                    /* 50px */
  padding: 0 1rem;
  font-size: 1.6rem;
  background-color: var(--ignite-blue-primary);
  color: #fff;
  border-radius: 1rem;             /* 10px */
  border: none;
  cursor: pointer;
  transition: background 0.1s ease-in-out;
}

.button:hover {
  background: var(--ignite-blue-dark);
}

.button--shadow {
  background: #fff;
  color: var(--ignite-blue-primary);
  border: 1px solid var(--ignite-blue-primary);
}
```

### Header

```css
.hdr {
  height: 126px;                   /* Desktop */
  border-bottom: 1px solid var(--ignite-grey-3);
}

.hdr__wrap {
  height: 96px;
  padding: 0 45px;                 /* Desktop */
}

/* Responsive */
@media (max-width: 1199px) {
  .hdr { height: 80px; }
  .hdr__wrap { height: 80px; padding: 0 15px; }
}
```

---

## Border Radius

```css
--border-radius-sm: 0.3rem;        /* 3px - small elements */
--border-radius-md: 0.5rem;        /* 5px - medium elements */
--border-radius-lg: 1rem;          /* 10px - buttons, cards */
--border-radius-xl: 2rem;          /* 20px - large cards */
```

---

## Shadows

Pattern: Subtle shadows for elevation

```css
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.15);
```

---

## Z-Index Scale

```css
--z-index-dropdown: 10;
--z-index-header: 120;
--z-index-modal-shadow: 3500;
--z-index-modal: 4000;
```

---

## Transitions & Animations

### Timing Functions

```css
--transition-fast: 0.1s ease-in-out;
--transition-normal: 0.25s ease;
--transition-slow: 0.3s ease;
```

### Common Transitions

```css
transition: background 0.1s ease-in-out;
transition: color 0.1s ease-in-out;
transition: transform 0.25s ease;
```

---

## Utility Classes

### Display

```css
.flexi {
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
}
```

### Typography

```css
.capstext {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.fz20 {
  font-size: 2rem;
}
```

### Spacing

```css
.pb-1 { padding-bottom: 1rem; }
.pb-2 { padding-bottom: 2rem; }
.pb-3 { padding-bottom: 3rem; }
.pb-5 { padding-bottom: 5rem; }
.pt-2 { padding-top: 2rem; }
.pt-3 { padding-top: 3rem; }
.pt-5 { padding-top: 5rem; }
```

---

## Dark Mode Considerations

The original site does not have dark mode. For Docusaurus dark mode support, we'll need to define dark mode color mappings:

### Proposed Dark Mode Colors

```css
/* Dark mode specific - to be implemented */
--dark-bg-primary: #1a1a1a;
--dark-bg-secondary: #2d2d2d;
--dark-text-primary: #e6e6e6;
--dark-text-secondary: #9c9c9c;
--dark-border: #3d3d3d;

/* Brand colors remain the same but may need lightening for dark backgrounds */
--dark-blue-primary: #2196f3;      /* Lighter blue for dark mode */
--dark-red-primary: #f44336;       /* Lighter red for dark mode */
```

---

## Implementation Notes

### For Docusaurus Custom CSS

1. **Map to CSS Custom Properties:** All values above should be defined as CSS variables in `src/css/custom.css`
2. **Override Docusaurus Variables:** Map Ignite colors to Docusaurus theme variables
3. **Responsive Typography:** Use `clamp()` or media queries for responsive font sizing
4. **Component Styling:** Use CSS Modules for component-specific styles
5. **Utility Classes:** Create utility classes for common patterns

### Color Accessibility

- Ensure all text/background combinations meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- Test color contrast in both light and dark modes
- Use browser tools or online checkers to verify

---

## Page-Specific Patterns

### Homepage (frontpage.css)
- Hero section with large headings
- Feature showcase with tabs
- Video slider for customer stories
- Event cards with colored backgrounds

### Features Pages
- Colored hero sections (blue or dark)
- Code examples with syntax highlighting
- Tabbed code examples (Java, C#, XML, SQL)
- "Learn More" CTAs

### Blog
- Post listing with pagination
- Tag filtering
- Reading time display
- Author information

---

## Assets Inventory

### Images
- **Location:** `/static/img/`
- **Count:** 38 items (including subdirectories)
- **Key files:** `favicon.ico`, logos (light/dark variants)

### Fonts
- **Location:** `/static/fonts/open-sans/`
- **Family:** Open Sans (multiple weights)

---

## Next Steps

1. Create `src/css/custom.css` with all design tokens
2. Override Docusaurus theme variables
3. Create CSS Modules structure for components
4. Implement utility classes
5. Test responsive behavior at all breakpoints
6. Implement and test dark mode

---

**Document maintained by:** Claude Code
**Last updated:** 2025-10-06
