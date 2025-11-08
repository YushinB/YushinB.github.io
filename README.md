# YushinB Personal blog

This repository contains the source for a personal research/portfolio website powered by Jekyll and the Minimal Mistakes theme.

## What this project is

- A static site written for Jekyll (gem-based Minimal Mistakes theme)
## 📁 Project Structure

- Pages, blog posts, and an `articles` collection in the `_articles` folder
- Custom theme enhancements (dark/light mode, TOC styling, header overlay fixes)

## Quick links

- Source root: this folder
- Pages: `_pages/` (About, Blog, Articles archive, etc.)
- Posts: `_posts/`
- Articles collection: `_articles/` (each article is a separate Markdown file)
- Custom CSS: `assets/css/theme-enhanced.css`
- Theme JS: `assets/js/theme-switcher.js`
- Images: `assets/images/`

## Prerequisites (Windows / PowerShell)

- Ruby (recommended 2.7+ or compatible with your `Gemfile`)
- Bundler
- Jekyll (installed via Bundler/Gemfile)
- Node/npm (optional, for asset pipelines or local tooling)

### Installing Ruby and Bundler on Windows

**Option 1: Using RubyInstaller (Recommended)**

1. Download Ruby+Devkit from [rubyinstaller.org](https://rubyinstaller.org/)
2. Run the installer and select "Add Ruby executables to your PATH"
3. After installation, open PowerShell and install Bundler:

```powershell
gem install bundler
```

**Option 2: Using Chocolatey**

```powershell
# Run PowerShell as Administrator
choco install ruby

# Install Bundler
gem install bundler
```

### Installing Project Dependencies

Navigate to your project directory and install all gems:

```powershell
# Install all dependencies from Gemfile
bundle install
```

If you are on Windows, also consider adding `wdm` to the Gemfile to avoid polling for changes:

```powershell
# If Windows, add in Gemfile: gem 'wdm', '>= 0.1.0' and run
bundle install
```

## Local development (PowerShell)

Start the server with LiveReload (recommended):

```powershell
# Install gems if you haven't
bundle install

# Start Jekyll with LiveReload
bundle exec jekyll serve --livereload
```

Open http://127.0.0.1:4000 in your browser. LiveReload will auto-refresh when you edit files.

Notes:
- The server logs missing static assets (images) as errors during generation; place images in `assets/images/` with the expected filenames to remove these messages.
- If the server suggests adding `wdm` on Windows, add it to the Gemfile and run `bundle install`.

## Build for production

```powershell
# Build static site (output to _site/ folder)
bundle exec jekyll build

# Or build for production environment
JEKYLL_ENV=production bundle exec jekyll build

# Generated site will be in _site/
```

## Deployment to GitHub Pages

Your repository is configured as `hatakebmt/Datvu.github.io`. You have two deployment options:

### Option A: Automatic GitHub Pages (Recommended)

1. Push your changes to GitHub:
   ```powershell
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```

2. Configure GitHub Pages in your repository settings:
   - Go to **Settings → Pages**
   - Under "Build and deployment":
     - **Source**: Select "Deploy from a branch"
     - **Branch**: Select `master` and `/root` folder
     - Click **Save**

3. GitHub will automatically build and deploy your Jekyll site
4. Your site will be available at: `https://usernam.github.io`

### Option B: GitHub Actions Workflow (Advanced)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Jekyll site to Pages

on:
  push:
    branches: ["master"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.1'
          bundler-cache: true
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Build with Jekyll
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then in repository settings, set Pages source to "GitHub Actions".

### Common Bundle Commands for Deployment

```powershell
# Update all gems to latest compatible versions
bundle update

# Check which gems are outdated
bundle outdated

# Show installed gems
bundle list

# Clean up old gem versions
bundle clean
```

## How to add a new Article

1. Create a Markdown file in `_articles/`:

```yaml
---
layout: single
title: "My New Article"
permalink: /articles/my-new-article/
header:
  overlay_image: /assets/images/my-new-article-header.jpg
excerpt: "One-line summary"
---

# Content
```

2. Add any supporting images to `assets/images/` and refer to them with absolute paths starting with `/assets/images/`.

3. Run the site locally to verify the layout.

## Theme & customization notes

- Primary theme adjustments and the global header overlay/TOC fixes live in `assets/css/theme-enhanced.css`. That file contains:
  - header overlay text rules (ensures excerpt and header title are always readable)
  - global CSS variables and dark/light overrides
  - TOC styling for both light and dark themes
  - navigation/masthead theme overrides

- Theme switching and persistence are handled in `assets/js/theme-switcher.js`. It reads/writes to `localStorage`, responds to system preference, and updates `html[data-theme]` accordingly.

If you want to tweak the header overlay color/contrast, edit the `.page__hero--overlay` selectors in `assets/css/theme-enhanced.css`. For TOC look-and-feel, edit the `.toc` and `.toc__menu` sections.

## Troubleshooting

- Missing image errors (common during development):
  - The Jekyll build prints lines like `ERROR '/assets/images/some.jpg' not found.`
  - Fix: add the referenced images to `assets/images/` or update the paths in front matter.

- If CSS changes do not apply:
  - Ensure browser cache is cleared or use a private window.
  - LiveReload should auto-refresh, but if not, restart `bundle exec jekyll serve`.

- Linting message `MD047/single-trailing-newline`:
  - Some editors or automated tools expect a single trailing newline at EOF; make sure files end with a newline.

## Development workflow / suggestions

- Make content changes in `_pages/`, `_posts/`, or `_articles/` and preview locally.
- Use small commits for content edits.
- When adding images, keep filenames simple and update front matter paths accordingly.

## Contributing

- Fork the repository, create a branch, make edits, and open a pull request.
- For UI/style changes, include screenshots and a short description of the change.

## Where to look for further customization

- `_config.yml` — site-wide configuration (collections, permalinks, theme settings)
- `_includes/` — theme includes (masthead, head customizations, theme toggle)
- `_layouts/` — layout templates (if overridden)
- `assets/css/` — custom CSS files
- `assets/js/` — custom JS files

## Contact

For questions or contributions, please open an issue or pull request on GitHub.

**Site URL**: `https://.github.io/`

---

_Last updated: November 2025_
