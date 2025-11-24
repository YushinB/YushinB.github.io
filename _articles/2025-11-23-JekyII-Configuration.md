---
layout: single
title: "Complete Minimal Mistakes Theme Configuration"
date: 2025-11-23
categories: [Tutorial]
tags: [Minimal, Theme, Jekyll]
excerpt: "This is the **complete** configuration reference for the Minimal Mistakes Jekyll theme based on the official documentation."
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/Blog-header.jpg
author_profile: true
mathjax: true
custom_css:
  - /assets/css/components.css
---

# Complete Minimal Mistakes Theme Configuration

This is the **complete** configuration reference for the Minimal Mistakes Jekyll theme based on the official documentation.

## Complete _config.yml Template

```yaml
# =============================================================================
# THEME SETTINGS
# =============================================================================

# Theme (choose one)
theme: minimal-mistakes-jekyll  # For local gem installation
# remote_theme: mmistakes/minimal-mistakes  # For GitHub Pages

# Skin - Changes color scheme
minimal_mistakes_skin: "default"
# Options: "default", "air", "aqua", "contrast", "dark", "dirt", 
#          "neon", "mint", "plum", "sunrise"

# =============================================================================
# SITE SETTINGS
# =============================================================================

locale: "en-US"
title: "Site Title"
title_separator: "-"  # Character used in SEO page titles
subtitle: "Version 2.0"  # Appears below title in masthead
name: "Your Name"  # Site author
description: "An amazing website description."
url: "https://yourdomain.com"  # Base hostname & protocol
baseurl: ""  # Subpath of site (e.g., /blog) - usually leave blank
repository: "username/repo-name"  # GitHub username/repo

# Masthead
logo: "/assets/images/logo.png"  # Logo image in masthead
masthead_title: "Custom Title"  # Override site title in masthead

# RTL Support
rtl: false  # Set to true for right-to-left languages

# Breadcrumbs (beta)
breadcrumbs: true  # Enable breadcrumb navigation (false by default)

# Post Settings
show_date: true  # Show dates on posts
date_format: "%B %-d, %Y"  # Date format (e.g., "February 24, 2016")

# Reading Time
reading_time: true  # Enable reading time
words_per_minute: 200  # Average reading speed

# Code Block Copy Button (v4.26.0+)
enable_copy_code_button: true  # Enable copy button on code blocks

# =============================================================================
# COMMENTS
# =============================================================================

comments:
  provider: "disqus"  # false, "disqus", "discourse", "facebook", 
                      # "staticman_v2", "staticman", "utterances", 
                      # "giscus", "custom"
  
  # Disqus
  disqus:
    shortname: "your-disqus-shortname"
  
  # Discourse
  discourse:
    server: meta.discourse.org  # Don't include http:// or https://
  
  # Facebook
  facebook:
    appid: # optional
    num_posts: 5  # Number of comments to show (default: 5)
    colorscheme: "light"  # "light" (default) or "dark"
  
  # utterances
  utterances:
    theme: "github-light"  # "github-dark"
    issue_term: "pathname"
    label: "comment"  # Optional - must be existing label
  
  # giscus
  giscus:
    repo_id: # From giscus.app setup
    category_name: # Full category name
    category_id: # From giscus.app setup
    discussion_term: "pathname"  # "pathname", "url", "title", "og:title"
    reactions_enabled: "1"  # '1' enabled (default), '0' disabled
    theme: "light"  # "light", "dark", "dark_dimmed", "transparent_dark"
  
  # Staticman v2/v3
  staticman:
    branch: "master"  # or "gh-pages"
    endpoint: https://your-staticman-instance.herokuapp.com/v3/entry/github/

# =============================================================================
# reCAPTCHA (Staticman v2 only)
# =============================================================================

reCaptcha:
  siteKey: "your-site-key"
  secret: "your-encrypted-secret"

# =============================================================================
# ATOM/RSS FEED
# =============================================================================

atom_feed:
  path: # Custom feed path (default: feed.xml)
  hide: false  # Set to true to hide RSS icon in header/footer

# =============================================================================
# SEARCH
# =============================================================================

search: true  # Enable site search
search_full_content: true  # Index full post content (impacts performance)
search_provider: lunr  # "lunr" (default), "algolia", "google"

# Lunr Search
lunr:
  search_within_pages: true  # Index all pages (not just posts)

# Algolia Search
algolia:
  application_id: YOUR_APPLICATION_ID
  index_name: YOUR_INDEX_NAME
  search_only_api_key: YOUR_SEARCH_ONLY_API_KEY
  powered_by: true  # Show "powered by Algolia"

# Google Custom Search
google:
  search_engine_id: YOUR_SEARCH_ENGINE_ID

# =============================================================================
# SEO & WEBMASTER TOOLS
# =============================================================================

# Google Search Console
google_site_verification: "yourVerificationCode"

# Bing Webmaster Tools
bing_site_verification: "0FC3FD70512616B052E755A56F8952D"

# Naver Webmaster Tools
naver_site_verification: "6BF5A01C0E650B479B612AC5A2184144"

# Yandex
yandex_site_verification: "2132801JL"

# Baidu
baidu_site_verification: "code-iA0wScWXN1"

# =============================================================================
# SOCIAL MEDIA
# =============================================================================

# Twitter Card / Open Graph
twitter:
  username: "site-twitter-handle"  # Site Twitter handle (without @)

facebook:
  app_id: # Facebook App ID
  publisher: # Facebook Page URL or ID
  username: "username"  # For sidebar/footer

# Open Graph Default Image
og_image: /assets/images/site-logo.png

# Social Profile (for Google Knowledge Panel)
social:
  type: Person  # Person or Organization
  name: # If different from site name
  links:
    - "https://twitter.com/yourTwitter"
    - "https://www.facebook.com/yourFacebook"
    - "https://instagram.com/yourProfile"
    - "https://www.linkedin.com/in/yourprofile"

# =============================================================================
# ANALYTICS
# =============================================================================

analytics:
  provider: "google-gtag"  # false, "google", "google-gtag", "google-universal", 
                           # "custom"
  google:
    tracking_id: "UA-1234567-8"  # Your tracking ID
    anonymize_ip: false  # Anonymize visitor IP addresses

# =============================================================================
# SITE AUTHOR (Sidebar)
# =============================================================================

author:
  name: "Your Name"
  avatar: "/assets/images/bio-photo.jpg"
  bio: "I am an **amazing** person."  # Markdown allowed
  location: "Somewhere, USA"
  email: # Email address
  links:
    - label: "Email"
      icon: "fas fa-fw fa-envelope-square"
      url: "mailto:your.name@email.com"
    - label: "Website"
      icon: "fas fa-fw fa-link"
      url: "https://your-website.com"
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/username"
    - label: "Facebook"
      icon: "fab fa-fw fa-facebook-square"
      url: "https://facebook.com/username"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/username"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://instagram.com/username"

# =============================================================================
# SITE FOOTER
# =============================================================================

footer:
  links:
    - label: "Twitter"
      icon: "fab fa-fw fa-twitter-square"
      url: "https://twitter.com/username"
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/username"
    - label: "Instagram"
      icon: "fab fa-fw fa-instagram"
      url: "https://instagram.com/username"
  since: "2013"  # Copyright start year (shows range if different from current)

# =============================================================================
# READING FILES
# =============================================================================

include:
  - .htaccess
  - _pages

exclude:
  - "*.sublime-project"
  - "*.sublime-workspace"
  - vendor
  - .asset-cache
  - .bundle
  - .jekyll-assets-cache
  - .sass-cache
  - assets/js/plugins
  - assets/js/_main.js
  - assets/js/vendor
  - Capfile
  - CHANGELOG
  - config
  - Gemfile
  - Gruntfile.js
  - gulpfile.js
  - LICENSE
  - log
  - node_modules
  - package.json
  - package-lock.json
  - Rakefile
  - README
  - tmp
  - /docs
  - /test

keep_files:
  - .git
  - .svn

encoding: "utf-8"
markdown_ext: "markdown,mkdown,mkdn,mkd,md"

# =============================================================================
# CONVERSION
# =============================================================================

markdown: kramdown
highlighter: rouge
lsi: false
excerpt_separator: "\n\n"
incremental: false

# =============================================================================
# MARKDOWN PROCESSING
# =============================================================================

kramdown:
  input: GFM
  hard_wrap: false
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  smart_quotes: lsquo,rsquo,ldquo,rdquo
  enable_coderay: false

# =============================================================================
# SASS/SCSS
# =============================================================================

sass:
  sass_dir: _sass
  style: compressed

# =============================================================================
# OUTPUTTING
# =============================================================================

permalink: /:categories/:title/
paginate: 5  # Number of posts per page
paginate_path: /page:num/
timezone: America/New_York

# =============================================================================
# PAGINATION V2 (Alternative to default pagination)
# =============================================================================

# Uncomment to use jekyll-paginate-v2
# pagination:
#   enabled: true
#   collection: 'posts'
#   per_page: 5
#   permalink: '/page/:num/'
#   title: ':title - page :num'
#   limit: 0
#   sort_field: 'date'
#   sort_reverse: true
#   trail:
#     before: 2
#     after: 2

# =============================================================================
# PLUGINS
# =============================================================================

plugins:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache
  # - jekyll-archives  # Uncomment if using

# Mimic GitHub Pages with --safe
whitelist:
  - jekyll-paginate
  - jekyll-sitemap
  - jekyll-gist
  - jekyll-feed
  - jekyll-include-cache

# =============================================================================
# ARCHIVES
# =============================================================================

category_archive:
  type: liquid  # "liquid" or "jekyll-archives"
  path: /categories/

tag_archive:
  type: liquid  # "liquid" or "jekyll-archives"
  path: /tags/

# jekyll-archives (if installed)
# jekyll-archives:
#   enabled:
#     - categories
#     - tags
#   layouts:
#     category: archive-taxonomy
#     tag: archive-taxonomy
#   permalinks:
#     category: /categories/:name/
#     tag: /tags/:name/

# =============================================================================
# HTML COMPRESSION
# =============================================================================

compress_html:
  clippings: all
  ignore:
    envs: development

# =============================================================================
# DEFAULTS (Front Matter)
# =============================================================================

defaults:
  # _posts
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
      share: true
      related: true
      show_date: true
      toc: true
      toc_sticky: true
      toc_label: "Contents"
      toc_icon: "list"
  
  # _pages
  - scope:
      path: "_pages"
      type: pages
    values:
      layout: single
      author_profile: true
  
  # _docs (if using collections)
  - scope:
      path: ""
      type: docs
    values:
      layout: single
      read_time: false
      author_profile: false
      share: false
      comments: false
      sidebar:
        nav: "docs"

# =============================================================================
# COLLECTIONS (Optional)
# =============================================================================

# collections:
#   docs:
#     output: true
#     permalink: /:collection/:path/
#   recipes:
#     output: true
#     permalink: /:collection/:path/
#   portfolio:
#     output: true
#     permalink: /:collection/:path/

# =============================================================================
# CUSTOM SCRIPTS
# =============================================================================

# Add scripts to <head>
head_scripts:
  # - https://code.jquery.com/jquery-3.2.1.min.js
  # - /assets/js/custom-head-script.js

# Add scripts before </body>
footer_scripts:
  # - /assets/js/custom-footer-script.js

# =============================================================================
# TEASER IMAGE (Default fallback)
# =============================================================================

teaser: /assets/images/500x300.png
```

## Quick Configuration Examples

### 1. Simple Blog Setup

```yaml
theme: minimal-mistakes-jekyll
minimal_mistakes_skin: "default"
title: "My Blog"
description: "A simple blog"
url: "https://yourusername.github.io"

author:
  name: "Your Name"
  avatar: "/assets/images/avatar.jpg"
  bio: "Blogger and developer"

defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: single
      author_profile: true
      read_time: true
      comments: true
```

### 2. Documentation Site

```yaml
theme: minimal-mistakes-jekyll
minimal_mistakes_skin: "air"
title: "Project Documentation"
search: true

defaults:
  - scope:
      path: ""
      type: docs
    values:
      layout: single
      sidebar:
        nav: "docs"
      toc: true
      toc_sticky: true
```

### 3. Portfolio Site

```yaml
theme: minimal-mistakes-jekyll
minimal_mistakes_skin: "dark"
title: "My Portfolio"

author:
  name: "Your Name"
  avatar: "/assets/images/avatar.jpg"
  links:
    - label: "GitHub"
      icon: "fab fa-fw fa-github"
      url: "https://github.com/username"
    - label: "LinkedIn"
      icon: "fab fa-fw fa-linkedin"
      url: "https://linkedin.com/in/username"

defaults:
  - scope:
      path: ""
      type: portfolio
    values:
      layout: single
      author_profile: false
      share: true
```

## Key Configuration Sections Explained

### Skins (Color Schemes)
9 built-in options:
- **default** - White/light theme
- **air** - Clean, airy feel
- **aqua** - Blue/teal tones
- **contrast** - High contrast
- **dark** - Dark theme
- **dirt** - Earth tones
- **mint** - Green/mint colors
- **neon** - Bright neon accents
- **plum** - Purple tones
- **sunrise** - Orange/warm colors

### Layouts
Available in front matter:
- `layout: single` - Single column with sidebar
- `layout: splash` - Full-width, no sidebar
- `layout: archive` - List/archive view
- `layout: home` - Home page with posts
- `layout: search` - Search page
- `layout: posts` - Posts archive
- `layout: categories` - Categories archive
- `layout: tags` - Tags archive
- `layout: collection` - Collection archive

### Comment Providers
- **disqus** - Most popular
- **discourse** - Forum-based
- **facebook** - Facebook comments
- **utterances** - GitHub issues
- **giscus** - GitHub discussions
- **staticman** - Static comments

### Search Providers
- **lunr** - Client-side (default, GitHub Pages compatible)
- **algolia** - Fast, powerful search
- **google** - Google Custom Search

### Analytics Providers
- **google-gtag** - Google Analytics 4
- **google-universal** - Universal Analytics (deprecated)
- **google** - Legacy Analytics

## Navigation Setup

Create `_data/navigation.yml`:

```yaml
main:
  - title: "Home"
    url: /
  - title: "About"
    url: /about/
  - title: "Posts"
    url: /posts/
  - title: "Categories"
    url: /categories/
  - title: "Tags"
    url: /tags/
```

## Critical Notes

1. **Restart Jekyll** after editing `_config.yml`
2. **jekyll-include-cache** plugin is **required**
3. Use `JEKYLL_ENV=production` for comments/analytics in local builds
4. GitHub Pages has limited plugin support
5. `remote_theme` for GitHub Pages, `theme` for local gem

## Resources

- [Official Documentation](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)
- [Quick Start Guide](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [GitHub Repository](https://github.com/mmistakes/minimal-mistakes)
- [Demo Site](https://mmistakes.github.io/minimal-mistakes/)