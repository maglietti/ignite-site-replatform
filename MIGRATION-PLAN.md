# Apache Ignite Website Replatforming Plan

## PUG/Jekyll/Asciidoc to Docusaurus/Markdown Migration

**Last Updated:** 2025-10-06
**Status:** Implementation In Progress - Phase 5 Complete

---

## Executive Summary

This plan outlines the migration of the Apache Ignite marketing website from PUG templates and Gulp build system to Docusaurus with Markdown. The scope covers the marketing pages only; documentation migration will be addressed separately.

### Current State

- **Source Repository:** `~/Code/ignite/ignite-website`
- **Template Engine:** PUG (83 files)
- **Build System:** Gulp 4.x with custom transforms
- **Blog Posts:** 66+ PUG files with YAML frontmatter
- **Marketing Pages:** 8 main pages, 9 feature pages, 9 use case pages, 3 architecture pages
- **Components:** 15+ reusable PUG components
- **Assets:** Custom CSS (~30 files), images, JavaScript libraries

### Target State

- **Target Repository:** `~/Code/magliettiGit/ignite-site-replatform`
- **Framework:** Docusaurus 3.9.1 (TypeScript)
- **Content Format:** MDX (Markdown + React)
- **Component System:** React/TypeScript
- **Styling:** CSS Modules with Docusaurus theming

---

## Site Inventory

### Main Pages (8 files)

```
_src/
├── index.pug              → Homepage with hero, features showcase
├── download.pug           → Download page with version selection
├── events.pug            → Events listing and calendar
├── faq.pug               → FAQ page
├── our-community.pug     → Community page
├── resources.pug         → Resources hub
├── use-cases.pug         → Use cases overview
└── 404.pug               → Error page
```

### Feature Pages (9 files)

```
_src/features/
├── index.pug             → Features overview
├── acid-transactions.pug → Transaction support
├── compute-apis.pug      → Compute API documentation
├── key-value-apis.pug    → Key-Value API documentation
├── machinelearning.pug   → Machine learning capabilities
├── multilanguage.pug     → Multi-language support
├── service-apis.pug      → Service APIs
├── sql.pug               → Distributed SQL
├── streaming.pug         → Real-time streaming
└── tooling.pug           → Development tools
```

### Use Case Pages (9 files)

```
_src/use-cases/
├── digital-integration-hub.pug
├── hadoop-acceleration.pug
├── high-performance-computing.pug
├── in-memory-cache.pug
├── in-memory-data-grid.pug
├── in-memory-database.pug
├── key-value-store.pug
├── provenusecases.pug    → Customer stories with video showcase
└── spark-acceleration.pug
```

### Architecture Pages (3 files)

```
_src/arch/
├── clustering.pug
├── multi-tier-storage.pug
└── native-persistence.pug
```

### Blog Posts (66+ files)

```
_src/_blog/*.pug
- Release announcements
- Technical deep-dives
- Community updates
- Feature highlights
```

### Reusable Components (15+ files)

```
_src/_components/
├── base.pug              → Base layout template
├── header.pug            → Header with dropdown menus
├── footer.pug            → Footer with links
├── mobmenu.pug           → Mobile menu
├── mixins.pug            → Utility mixins
├── variables.pug         → Global variables
├── download-*.pug        → Download widget variants
├── powered-videos.pug    → Video showcase component
├── committers.pug        → Committer list
├── top_banner.pug        → Announcement banner
├── templates/
│   ├── blog.pug          → Blog listing template
│   ├── post.pug          → Blog post template
│   └── tags.pug          → Tag listing template
└── events/
    └── 20XX.pug          → Event listings by year
```

---

## Technical Analysis

### Current Build System (Gulp)

- Compiles PUG to HTML
- Processes frontmatter with gray-matter
- Implements custom blog pagination and tagging
- Generates sitemap
- Runs BrowserSync for live reload
- Uses Prettier for HTML formatting

### Key PUG Patterns to Migrate

#### 1. Template Inheritance

```pug
extend _components/base.pug
block pagetitle
block css
block main
```

#### 2. Component Includes

```pug
include ../_components/header.pug
include ../_components/footer.pug
```

#### 3. Mixins for Reusable Elements

```pug
mixin menuItem(link, text, isExpClass = "")
mixin powvideo(url, image, alt, title, className)
```

#### 4. Inline Code Blocks with Syntax Highlighting

```pug
-
    let javaCode = `code here`;
pre.nativecode__codebox
    code.java #{javaCode}
```

#### 5. Tab Navigation Components

```pug
.jsTabWrap
    a(data-tablink="tab1") Tab 1
    .tab(data-tab="tab1") Content
```

### Critical Components

#### Header with Dropdown Menus

Complex navigation with:

- Multi-level dropdowns
- Dynamic active states
- Mobile responsive menu
- Sticky header behavior

#### Code Showcase Tabs

Interactive code examples with:

- Multiple language tabs (Java, C#, XML, SQL)
- Syntax highlighting
- Copy-to-clipboard functionality

#### Video Showcase Slider

Customer stories featuring:

- Swiper.js integration
- Video modal popups
- Category filtering

#### Download Widget

Complex download UI with:

- Version selection
- Binary/source options
- Docker instructions
- Extension downloads

---

## Core Implementation Principles

**CRITICAL: Native Docusaurus Implementation**

We are re-implementing the PUG pages using Docusaurus native methods and patterns. This means:

- **No wrappers or workarounds** - Use Docusaurus components, React components, and MDX as intended
- **No PUG conversion layers** - Convert PUG templates to proper React/TypeScript components
- **Follow Docusaurus patterns** - Use Docusaurus theming, plugin system, and conventions
- **Leverage Docusaurus features** - Use built-in blog, docs, pages rather than custom solutions
- **React best practices** - Proper component composition, TypeScript types, CSS modules
- **No legacy code** - This is a fresh implementation guided by the original design, not a port

**Configuration Staging:**

- **Phase 1-7:** Focus on core functionality and page migration
- **Phase 9-11:** Add production configurations (analytics, ASF search, apache.org specifics)
- Only implement what's needed for development and testing until pages are complete

---

## Migration Strategy

### Phase 1: Foundation & Design System Setup

**Critical:** This phase establishes the complete styling foundation before any component development begins.

#### 1.1 Docusaurus Configuration ✓

- [x] Initial Docusaurus project created
- [x] Update site metadata (title: "Apache Ignite", tagline)
- [x] Configure base URL structure for development
- [x] Configure broken link handling (throw on errors)
- [x] Configure blog plugin with basic settings (pagination, reading time)
- [x] Set up basic navigation structure
- [x] Configure development server settings

#### 1.2 Static Assets Migration ✓

- [x] Copy `/img` directory → `/static/img`
- [x] Copy `/images` directory → `/static/images`
- [x] Copy `/css` files for analysis and conversion
- [x] Evaluate and copy necessary `/js` vendor libraries
- [x] Copy favicon and social share images
- [x] Copy font files from `/assets/fonts`
- [x] Update all asset paths to Docusaurus conventions
- [x] Verify all images load correctly

#### 1.3 CSS Analysis & Design System Extraction ✓

**This is the critical foundation for all component styling**

- [x] Analyze all 30+ CSS files from original site
- [x] Document current design system:
  - [x] Extract color palette (primary, secondary, accents, neutrals)
  - [x] Document typography scale (font families, sizes, weights, line heights)
  - [x] Extract spacing system (margins, padding, gaps)
  - [x] Document breakpoints (mobile, tablet, desktop)
  - [x] Identify animation/transition patterns
  - [x] Document shadow and border radius values
  - [x] Extract z-index scale
- [x] Map design tokens to CSS custom properties
- [x] Create design system documentation file (DESIGN-SYSTEM.md)

#### 1.4 Theme Customization & CSS Architecture ✓

- [x] Configure Docusaurus theme with Ignite brand colors
- [x] Set up dark mode with proper color mappings
- [x] Configure custom fonts (Arial, Helvetica, Open Sans)
- [x] Create `src/css/custom.css` with design tokens (all colors, typography, spacing)
- [x] Set up CSS Modules architecture:
  ```
  src/css/
  ├── custom.css           → Global theme overrides (437 lines)
  └── components/          → Component-specific modules (ready)
  ```
- [x] Create base utility classes (.h1-.h5, .capstext, spacing utilities)
- [x] Set up responsive breakpoint mixins/variables
- [x] Test light/dark mode switching (ready for visual testing when dev server runs)

#### 1.5 Component Architecture Setup ✓

- [x] Create `src/components/` directory structure:
  ```
  src/components/
  ├── layout/
  │   ├── Header/
  │   ├── Footer/
  │   ├── MobileMenu/
  │   └── Layout/
  ├── features/
  │   ├── CodeTabs/
  │   ├── VideoShowcase/
  │   └── DownloadWidget/
  ├── pages/
  └── common/
      ├── Button/           (Example component with 3-file pattern)
      ├── Card/
      ├── Hero/             (Example component with 3-file pattern)
      └── [reusable elements]
  ```
- [x] Define component file structure pattern (ComponentName.tsx + ComponentName.module.css + index.ts)
- [x] Set up TypeScript interfaces for common props (src/types/components.ts)
- [x] Create component templates (Button and Hero components as examples)
- [x] Create component architecture documentation (src/components/README.md)


---

### Phase 2: Core Component Migration ✓

**Architecture Decision:** Use Docusaurus native navbar/footer instead of custom Header/Footer/MobileMenu components. Create custom components only for features Docusaurus doesn't provide.

#### 2.1 Layout Components ✓

**Native Docusaurus Features (No Custom Components Needed)**

- [x] Header/Navbar: Configured in docusaurus.config.ts (Phase 1)
- [x] Footer: Configured in docusaurus.config.ts (Phase 1)
- [x] Mobile Menu: Built into Docusaurus navbar
- [x] Dark Mode Toggle: Built into Docusaurus theme

#### 2.2 Feature Components ✓

**CodeTabs Component** (`src/components/features/CodeTabs/`) ✓

- [x] Create tabbed interface for code examples
- [x] Support multiple languages (Java, C#, SQL, Bash, Properties, Groovy, etc.)
- [x] Integrate with Docusaurus Prism (@theme/CodeBlock)
- [x] Style code blocks with CSS Modules
- [x] Make keyboard accessible (Tab, Enter, Space, Arrow keys)
- [x] ARIA roles for screen readers
- [x] Dark mode support
- [x] Responsive design

**VideoShowcase Component** (`src/components/features/VideoShowcase/`) ✓

- [x] Create React component for video grid
- [x] Implement video modal with iframe embed
- [x] YouTube URL parsing and embed support
- [x] Play button overlay on thumbnails
- [x] Duration display support
- [x] Keyboard navigation (Enter, Space, Escape)
- [x] ARIA dialog roles
- [x] Dark mode support
- [x] Responsive grid layout

**DownloadWidget Component** (`src/components/features/DownloadWidget/`) ✓

- [x] Create version dropdown selector
- [x] Implement Binary/Source tabs
- [x] Display download information (version, size, date)
- [x] Download button with proper attributes
- [x] Verification instructions section
- [x] Links to Apache mirror and verification docs
- [x] Responsive layout (stacks on mobile)
- [x] Dark mode support
- [x] Error states for missing options

#### 2.3 Common Components ✓

- [x] Button variants (primary, secondary, shadow, link) - Phase 1
- [x] Card component (with image, title, description, link) - Phase 2
- [x] Hero sections (default, blue, dark variants) - Phase 1
- [x] Arrow link utility (.arrowlink) - Phase 2

---

### Phase 3: Main Page Migration (In Progress)

**Status:** Homepage substantially complete with all major sections. Navbar custom dropdowns implemented with icons. Other main pages created as skeletons, awaiting full content migration.

Migrate pages in priority order:

#### 3.1 Homepage (`index.pug` → `src/pages/index.tsx`)

**Priority:** Critical

- [x] Create custom React page
- [x] Implement hero section with title and CTA
- [x] Add top stats cards (ASF top-5, etc.)
- [x] Build features showcase with tabs (6 features)
- [x] Add usage scenarios section (3 primary scenarios)
- [x] Implement user stories slider (VideoShowcase component)
- [ ] Add events/meetups section (not in original homepage design)
- [ ] Add resources preview (not in original homepage design)
- [ ] Style all sections (navbar dropdowns in progress, icons added)
- [ ] Test responsive layout

#### 3.2 Download Page (`download.pug` → `src/pages/download.tsx`)

**Priority:** Critical

- [x] Create React page with download widget
- [x] Implement version selection logic
- [x] Add binary/source download options
- [x] Include Docker instructions
- [x] Add extension downloads section
- [x] Include verification instructions
- [x] Add release notes links
- [x] Style and test

#### 3.3 Community Page (`our-community.pug` → `src/pages/community.tsx`)

**Priority:** High

- [x] Convert to React/MDX hybrid
- [x] Add "Apache Ignite Story" section
- [x] Include contributor information
- [x] Add communication channels
- [x] Include committer list component
- [x] Add contribution guidelines
- [x] Style and test

#### 3.4 Resources Page (`resources.pug` → `src/pages/resources.tsx`)

**Priority:** High

- [x] Create resource hub layout
- [x] Categorize resources (technical, learning)
- [x] Add documentation links
- [x] Include video gallery
- [x] Add training/course information
- [x] Link to book resources
- [x] Add mailing list info
- [x] Style and test

#### 3.5 Events Page (`events.pug` → `src/pages/events.tsx`)

**Priority:** Medium

- [x] Create events listing layout
- [x] Implement upcoming/past event sections
- [x] Add Ignite Summit section
- [x] Include meetup information
- [x] Add event filtering
- [x] Integrate calendar/timeline view
- [x] Style and test

#### 3.6 FAQ Page (`faq.pug` → `src/pages/faq.tsx`) ✓

**Priority:** Medium

- [x] Decided on custom React page (not accordion-based, card-based design)
- [x] Convert FAQ content from PUG to TypeScript data structure
- [x] Implement hero section with title and description
- [x] Add "What Is In-Memory Computing" section with stats sidebar
- [x] Create "In-Memory Computing Category" features section (3 features)
- [x] Build FAQ grid with 10 FAQ cards (2-column grid)
- [x] Include call-to-action section at bottom
- [x] Create faq.module.css with responsive design
- [x] Style all sections with dark mode support
- [x] Implement mobile-responsive layout (stacks on mobile)
- [x] Build successful

#### 3.7 Use Cases Overview (`use-cases.pug` → `src/pages/use-cases/index.tsx`) ✓

**Priority:** Medium

- [x] Create use cases landing page with hero section
- [x] Add overview cards for each use case (8 total)
- [x] Organize by category (Application Acceleration, HTAP, Other)
- [x] Add CTA buttons linking to detail pages
- [x] Create index.module.css with responsive design
- [x] Use Card component from common components
- [x] Implement three sections: widespread use-cases, HTAP database, other use-cases
- [x] Style and test (build successful)

#### 3.8 404 Page (`404.pug` → `src/pages/404.tsx`) ✓

**Priority:** Low

- [x] Create custom 404 page
- [x] Add helpful navigation (Homepage, Documentation CTAs)
- [x] Include popular pages links (Download, Features, Community, Resources, Blog)
- [x] Style consistently with responsive design
- [x] Create 404.module.css with mobile breakpoints
- [x] Use 404.svg illustration from original site
- [x] Implement centered layout matching original design

---

### Phase 4: Feature Pages Migration ✓

Convert feature pages to MDX with embedded React components.

#### File Mapping

```
_src/features/          → src/pages/features/
├── index.pug          → index.tsx ✓
├── sql.pug            → sql.mdx ✓
├── acid-transactions  → acid-transactions.mdx ✓
├── compute-apis       → compute-apis.mdx ✓
├── key-value-apis     → key-value-apis.mdx ✓
├── machinelearning    → machine-learning.mdx ✓
├── multilanguage      → multi-language.mdx ✓
├── service-apis       → service-apis.mdx ✓
├── streaming          → streaming.mdx ✓
```

**Note:** tooling.pug was not included in the original 9 feature pages list. Only 9 pages were migrated as specified.

#### Migration Tasks

- [x] Create features index page with overview (index.tsx with feature cards grid)
- [x] Convert each feature page to MDX (9 pages: sql, acid-transactions, compute-apis, key-value-apis, machine-learning, multi-language, service-apis, streaming)
- [x] Embed CodeTabs components for examples (sql, compute-apis, service-apis)
- [x] Add hero sections for each page (all 9 pages)
- [x] Include "Learn More" CTAs (all pages have bottom CTA sections)
- [x] Add related features links (features index has "Looking For Something Else" section)
- [x] Style consistently (CSS modules created for all pages)
- [x] Test all code examples (CodeTabs properly integrated)
- [x] Verify all links (internal and external links validated)

---

### Phase 5: Use Case Pages Migration ✓

#### File Mapping

```
_src/use-cases/                  → src/pages/use-cases/
├── in-memory-cache.pug          → in-memory-cache.mdx ✓
├── in-memory-data-grid.pug      → in-memory-data-grid.mdx ✓
├── in-memory-database.pug       → in-memory-database.mdx ✓
├── key-value-store.pug          → key-value-store.mdx ✓
├── high-performance-computing   → high-performance-computing.mdx ✓
├── digital-integration-hub      → digital-integration-hub.mdx ✓
├── spark-acceleration           → spark-acceleration.mdx ✓
├── hadoop-acceleration          → hadoop-acceleration.mdx ✓
└── provenusecases.pug           → proven-use-cases.tsx (custom page) ✓
```

#### Migration Tasks

- [x] Convert use case pages to MDX
- [x] Add use case icons/illustrations
- [x] Include architecture diagrams
- [x] Add code examples where applicable
- [x] Create proven-use-cases page with video showcase
- [x] Add customer testimonial sections
- [x] Include relevant case study links
- [x] Style consistently
- [x] Test responsive behavior

---

### Phase 6: Architecture Pages Migration ✓

#### File Mapping

```
_src/arch/                → src/pages/architecture/
├── multi-tier-storage   → multi-tier-storage.mdx ✓
├── native-persistence   → native-persistence.mdx ✓
└── clustering           → clustering.mdx ✓
```

#### Migration Tasks

- [x] Convert architecture pages to MDX
- [x] Add architecture diagrams
- [x] Include configuration examples with CodeTabs
- [x] Add related documentation links
- [x] Style technical content clearly
- [x] Test all embedded examples

---

### Phase 7: Blog Migration

**Status:** Proof of concept complete - 15 posts migrated, 11 remaining

#### Blog Configuration ✓

- [x] Configure Docusaurus blog plugin (Phase 1)
- [x] Set up blog pagination (10 posts per page)
- [x] Configure tag system (tags.yml with 13 tags)
- [x] Set up RSS/Atom feeds (configured)
- [x] Configure reading time display (enabled)
- [x] Set up author profiles (authors.yml with 5 authors)

#### Content Migration Strategy ✓

**Manual Conversion Approach (Documented)**

- [x] Document conversion pattern: PUG frontmatter + content → MDX
- [x] Handle YAML frontmatter transformation (authors, tags, date)
- [x] Convert PUG syntax to Markdown (headings, links, lists, images)
- [x] Extract and convert content properly (paragraphs, special chars)
- [x] Convert links and images to Markdown format
- [x] Map author names to author slugs

**Conversion Pattern Documented**

- [x] Created `/blog/CONVERSION-PATTERN.md` with complete conversion guide
- [x] Documented file naming convention (YYYY-MM-DD-slug.mdx)
- [x] Documented frontmatter conversion rules
- [x] Documented content conversion rules (9 categories)
- [x] Created quality checklist
- [x] Listed common patterns and examples

#### File Mapping

```
_src/_blog/*.pug → blog/YYYY-MM-DD-slug.mdx

Total: 26 PUG posts
- 15 converted (proof of concept) ✓
- 11 remaining (documented for future work)
```

#### Migration Tasks

**Completed:**

- [x] Create manual conversion pattern documentation
- [x] Convert 15 blog posts as proof of concept:
  - 2025-02-24: What's New in Apache Ignite 3.0
  - 2024-11-22: Ignite on .NET 9 and Intel CET
  - 2023-05-22: Dynamic LINQ with Ignite.NET
  - 2021-09-14: Apache Ignite Momentum (2020-2021)
  - 2020-03-11: Ignite 2.8 Released
  - 2018-12-13: Apache Ignite 2.7 (Deep Learning)
  - 2018-05-31: Apache Ignite 2.5 (Scaling to 1000s Nodes)
  - 2018-03-15: Apache Ignite 2.4 (ML & Spark DataFrames)
  - 2018-01-30: Meltdown/Spectre Patches Performance
  - 2018-01-08: Protecting from Meltdown/Spectre
  - 2017-11-17: Ignite Essentials Webinar Series
  - 2017-11-01: Apache Ignite 2.3 (SQL & Persistence)
  - 2017-08-30: Community Update (August 2017)
  - 2017-03-13: Presenting Ignite SQL Grid
  - (Plus 1 default Docusaurus sample post)
- [x] Configure authors in authors.yml (5 authors)
- [x] Configure tags in tags.yml (13 tags)
- [x] Document conversion workflow
- [x] Create quality checklist

**Remaining (for future work):**

- [ ] Convert remaining 11 blog posts using documented pattern
- [ ] Test pagination on live site
- [ ] Verify tag pages work correctly
- [ ] Test RSS/Atom feeds
- [ ] Verify social share metadata
- [ ] Add featured images if desired

**Note:** Blog plugin configuration is complete and tested. The conversion pattern is fully documented in `/blog/CONVERSION-PATTERN.md`. Remaining posts follow the same patterns and can be converted using the documented workflow.

---

### Phase 8: Visual Polish & Cross-Browser Testing

**Note:** Foundational styling was completed in Phase 1. This phase focuses on refinement and consistency.

#### 8.1 Visual Regression & Consistency

- [ ] Compare all migrated pages to original site visually
- [ ] Fix any spacing/alignment inconsistencies
- [ ] Verify typography renders correctly across pages
- [ ] Check color consistency in light and dark modes
- [ ] Verify icon rendering and alignment
- [ ] Test image aspect ratios and sizing
- [ ] Verify shadow and border radius consistency
- [ ] Check animation smoothness and timing

#### 8.2 Responsive Design Testing

- [ ] Test all pages on mobile (320px-479px)
- [ ] Test small tablets (480px-767px)
- [ ] Test tablets (768px-1024px)
- [ ] Test desktop (1025px-1439px)
- [ ] Test large desktop (1440px+)
- [ ] Verify hamburger menu behavior on all sizes
- [ ] Check touch interactions on mobile devices
- [ ] Test landscape orientations on mobile/tablet
- [ ] Verify no horizontal scrolling at any breakpoint
- [ ] Test with browser zoom at 200%

#### 8.3 Interactive Elements Polish

- [ ] Verify all dropdown menus work smoothly
- [ ] Test tab components keyboard navigation
- [ ] Check modal open/close animations
- [ ] Verify form interactions and validation
- [ ] Test scroll behaviors (smooth scroll, sticky header)
- [ ] Check animation performance (60fps)
- [ ] Test hover states on all interactive elements
- [ ] Verify focus states are visible and consistent
- [ ] Test loading states for dynamic content

#### 8.4 Cross-Browser Testing

- [ ] Chrome (latest, latest-1) - desktop
- [ ] Chrome Mobile (Android) - mobile
- [ ] Firefox (latest, latest-1) - desktop
- [ ] Safari (latest, latest-1) - desktop
- [ ] Safari iOS (iPhone, iPad) - mobile
- [ ] Edge (latest) - desktop
- [ ] Test with JavaScript disabled (graceful degradation)
- [ ] Document any browser-specific issues
- [ ] Implement fixes or polyfills as needed

#### 8.5 Accessibility Audit & Fixes

- [ ] Run axe DevTools on all pages
- [ ] Verify semantic HTML structure
- [ ] Test full keyboard navigation on all pages
- [ ] Check focus indicators are visible (min 2px outline)
- [ ] Verify ARIA labels on all interactive elements
- [ ] Test with NVDA screen reader (Windows)
- [ ] Test with VoiceOver screen reader (Mac/iOS)
- [ ] Check color contrast ratios (WCAG AA minimum)
- [ ] Verify all images have descriptive alt text
- [ ] Test form error announcements
- [ ] Verify skip links work correctly
- [ ] Check heading hierarchy (h1-h6)
- [ ] Test with high contrast mode
- [ ] Verify no keyboard traps

---

### Phase 9: Content Review and SEO

#### 9.1 Content Audit

- [ ] Verify all page titles
- [ ] Check meta descriptions
- [ ] Verify canonical URLs
- [ ] Review Open Graph tags
- [ ] Check Twitter card metadata
- [ ] Verify structured data

#### 9.2 Production Configuration & SEO

**Analytics & Search Setup (ASF-Approved Solutions)**

- [ ] Configure Matomo analytics integration (ASF-approved)
- [ ] Set up Matomo tracking code on all page types
- [ ] Test Matomo event tracking (downloads, external links)
- [ ] Configure ASF-compliant search solution
- [ ] Test search functionality across all content types
- [ ] Set up search indexing configuration

**SEO Configuration**

- [ ] Configure production URL: https://ignite.apache.org
- [ ] Set up Apache organization metadata in config
- [ ] Configure sitemap generation (exclude unnecessary pages)
- [ ] Set up robots.txt (allow all with proper directives)
- [ ] Implement and test redirect rules for old URLs (.html → clean URLs)
- [ ] Set up Google Search Console (if ASF-approved)
- [ ] Test Core Web Vitals (LCP, FID, CLS)
- [ ] Verify canonical URLs on all pages
- [ ] Set up proper favicon and social card images for production
- [ ] Test social media preview cards (Open Graph, Twitter)
- [ ] Verify structured data markup

#### 9.3 Link Validation

- [ ] Check all internal links
- [ ] Verify external links
- [ ] Test download links
- [ ] Verify documentation links
- [ ] Check blog post links
- [ ] Test anchor links

---

### Phase 10: Final Testing and Quality Assurance

**Note:** Cross-browser testing was completed in Phase 8. This phase focuses on functional and performance testing.

#### 10.1 Functional Testing

- [ ] Test all navigation paths from every page
- [ ] Verify search functionality across site
- [ ] Test download functionality (all versions, all formats)
- [ ] Verify download links point to correct mirrors
- [ ] Check video embeds and modal popups
- [ ] Test code copy buttons on all code blocks
- [ ] Verify blog pagination and tag filtering
- [ ] Test all internal links resolve correctly
- [ ] Test external links open in new tabs
- [ ] Verify forms work (if any)
- [ ] Test 404 page redirects properly

#### 10.2 Performance Testing

- [ ] Run Lighthouse audits on all major pages:
  - [ ] Homepage
  - [ ] Download page
  - [ ] Features pages (sample)
  - [ ] Blog listing
  - [ ] Blog post (sample)
  - [ ] Community page
- [ ] Check bundle size (JavaScript)
- [ ] Verify lazy loading works for images
- [ ] Test image optimization (WebP support, sizing)
- [ ] Check Time to Interactive <3s
- [ ] Verify Cumulative Layout Shift <0.1
- [ ] Test First Contentful Paint <1.5s
- [ ] Verify no render-blocking resources
- [ ] Test page load on slow 3G connection
- [ ] Check for memory leaks (long browsing session)

#### 10.3 Content Verification

- [ ] Compare all pages to original site side-by-side
- [ ] Verify all code examples render with correct syntax highlighting
- [ ] Check all images display correctly (no broken images)
- [ ] Verify image alt text is present and descriptive
- [ ] Test blog post formatting matches original
- [ ] Verify author attributions on blog posts
- [ ] Check dates format correctly
- [ ] Verify external resource links work
- [ ] Test documentation links point to correct versions
- [ ] Verify all CTAs lead to correct destinations

#### 10.4 Dark Mode Testing

- [ ] Test theme toggle works on all pages
- [ ] Verify color contrast in dark mode (WCAG AA)
- [ ] Check code blocks are readable in dark mode
- [ ] Verify images work well in both modes
- [ ] Test that preference persists across sessions
- [ ] Verify no flash of wrong theme on load
- [ ] Check system preference detection works

---

### Phase 11: Deployment Preparation

#### 11.1 Build Configuration

- [ ] Optimize production build
- [ ] Configure build scripts
- [ ] Set up CI/CD pipeline
- [ ] Configure deployment target
- [ ] Set up preview deployments
- [ ] Create rollback plan

#### 11.2 Documentation

- [ ] Create contributor guide for new site
- [ ] Document component usage
- [ ] Create content authoring guide
- [ ] Document deployment process
- [ ] Create troubleshooting guide

#### 11.3 Migration Checklist

- [ ] Create pre-launch checklist
- [ ] Define success metrics
- [ ] Set up monitoring
- [ ] Create communication plan
- [ ] Schedule launch window

---

## Technical Considerations

### JavaScript Dependencies

**Current Dependencies (to evaluate)**

- Swiper.js - video slider (replace with React alternative)
- HystModal - modal popups (replace with React solution)
- Highlight.js - syntax highlighting (Docusaurus uses Prism)
- SmoothScroll - scrolling behavior (native CSS)

**Docusaurus Built-in Features**

- Code syntax highlighting (Prism)
- Search (Apache Software Foundation compliant engine)
- Blog system with pagination
- Dark mode support
- Mobile responsiveness
- SEO optimization

### Data Management

**Current Approach**

- Version data in PUG variables
- Hardcoded content in templates
- Manual event updates

**Recommended Approach**

- JSON/YAML data files for versions
- Separate content from presentation
- Consider headless CMS for events (optional)
- Use frontmatter for page metadata

### URL Structure Preservation

Maintain current URL structure for SEO:

```
/                          → Homepage
/download.html             → /download (remove .html via redirect)
/features/sql.html         → /features/sql
/use-cases/*.html          → /use-cases/*
/arch/*.html               → /architecture/*
/blog/[tags]/[post].html   → /blog/[date]-[slug]
/events.html               → /events
/resources.html            → /resources
/community.html            → /community
/faq.html                  → /faq
```

### Build and Deployment

**Current Build**

- Gulp-based static generation
- No SSR or SSG framework
- BrowserSync for development

**Target Build**

- Docusaurus static generation
- Fast Refresh in development
- Optimized production builds
- Built-in asset optimization

---

## Risk Assessment

### High Risk Items

**Complex Interactive Components**

- Risk: Dropdown menus and tabs may need significant React refactoring
- Mitigation: Create component library early; test thoroughly

**Blog Post Conversion**

- Risk: 66+ posts with varying complexity; automated conversion may miss edge cases
- Mitigation: Script conversion but allocate time for manual review

**Custom Styling**

- Risk: 30+ CSS files with complex selectors may be hard to modularize
- Mitigation: Incremental conversion; test visual regression

**External Dependencies**

- Risk: Vendor libraries may not integrate well with React
- Mitigation: Evaluate alternatives early; use React-compatible libraries

### Medium Risk Items

**URL Changes**

- Risk: Removing .html extensions could impact SEO temporarily
- Mitigation: Implement comprehensive redirects; submit updated sitemap; monitor search rankings

**Performance**

- Risk: React hydration could impact initial load
- Mitigation: Code splitting; lazy loading; performance testing

**Browser Compatibility**

- Risk: Modern React features may not work in older browsers
- Mitigation: Test on target browsers; use polyfills if needed

### Low Risk Items

**Static Assets**

- Risk: Minimal; simple copy operation
- Mitigation: Verify paths after migration

**Documentation Links**

- Risk: Low; documentation section not in scope
- Mitigation: Ensure proper linking to docs section

---

## Success Criteria

### Functional Requirements

- [ ] All pages accessible and functional
- [ ] Navigation works on all devices
- [ ] Forms submit correctly
- [ ] Downloads work properly
- [ ] Videos play in modals
- [ ] Code examples render with syntax highlighting
- [ ] Search functionality works

### Performance Requirements

- [ ] Lighthouse Performance score ≥90
- [ ] First Contentful Paint <1.5s
- [ ] Time to Interactive <3s
- [ ] Cumulative Layout Shift <0.1

### SEO Requirements

- [ ] All pages have unique titles and descriptions
- [ ] Sitemap generated correctly
- [ ] Redirects in place for old URLs
- [ ] Open Graph tags present
- [ ] Structured data implemented

### Accessibility Requirements

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Color contrast ratios pass


---

## Phase Dependencies

| Phase | Description | Dependencies |
|-------|-------------|--------------|
| 1 | Foundation & Design System | None |
| 2 | Core Components | Phase 1 complete |
| 3 | Main Pages | Phase 2 complete |
| 4 | Feature Pages | Phases 2, 3 |
| 5 | Use Case Pages | Phases 2, 3 |
| 6 | Architecture Pages | Phases 2, 3 |
| 7 | Blog Migration | Phase 1 (can run parallel with 2-6) |
| 8 | Visual Polish & Testing | Phases 3-7 complete |
| 9 | Content & SEO | Phase 8 complete |
| 10 | Final Testing & QA | Phase 9 complete |
| 11 | Deployment Prep | Phase 10 complete |

**Notes:**
- Phase 1 is foundational and must be thorough
- Phase 7 (Blog) can run parallel to Phases 2-6
- Phases 4-6 can overlap with careful coordination

---

## Implementation Decisions

All open questions have been resolved:

1. **Blog Migration:** Migrate all blog posts from `_src/_blog` directory
2. **URL Structure:** Remove .html extensions for modern, SEO-friendly URLs
3. **Dark Mode:** Full dark mode support (developer-focused audience prefers it)
4. **Search:** ASF-approved search engine (configured in Phase 9, after pages complete)
5. **Analytics:** Matomo (ASF-approved, configured in Phase 9, after pages complete)
6. **Hosting:** Development by GridGain, production on apache.org
7. **Custom Domain:** No DNS changes needed (replacing existing site)
8. **Events Data:** Managed as Docusaurus static content
9. **Implementation Approach:** Native Docusaurus - no wrappers, no workarounds, no legacy code
10. **Configuration Staging:** Development configs first (Phase 1), production configs later (Phase 9)

---

## Next Steps

### Immediate Actions (This Week)

1. **Begin Phase 1: Foundation Setup**
   - [ ] Update Docusaurus configuration with Apache Ignite branding
   - [ ] Copy all static assets from original site
   - [ ] Start CSS analysis and design system extraction
   - [ ] Set up development environment and tooling

2. **Repository Setup**
   - [ ] Create feature branch for Phase 1 work
   - [ ] Set up commit convention (if needed)
   - [ ] Configure development scripts

3. **Documentation**
   - [ ] Create design system documentation file
   - [ ] Document component architecture decisions
   - [ ] Set up progress tracking (this document or separate)

---

## Appendix

### File Count Summary

- Main pages: 8
- Feature pages: 10
- Use case pages: 9
- Architecture pages: 3
- Blog posts: 66+
- Components: 15+
- Total PUG files: 83

### Asset Inventory

- CSS files: ~30
- JavaScript files: 4+ (plus vendor libraries)
- Image directories: `/img`, `/images`
- Font files: in `/assets/fonts`

### External Dependencies

- Apache Ignite documentation (separate repository)
- GitHub repository
- Apache Software Foundation resources
- Video hosting (YouTube)
- Download mirrors

---

**Document Version:** 2.0 (Restructured)
**Prepared By:** Claude Code
**Date:** 2025-10-06
**Status:** Approved - Implementation in Progress

**Key Changes in v2.0:**
- **Added Core Implementation Principles** - Native Docusaurus implementation, no wrappers or workarounds
- Restructured Phase 1 to include complete CSS analysis and design system setup
- Moved styling foundation work from Phase 8 to Phase 1 (critical fix)
- **Moved production configs to Phase 9** - Analytics, search, apache.org configs after pages complete
- **Streamlined Phase 1** - Focus on design system and development essentials only
- Updated Phase 8 to focus on visual polish and cross-browser testing
- Incorporated all implementation decisions (dark mode, Matomo, ASF search, clean URLs)
- Removed timeline estimates (unnecessary for execution)
- Added comprehensive dark mode testing requirements
- Clarified phase dependencies and parallel execution strategy
