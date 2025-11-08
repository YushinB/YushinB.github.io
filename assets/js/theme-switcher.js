/**
 * Theme Switcher for Jekyll Site
 * Supports automatic dark/light mode detection and manual toggle
 */

class ThemeSwitcher {
  constructor() {
    this.themes = {
      light: 'light',
      dark: 'dark',
      auto: 'auto'
    };
    
    this.currentTheme = localStorage.getItem('theme') || this.themes.auto;
    this.init();
  }

  init() {
    this.createThemeToggle();
    this.applyTheme(this.currentTheme);
    this.bindEvents();
  }

  createThemeToggle() {
    // Check if toggle already exists
    if (document.querySelector('.theme-toggle')) return;

    const toggle = document.createElement('div');
    toggle.className = 'theme-toggle';
    toggle.innerHTML = `
      <button class="theme-btn" data-theme="auto" title="Auto (System)">
        <i class="fas fa-adjust"></i>
      </button>
      <button class="theme-btn" data-theme="light" title="Light Mode">
        <i class="fas fa-sun"></i>
      </button>
      <button class="theme-btn" data-theme="dark" title="Dark Mode">
        <i class="fas fa-moon"></i>
      </button>
    `;

    // Add to masthead or create floating toggle
    const masthead = document.querySelector('.masthead .greedy-nav');
    if (masthead) {
      masthead.appendChild(toggle);
    } else {
      toggle.classList.add('floating-toggle');
      document.body.appendChild(toggle);
    }
  }

  bindEvents() {
    // Theme toggle buttons
    document.addEventListener('click', (e) => {
      if (e.target.closest('.theme-btn')) {
        const theme = e.target.closest('.theme-btn').dataset.theme;
        this.setTheme(theme);
      }
    });

    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (this.currentTheme === this.themes.auto) {
          this.applyTheme(this.themes.auto);
        }
      });
    }
  }

  setTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
    this.updateToggleState();
  }

  applyTheme(theme) {
    const html = document.documentElement;
    const body = document.body;
    
    // Remove existing theme classes
    html.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    body.classList.remove('theme-light', 'theme-dark', 'theme-auto');
    
    let effectiveTheme = theme;
    
    if (theme === this.themes.auto) {
      // Use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        effectiveTheme = this.themes.dark;
      } else {
        effectiveTheme = this.themes.light;
      }
    }
    
    // Apply theme classes
    html.classList.add(`theme-${theme}`);
    body.classList.add(`theme-${effectiveTheme}`);
    html.setAttribute('data-theme', effectiveTheme);
    
    // Update meta theme-color for mobile browsers
    this.updateMetaThemeColor(effectiveTheme);
    
    // Emit custom event for other scripts
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: effectiveTheme, setting: theme }
    }));
  }

  updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    const colors = {
      light: '#ffffff',
      dark: '#1a1a1a'
    };
    
    metaThemeColor.content = colors[theme] || colors.light;
  }

  updateToggleState() {
    const buttons = document.querySelectorAll('.theme-btn');
    buttons.forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.theme === this.currentTheme) {
        btn.classList.add('active');
      }
    });
  }
}

// Enhanced theme detection and initialization
function initTheme() {
  // Apply theme immediately to prevent flash
  const savedTheme = localStorage.getItem('theme') || 'auto';
  let effectiveTheme = savedTheme;
  
  if (savedTheme === 'auto') {
    effectiveTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  document.documentElement.setAttribute('data-theme', effectiveTheme);
  document.documentElement.classList.add(`theme-${savedTheme}`);
  document.body.classList.add(`theme-${effectiveTheme}`);
}

// Initialize theme immediately
initTheme();

// Initialize theme switcher when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new ThemeSwitcher());
} else {
  new ThemeSwitcher();
}

// Handle page transitions (for SPA-like behavior)
document.addEventListener('turbo:load', () => new ThemeSwitcher());
document.addEventListener('pjax:end', () => new ThemeSwitcher());