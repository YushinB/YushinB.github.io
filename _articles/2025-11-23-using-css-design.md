---
layout: single
title: "How to Use the New CSS Design System"
date: 2025-11-23
categories: [design-system, css]
tags: [css, design-system, tokens, components]
excerpt: "Practical guide to adopt the centralized CSS design system (tokens, components, utilities) used across this site."
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Blog-header.jpg
author_profile: true
mathjax: true
custom_css:
  - /assets/css/components.css
---

- [Quick Start](#quick-start)
- [Architecture Overview](#architecture-overview)
  - [Key Files](#key-files)
- [Design Tokens](#design-tokens)
  - [Common Token Usage](#common-token-usage)
  - [Essential Token Categories](#essential-token-categories)
- [Components Library](#components-library)
  - [Buttons](#buttons)
  - [Cards](#cards)
    - [Basic Card Structure](#basic-card-structure)
    - [Card Variants](#card-variants)
  - [Blog Card](#blog-card)
  - [Grid Layouts](#grid-layouts)
    - [3-column grid](#3-column-grid)
    - [2-column grid with compact spacing](#2-column-grid-with-compact-spacing)
    - [4-column grid with spacious layou](#4-column-grid-with-spacious-layou)
  - [Image Component (usage)](#image-component-usage)
  - [Avatar Component (usage)](#avatar-component-usage)
  - [Video Component (usage)](#video-component-usage)
  - [Timeline](#timeline)
  - [Stats Grid](#stats-grid)
  - [Skills Grid](#skills-grid)
- [](#)
- [Utility Classes](#utility-classes)
  - [Section Titles](#section-titles)
  - [Fluid Typography](#fluid-typography)
  - [Accessibility Features](#accessibility-features)
- [Migration Guide](#migration-guide)
  - [Step-by-Step Process](#step-by-step-process)
    - [1. Remove Inline Styles](#1-remove-inline-styles)
    - [2. Replace Custom Classes](#2-replace-custom-classes)
    - [3. Use Design Tokens](#3-use-design-tokens)
    - [4. Extract Reusable Patterns](#4-extract-reusable-patterns)
- [Working with Markdown Files](#working-with-markdown-files)
  - [Disabling Markdown Linting](#disabling-markdown-linting)
- [Best Practices](#best-practices)
  - [Do's ✓](#dos-)
  - [Don'ts ✗](#donts-)
- [Next Steps](#next-steps)

This guide explains how to adopt the new centralized design system implemented in `assets/css/components.css`. It covers design tokens, reusable components, utilities, and migration strategies to help you modernize your pages.

## Quick Start

**TL;DR** — The design system provides:
- **Design tokens** — CSS custom properties for spacing, colors, radius, shadows, and transitions
- **Reusable components** — Pre-built cards, buttons, grids, timelines, and more
- **Automatic support** — Dark mode and reduced-motion preferences work out of the box

---

## Architecture Overview

### Key Files

| File | Purpose |
|------|---------|
| `assets/css/components.css` | Global design tokens & components (source of truth) |
| `assets/css/responsive.css` | Responsive utilities and breakpoint helpers |
| `assets/css/about-page.css` | Legacy page styles (migrate away from these) |

**Best Practice:** Update tokens in `:root` rather than modifying component rules directly.

---

## Design Tokens

Design tokens provide consistent spacing, colors, and visual properties across your site. Reference the full documentation in `docs/DESIGN_TOKENS_REFERENCE.md`.

### Common Token Usage

```css
.my-component {
  /* Spacing */
  padding: var(--space-lg);
  margin-bottom: var(--space-md);
  
  /* Visual style */
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  
  /* Colors */
  background: var(--card-bg);
  color: var(--card-text);
  border: 1px solid var(--card-border);
  
  /* Animation */
  transition: var(--transition-normal);
}
```

### Essential Token Categories

- **Spacing:** `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
- **Radius:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-full`
- **Shadows:** `--shadow-sm`, `--shadow-md`, `--shadow-lg`
- **Colors:** `--card-bg`, `--card-text`, `--card-border`
- **Transitions:** `--transition-fast`, `--transition-normal`, `--transition-slow`

---

## Components Library

### Buttons

Pre-styled button components with multiple variants.

```html
<!-- Basic buttons -->
<a class="btn btn--primary">Primary Button</a>
<a class="btn btn--secondary">Secondary Button</a>

<!-- Enhanced button with multiple modifiers -->
<a class="btn btn--primary btn--large btn--rounded btn--shadow">
  Call to Action
</a>
```
**Renders as:**

<!-- Basic buttons -->
<a class="btn btn--primary">Primary Button</a>
<a class="btn btn--secondary">Secondary Button</a>

<!-- Enhanced button with multiple modifiers -->
<a class="btn btn--primary btn--large btn--rounded btn--shadow">
  Call to Action
</a>


**Available Modifiers:**
- **Size:** `btn--large`, `btn--small`
- **Style:** `btn--rounded`, `btn--outline`, `btn--icon`, `btn--shadow`

---

### Cards

Flexible card components for content grouping.

#### Basic Card Structure

```html
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
</div>
```

**Renders as:**
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
</div>

#### Card Variants

```html
<!-- Compact card -->
<div class="card card--compact">...</div>

<!-- Large card with elevation -->
<div class="card card--large card--elevated">...</div>

<!-- Flat card without shadow -->
<div class="card card--flat">...</div>

<!-- Light background variant -->
<div class="card card--light">...</div>

<!-- Borderless card -->
<div class="card card--borderless">...</div>

<!-- Interactive (hover effects) -->
<div class="card card--interactive">...</div>

<!-- Horizontal layout -->
<div class="card card--horizontal">...</div>
```

**Renders as:**

<!-- Compact card -->
<div class="card card--compact">Compact card</div>

<!-- Large card with elevation -->
<div class="card card--large card--elevated">Large card with elevation </div>

<!-- Flat card without shadow -->
<div class="card card--flat">Flat card without shadow</div>

<!-- Light background variant -->
<div class="card card--light">Light background variant</div>

<!-- Borderless card -->
<div class="card card--borderless">Borderless card</div>

<!-- Interactive (hover effects) -->
<div class="card card--interactive">Interactive (hover effects)</div>

<!-- Horizontal layout -->
<div class="card card--horizontal">Horizontal layout</div>

---

### Blog Card

Specialized card for blog post previews.

```html
<a href="/post-url/" class="blog-card">
  <span class="blog-card__date">Nov 23, 2025</span>
  <h3 class="blog-card__title">Your Post Title</h3>
  <p class="blog-card__excerpt">
    A brief excerpt of your blog post content...
  </p>
</a>
```
---

### Grid Layouts

Responsive grid system for organizing cards and content.

```html
<!-- 3-column grid -->
<div class="card-grid card-grid--3col">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>

<!-- 2-column grid with compact spacing -->
<div class="card-grid card-grid--2col card-grid--compact">
  <div class="card">...</div>
  <div class="card">...</div>
</div>

<!-- 4-column grid with spacious layout -->
<div class="card-grid card-grid--4col card-grid--spacious">
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

**Renders as:**

#### 3-column grid

<div class="card-grid card-grid--3col">
  <div class="card">Card1</div>
  <div class="card">Card2</div>
  <div class="card">Card3</div>
</div>

#### 2-column grid with compact spacing
<!-- 2-column grid with compact spacing -->
<div class="card-grid card-grid--2col card-grid--compact">
  <div class="card">Card1</div>
  <div class="card">Card2</div>
</div>

#### 4-column grid with spacious layou
<!-- 4-column grid with spacious layout -->
<div class="card-grid card-grid--4col card-grid--spacious">
  <div class="card">Card1</div>
  <div class="card">Card2</div>
  <div class="card">Card3</div>
  <div class="card">Card4</div>
</div>


**Grid Modifiers:**
- **Columns:** `card-grid--2col`, `card-grid--3col`, `card-grid--4col`
- **Spacing:** `card-grid--compact`, `card-grid--spacious`

---

### Image Component (usage)

Use the `.figure` wrapper together with `.img-responsive` for consistent image handling. Float variants (`.figure--left`, `.figure--right`) provide editorial layouts that collapse to block on narrow screens.

```html
<figure class="figure figure--left">
  <img src="/assets/images/example.jpg" alt="Example" class="img-responsive" />
  <figcaption class="figure-caption">Figure: Example image caption.</figcaption>
</figure>

<p>
  This paragraph will flow around the floated figure on wide screens, and stack beneath the image on small screens.
</p>
```

```html
<figure class="figure">
  <img src="/assets/images/hero-sample.jpg" alt="Hero sample" class="img-responsive" />
  <figcaption class="figure-caption">Centered image with caption</figcaption>
</figure>
```

**Renders as:**

<figure class="figure figure--left">
  <img src="/assets/images/hero-bg.jpg" alt="Example" class="img-responsive" />
  <figcaption class="figure-caption">Figure: Example image caption.</figcaption>
</figure>

<p>
  This paragraph will flow around the floated figure on wide screens, and stack beneath the image on small screens.
</p>

<figure class="figure">
  <img src="/assets/images/hero-bg.jpg" alt="Hero sample" class="img-responsive" />
  <figcaption class="figure-caption">Centered image with caption</figcaption>
</figure>

Notes:
- Use `figure--left` / `figure--right` for editorial float layouts.
- Images are constrained by `max-width: 100%` and will not overflow their containers.


### Avatar Component (usage)

Use the `.avatar` component for user pictures, initials fallback, and presence indicators. The component supports size modifiers, shape variants, ring/border decorations and an inline status indicator.

```html
<!-- Initials fallback -->
<span class="avatar-wrapper">
  <span class="avatar avatar--md avatar--initials">JS</span>
</span>

<!-- Image avatar with online status and ring -->
<span class="avatar-wrapper">
  <span class="avatar avatar--md avatar--ring">
    <img src="/assets/images/avatar-alex.jpg" alt="Alex" />
  </span>
  <span class="avatar__status avatar__status--online" aria-hidden="true"></span>
</span>

<!-- Large square avatar with border -->
<span class="avatar-wrapper">
  <span class="avatar avatar--lg avatar--square avatar--border">
    <img src="/assets/images/avatar-team.jpg" alt="Team" />
  </span>
</span>
```

**Renders as:**

<span class="avatar-wrapper">
  <span class="avatar avatar--md avatar--initials">JS</span>
</span>

<span class="avatar-wrapper">
  <span class="avatar avatar--md avatar--ring">
    <img src="/assets/images/avatar-alex.jpg" alt="Alex" />
  </span>
  <span class="avatar__status avatar__status--online" aria-hidden="true"></span>
</span>

<span class="avatar-wrapper">
  <span class="avatar avatar--lg avatar--square avatar--border">
    <img src="/assets/images/avatar-team.jpg" alt="Team" />
  </span>
</span>

Notes:
- Use `avatar--initials` when an image is unavailable (show initials or SVG fallback).
- Add `avatar__status--online|--away|--offline` for presence; the small indicator is decorative (use ARIA where presence conveys state).
- Use `avatar--ring` or `avatar--border` for emphasis in lists or profile headers.


### Video Component (usage)

Videos are wrapped with the `.video-wrapper` helper to preserve aspect ratio and prevent overflow. Use the `youtube-video-card` for a compact card presentation.

```html
<!-- Responsive embedded video (16:9) -->
<div class="video-wrapper">
  <iframe
    src="https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB"
    title="Jekyll - Static Site Generator | Tutorial"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    loading="lazy">
  </iframe>
</div>

<!-- Video inside a card -->
<div class="youtube-video-card">
  <h3>Optimal Control Theory</h3>
  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/F8iOU1ci19Q"
      title="Meet Jekyll - The Static Site Generator"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </div>
  <p>Short description of the video and why it's useful.</p>
</div>
```

**Renders as:**

<div class="youtube-video-card">
  <h3>Meet Jekyll - The Static Site Generator</h3>
  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/F8iOU1ci19Q"
      title="Meet Jekyll - The Static Site Generator"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </div>
  <p>Short description of the video and why it's useful.</p>
</div>

Notes:
- Use `loading="lazy"` to defer offscreen video loads.
- Keep descriptive `title` and `aria` attributes for accessibility.
- The `.video-wrapper` preserves 16:9 aspect ratio; override with custom classes only when necessary.


### Timeline

Vertical timeline for chronological content.

```html
<div class="timeline">
  <div class="timeline-item">
    <span class="date-badge">2025</span>
    <h3>Event Title</h3>
    <p>Event description...</p>
  </div>
  <div class="timeline-item">
    <span class="date-badge">2024</span>
    <h3>Previous Event</h3>
    <p>Event description...</p>
  </div>
</div>
```

**Renders as:**
<div class="timeline">
  <div class="timeline-item">
    <span class="date-badge">2025</span>
    <h3>Event Title</h3>
    <p>Event description...</p>
  </div>
  <div class="timeline-item">
    <span class="date-badge">2024</span>
    <h3>Previous Event</h3>
    <p>Event description...</p>
  </div>
</div>

---

### Stats Grid

Display statistics with optional progress bars.

```html
<div class="stats-grid">
  <div class="stat-card">
    <h4>Metric Name</h4>
    <div class="stat-value">150+</div>
    <!-- Optional progress bar -->
    <div class="progress-bar">
      <div class="progress-fill" style="width: 75%;"></div>
    </div>
  </div>
</div>
```
**Renders as:**

<div class="stats-grid">
  <div class="stat-card">
    <h4>Metric Name</h4>
    <div class="stat-value">150+</div>
    <!-- Optional progress bar -->
    <div class="progress-bar">
      <div class="progress-fill" style="width: 75%;"></div>
    </div>
  </div>
</div>

---

### Skills Grid

Showcase skills with visual indicators.

```html
 <div class="skill-category">
    <div class="skill-item">
      <div class="skill-info">
        <span class="skill-name"><i class="fab fa-python"></i> Python</span>
        <span class="skill-level">Expert</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
      </div>
    </div>
  </div>
```

**Renders as:**
 <div class="skill-category">
    <div class="skill-item">
      <div class="skill-info">
        <span class="skill-name"><i class="fab fa-python"></i> Python</span>
        <span class="skill-level">Expert</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
      </div>
    </div>
  </div>
---

## Utility Classes

### Section Titles

Consistent heading styles for page sections.

```html
<h2 class="section-title">Section Heading</h2>
```

**Renders as:**
<h2 class="section-title">Section Heading</h2>

### Fluid Typography

Enable responsive, viewport-based font sizing.

```html
<div class="use-fluid-typography">
  <h1>This heading scales with viewport</h1>
  <p>Body text also scales appropriately...</p>
</div>
```

**Renders as:**
<div class="use-fluid-typography">
  <h1>This heading scales with viewport</h1>
  <p>Body text also scales appropriately...</p>
</div>

### Accessibility Features

The design system automatically respects user preferences:

- **Dark Mode:** `prefers-color-scheme: dark`
- **Reduced Motion:** `prefers-reduced-motion: reduce`

No additional classes needed — these work automatically.

---

## Migration Guide

### Step-by-Step Process

#### 1. Remove Inline Styles

**Before:**
```html
<div style="padding: 15px; background: #f8f9fa; border-radius: 10px;">
  Content here
</div>
```

**After:**
```html
<div class="card card--light">
  Content here
</div>
```

#### 2. Replace Custom Classes

**Before:**
```html
<a class="custom-button" style="padding: 12px 24px; border-radius: 8px;">
  Click me
</a>
```

**After:**
```html
<a class="btn btn--primary btn--rounded">
  Click me
</a>
```

#### 3. Use Design Tokens

**Before:**
```css
.custom-box {
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

**After:**
```css
.custom-box {
  padding: var(--space-lg);
  margin-bottom: var(--space-xl);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}
```

#### 4. Extract Reusable Patterns

If you find yourself repeating the same styles across multiple pages, add them to `assets/css/components.css` as a new component.

---

## Working with Markdown Files

### Disabling Markdown Linting

If you need to use HTML in your markdown files (like `_pages/about.md`), add this comment at the top:

```html
<!-- markdownlint-disable MD033 -->
```

This prevents linting errors when mixing HTML with markdown.

---

## Best Practices

### Do's ✓

- Use design tokens for all spacing, colors, and visual properties
- Prefer existing components over creating new ones
- Test in both light and dark modes
- Verify reduced-motion compatibility
- Keep component styles in `components.css`

### Don'ts ✗

- Don't use inline styles in production
- Don't create page-specific CSS for reusable patterns
- Don't hardcode colors, spacing, or shadows
- Don't modify component base classes (use modifiers instead)
- Don't forget to test responsive behavior

---

## Next Steps

1. **Audit existing pages** — Identify inline styles and custom classes
2. **Plan migration** — Prioritize high-traffic pages first
3. **Test thoroughly** — Check dark mode, mobile, and accessibility
4. **Document patterns** — Add new components to this guide if needed

For questions or contributions, refer to the project documentation or contact the maintainers.

---

*Last updated: November 23, 2025*