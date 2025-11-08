# Website Design Document

## Project Overview

**Project Name:** YushinB Personal Portfolio Website  
**Platform:** Jekyll Static Site Generator with Minimal Mistakes Theme  
**Owner:** Vu Nguyen Thanh Binh (YushinB)  
**Repository:** Datvu.github.io  
**Live URL:** https://yushinb.github.io  
**Last Updated:** November 8, 2025

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Site Architecture](#site-architecture)
3. [Layout Structure](#layout-structure)
4. [Responsive Design](#responsive-design)
5. [Typography System](#typography-system)
6. [Spacing & Layout Grid](#spacing--layout-grid)
7. [Theme & Color System](#theme--color-system)
8. [Component Library](#component-library)
9. [Navigation System](#navigation-system)
10. [Performance Optimization](#performance-optimization)
11. [Accessibility Features](#accessibility-features)
12. [Browser Support](#browser-support)

---

## 1. Design Philosophy

### Core Principles

- **Clean & Modern:** Minimalist design with emphasis on content readability
- **Professional:** Technical portfolio showcasing software engineering expertise
- **Responsive-First:** Mobile-first approach ensuring optimal experience across all devices
- **Accessible:** WCAG 2.1 AA compliant with reduced motion and high contrast support
- **Performance-Focused:** Optimized for fast load times and smooth interactions

### Design Goals

1. Present technical content in an easily digestible format
2. Showcase professional experience and projects effectively
3. Maintain visual hierarchy and content flow
4. Provide excellent reading experience on all devices
5. Support both light and dark theme preferences

---

## 2. Site Architecture

### Page Structure

```
Homepage (/)
├── Hero Section (Introduction)
├── Latest Blog Posts Preview
└── Call-to-Action Buttons

About (/about/)
├── Professional Summary
├── Skills & Expertise
└── Contact Information

Blog (/blog/)
├── Archive Layout
└── Posts by Year/Category

Articles (/articles/)
├── Collection Layout
└── Technical Articles Grid
```

### Collections

- **Posts:** Blog entries with date-based organization
- **Articles:** Long-form technical content and tutorials

### Layouts Used

- `layout: single` - Individual post/page content
- `layout: home` - Homepage with custom sections
- `layout: posts` - Blog archive with yearly organization
- `layout: collection` - Articles grid display
- `layout: archive` - General archive pages

---

## 3. Layout Structure

### Global Layout Components

#### Masthead (Navigation Bar)
- Fixed/sticky header with site branding
- Responsive hamburger menu for mobile
- Theme toggle button (light/dark mode)
- Search functionality

#### Sidebar (Author Profile)
- Left-aligned on desktop (≥1024px)
- Avatar image (circular, 180px on desktop)
- Author name and bio
- Social media links
- Navigation links

#### Main Content Area
- Dynamic width based on sidebar presence
- Generous padding for readability
- Maximum width constraints for optimal line length

#### Footer
- Copyright information
- Additional links
- Social media icons

### Content Width Calculations

**With Sidebar (Desktop ≥1024px):**
```css
/* Medium screens (1024px+) */
Main content width: calc(100% - 300px)
Sidebar width: 250px

/* Large screens (1280px+) */
Main content width: calc(100% - 320px)
Sidebar width: 280px

/* Desktop (1200px+) */
Main content width: calc(100% - 300px)
Sidebar width: 280px

/* Extra large (1400px+) */
Main content width: calc(100% - 320px)
Sidebar width: 300px
```

---

## 4. Responsive Design

### Breakpoint System

The site uses a mobile-first approach with the following breakpoints:

| Breakpoint | Min Width | Description | Primary Use |
|------------|-----------|-------------|-------------|
| Mobile | 320px | Extra small phones | Single column, stacked layout |
| Mobile+ | 376px | Standard phones | Slight spacing adjustments |
| Tablet | 576px | Small tablets | 2-column blog grid begins |
| Tablet+ | 768px | Large tablets | Enhanced typography |
| Laptop | 992px | Small laptops | 3-column blog grid, sidebar appears |
| Desktop | 1200px | Standard desktop | Optimal reading width |
| Large Desktop | 1400px | Large monitors | Maximum spacing and width |

### Responsive Strategies

#### Mobile (320px - 575px)
- Single column layout
- Stacked navigation (hamburger menu)
- Full-width content
- Compressed spacing
- Smaller typography
- Touch-optimized buttons (44px minimum)

#### Tablet (576px - 991px)
- 2-column blog grid
- Larger avatar (100-120px)
- Increased padding
- Improved typography scale

#### Laptop/Desktop (992px+)
- Sidebar appears (left-aligned)
- 3-column blog grid
- Generous spacing between sidebar and content
- Optimal line length (65-75 characters)
- Full navigation bar

### Layout Adaptations by Device

**Mobile:**
```css
- Blog grid: 1 column
- Avatar: 80px
- Hero title: 1.5rem
- Content padding: 0.8rem
```

**Tablet:**
```css
- Blog grid: 2 columns
- Avatar: 100-120px
- Hero title: 1.75-2rem
- Content padding: 1-1.2rem
```

**Desktop:**
```css
- Blog grid: 3 columns
- Avatar: 140-180px
- Hero title: 2.25-2.75rem
- Content padding: variable by layout
```

---

## 5. Typography System

### Font Hierarchy

#### Base Font Size
- **Root:** 16px (1rem)
- **Body:** 1rem (16px) for optimal readability

#### Heading Scale

**Homepage Hero:**
| Screen Size | Title | Subtitle | Description |
|-------------|-------|----------|-------------|
| Mobile (320px) | 1.5rem (24px) | 0.875rem (14px) | 0.875rem (14px) |
| Tablet (768px) | 2rem (32px) | 1.125rem (18px) | 1rem (16px) |
| Desktop (1200px) | 2.5rem (40px) | 1.375rem (22px) | 1rem (16px) |
| XL (1400px) | 2.75rem (44px) | 1.5rem (24px) | 1rem (16px) |

**Content Headings:**
- H2: 1.5rem (24px)
- H3: 1.25rem (20px)
- Body: 1rem (16px)

**Blog Cards:**
- Card Title: 1.125rem (18px)
- Card Excerpt: 0.875rem (14px)
- Meta Info: 0.8125rem (13px)
- Tags: 0.75rem (12px)

**Navigation & UI:**
- Nav Links: 0.875rem (14px)
- Buttons: 0.875rem (14px)
- Author Name: 1.125rem (18px)
- Author Bio: 0.875rem (14px)

### Line Height Standards

```css
Body text: 1.6 (optimal for reading)
Headings: 1.3-1.4 (tighter for impact)
Hero description: 1.6 (comfortable reading)
Blog excerpts: 1.6 (readability)
```

### Font Weights

- Regular: 400 (body text)
- Medium: 500 (emphasis)
- Semi-bold: 600 (headings)
- Bold: 700 (strong emphasis)

---

## 6. Spacing & Layout Grid

### Padding System

#### Sidebar to Content Spacing

**Medium Screens (1024px):**
```css
Regular pages:
  - Left padding: 3.5rem (56px)
  - Right padding: 3rem (48px)

Blog/Articles pages:
  - Left padding: 4.5rem (72px) (+16px extra)
  - Right padding: 3.5rem (56px) (+8px extra)

Sidebar:
  - Right padding: 2rem (32px)
```

**Large Screens (1280px):**
```css
Regular pages:
  - Left padding: 4rem (64px)
  - Right padding: 3.5rem (56px)

Blog/Articles pages:
  - Left padding: 5rem (80px) (+16px extra)
  - Right padding: 4rem (64px) (+8px extra)

Sidebar:
  - Right padding: 2.5rem (40px)
```

**Desktop (1200px):**
```css
Regular pages:
  - Left padding: 4rem (64px)
  - Right padding: 3.5rem (56px)

Blog/Articles pages:
  - Left padding: 5rem (80px)
  - Right padding: 4rem (64px)

Sidebar:
  - Right padding: 2.5rem (40px)
```

**Extra Large (1400px):**
```css
Regular pages:
  - Left padding: 4.5rem (72px)
  - Right padding: 3.5rem (56px)

Blog/Articles pages:
  - Left padding: 5.5rem (88px)
  - Right padding: 4rem (64px)

Sidebar:
  - Right padding: 3rem (48px)
```

### Component Spacing

**Blog Grid:**
- Gap between cards: 1-1.3rem (16-21px) based on screen size
- Card internal padding: 1-1.3rem (16-21px)

**Hero Section:**
- Padding: 1.5rem to 3rem (24-48px) based on screen size
- Margin: Negative top margin for full-bleed effect

**Content Blocks:**
- Section margin: 0.8-1rem (13-16px)
- Paragraph margin-bottom: 0.7rem (11px)

### Grid System

**Blog Grid Columns:**
- Mobile: 1 column
- Tablet (576px): 2 columns
- Desktop (992px): 3 columns

**Collection Grid:**
- Responsive grid using `entries-grid` class
- Dynamic columns based on content and screen size

---

## 7. Theme & Color System

### Theme Implementation

**Supported Themes:**
- Light Mode (default)
- Dark Mode (neon skin)

**Theme Toggle:**
- Located in navigation bar
- Persistent preference storage
- Smooth transitions between themes
- Icon-based UI (sun/moon)

### Color Application

**Minimal Mistakes Neon Skin:**
- Applied via `_config.yml`: `minimal_mistakes_skin: "neon"`
- Custom theme enhancements in `theme-enhanced.css`
- System theme detection and override

### Visual Effects

**Hover States:**
- Blog cards: subtle scale and shadow effects
- Buttons: color transitions
- Links: color changes
- Avatar: scale effect (1.05x on hover)

**Shadows:**
- Cards: subtle elevation shadows
- Sticky elements: separation shadows
- Avatar: theme-specific glow effects

---

## 8. Component Library

### Homepage Hero

**Structure:**
```html
<div class="homepage-hero">
  <div class="hero-content">
    <h1 class="hero-title">
    <p class="hero-subtitle">
    <p class="hero-description">
  </div>
</div>
```

**Styling:**
- Full-width background image overlay
- Centered content with max-width constraint
- Gradient overlay for text readability
- Responsive text scaling

### Blog Cards

**Structure:**
```html
<article class="blog-card">
  <div class="blog-header">
    <h3><a href="#">Title</a></h3>
    <div class="blog-meta">
      <span class="blog-date">
      <span class="blog-category">
    </div>
  </div>
  <p class="blog-excerpt">
  <div class="blog-tags">
    <span class="tag">
  </div>
  <a class="read-more">
</article>
```

**Features:**
- Hover effects with transform and shadow
- Responsive typography
- Tag system with wrapping
- Read more links with icons

### Author Profile (Sidebar)

**Components:**
- Circular avatar with border and hover effect
- Author name and title
- Bio text
- Social media links
- Additional navigation

**Avatar Specifications:**
- Shape: Perfect circle (border-radius: 50%)
- Size: Responsive (80px mobile to 180px desktop)
- Border: 3px solid with theme colors
- Hover: Scale to 1.05x with transition
- Object-fit: cover (prevents distortion)

### Navigation Bar

**Features:**
- Responsive hamburger menu (mobile)
- Theme toggle button
- Search functionality
- Flexible layout with proper spacing
- Touch-optimized buttons (36-44px)

**Mobile Behavior:**
- Hidden links (collapsed menu)
- Space-between layout
- Stacked theme toggle
- Touch-friendly buttons

---

## 9. Navigation System

### Main Navigation

**Desktop:**
- Home
- About
- Articles
- Blog

**Mobile:**
- Hamburger menu with slide-out panel
- Same navigation items
- Touch-optimized spacing

### Navigation State Management

- Active page highlighting
- Hover states on desktop
- Touch feedback on mobile
- Accessible keyboard navigation

### Theme Toggle

**Placement:** Navigation bar, right side  
**States:**
- Light mode icon (sun)
- Dark mode icon (moon)
- Active state indication

**Mobile Adaptations:**
- Smaller buttons (28-32px)
- Proper spacing from hamburger
- No overlap with site title

---

## 10. Performance Optimization

### CSS Strategy

**File Organization:**
- `main.scss`: Core theme styles
- `responsive.css`: Custom responsive overrides
- `theme-enhanced.css`: Theme-specific enhancements
- `theme-system.css`: System theme utilities

**Optimization Techniques:**
- Minimal CSS (unused styles removed)
- Efficient selectors
- Mobile-first approach reduces override complexity
- Combined media queries

### Image Optimization

**Avatar Images:**
- Responsive sizing
- Lazy loading (where applicable)
- Object-fit for aspect ratio preservation

**Hero Background:**
- Optimized image compression
- Overlay for performance/readability balance

### Jekyll Build Optimization

- Incremental builds enabled
- Asset minification in production
- Static site generation for fast delivery

---

## 11. Accessibility Features

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- All interactive elements accessible via keyboard
- Proper tab order
- Skip links for main content

**Screen Reader Support:**
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  /* Disable animations and transitions */
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### High Contrast Mode

```css
@media (prefers-contrast: high) {
  /* Enhanced borders and outlines */
  .blog-card, .btn {
    border: 2px solid currentColor;
  }
}
```

### Touch Device Optimizations

```css
@media (hover: none) and (pointer: coarse) {
  /* Minimum 44px touch targets */
  .btn, .read-more, a {
    min-height: 44px;
    min-width: 44px;
  }
}
```

### Color Contrast

- All text meets minimum 4.5:1 contrast ratio
- Interactive elements have clear focus indicators
- Theme colors chosen for accessibility

---

## 12. Browser Support

### Supported Browsers

**Desktop:**
- Chrome 90+ (latest 2 versions)
- Firefox 88+ (latest 2 versions)
- Safari 14+ (latest 2 versions)
- Edge 90+ (latest 2 versions)

**Mobile:**
- iOS Safari 14+
- Chrome Mobile (Android)
- Samsung Internet 14+

### Progressive Enhancement

- Base functionality works in older browsers
- Enhanced features for modern browsers
- Graceful degradation of CSS features
- Fallbacks for CSS Grid and Flexbox

### Feature Detection

- CSS custom properties with fallbacks
- Modern CSS features with vendor prefixes where needed
- JavaScript feature detection for enhanced interactions

---

## Appendix A: File Structure

```
datvu.io/
├── _config.yml                 # Jekyll configuration
├── index.html                  # Homepage
├── assets/
│   ├── css/
│   │   ├── main.scss          # Main stylesheet
│   │   ├── responsive.css     # Responsive overrides
│   │   ├── theme-enhanced.css # Theme enhancements
│   │   └── theme-system.css   # System theme utilities
│   ├── images/                # Image assets
│   └── js/                    # JavaScript files
├── _includes/
│   ├── theme-toggle.html      # Theme switcher
│   ├── theme-head.html        # Theme CSS includes
│   └── ...                    # Other includes
├── _layouts/
│   ├── single.html            # Single post layout
│   ├── home.html              # Homepage layout
│   ├── posts.html             # Blog archive layout
│   ├── collection.html        # Collection layout
│   └── ...                    # Other layouts
├── _pages/
│   ├── about.md               # About page
│   ├── blog.md                # Blog archive page
│   └── articles.md            # Articles collection page
├── _posts/                    # Blog posts
├── _articles/                 # Article collection
└── _sass/                     # Sass partials
```

---

## Appendix B: CSS Custom Properties

### Spacing Scale

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 4rem;      /* 64px */
```

### Typography Scale

```css
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 2rem;        /* 32px */
--text-4xl: 2.5rem;      /* 40px */
```

---

## Appendix C: Media Query Reference

```css
/* Mobile first breakpoints */
@media (max-width: 375px)           { /* Extra small phones */ }
@media (min-width: 376px)           { /* Standard phones */ }
@media (min-width: 576px)           { /* Large phones / small tablets */ }
@media (min-width: 768px)           { /* Tablets */ }
@media (min-width: 992px)           { /* Laptops */ }
@media (min-width: 1200px)          { /* Desktop */ }
@media (min-width: 1400px)          { /* Large desktop */ }

/* Specific ranges */
@media (min-width: 376px) and (max-width: 575px) { /* Phone range */ }
@media (min-width: 576px) and (max-width: 767px) { /* Tablet range */ }
@media (min-width: 768px) and (max-width: 991px) { /* Large tablet range */ }
@media (min-width: 992px) and (max-width: 1199px) { /* Laptop range */ }

/* Utility queries */
@media (max-width: 1024px)          { /* Mobile navigation trigger */ }
@media (min-width: 64em)            { /* Sidebar appears (1024px) */ }
@media (min-width: 80em)            { /* Large layout (1280px) */ }

/* Special queries */
@media (max-height: 600px) and (orientation: landscape) { /* Landscape */ }
@media (prefers-reduced-motion: reduce) { /* Accessibility */ }
@media (prefers-contrast: high) { /* High contrast */ }
@media (hover: none) and (pointer: coarse) { /* Touch devices */ }
@media print { /* Print styles */ }
```

---

## Appendix D: Design Decisions & Rationale

### Why Mobile-First?

1. **Performance:** Smaller CSS footprint for mobile devices
2. **Progressive Enhancement:** Add complexity as screens grow
3. **Focus:** Forces consideration of content priority
4. **Modern Standard:** Industry best practice

### Why Generous Spacing for Blog/Articles?

1. **Reading Comfort:** Extra space reduces cognitive load
2. **Visual Hierarchy:** Clear separation of sidebar and content
3. **Professional Look:** Spacious layouts feel premium
4. **Scan-ability:** Easier to browse multiple entries

### Why 16px Base Font?

1. **Browser Default:** Respects user preferences
2. **Readability:** Scientifically proven optimal size
3. **Accessibility:** Meets WCAG guidelines
4. **Mobile Friendly:** Prevents zoom on form inputs

### Why CSS-Only Theme Toggle?

1. **Performance:** No JavaScript overhead
2. **Instant:** No flash of unstyled content
3. **Reliable:** Works even if JS disabled
4. **Modern:** Uses CSS custom properties

---

## Maintenance Notes

### Adding New Breakpoints

1. Add media query in ascending order
2. Follow mobile-first approach
3. Document in this design guide
4. Test across all device types

### Modifying Spacing

1. Update base values first
2. Test all layouts and pages
3. Verify sidebar/content spacing
4. Check mobile and desktop views
5. Update documentation

### Theme Customization

1. Modify theme files in `assets/css/`
2. Test light and dark modes
3. Verify color contrast ratios
4. Update theme-specific components

### Performance Monitoring

- Monitor CSS file size
- Check for unused selectors
- Optimize images regularly
- Test on slow connections

---

## Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2025-11-08 | Initial design document | YushinB |

---

## Contact & Support

For questions or contributions, contact:
- **Email:** [Contact through GitHub]
- **GitHub:** hatakebmt/Datvu.github.io
- **Issues:** Submit via GitHub Issues

---

*This document is maintained as part of the YushinB portfolio website project. Last updated: November 8, 2025*
