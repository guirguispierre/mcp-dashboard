# CSS Design System Documentation

This document provides comprehensive documentation of the CSS design system used across the Poke MCP Dashboard.

## 🎨 Color Palette

### Light Mode

```css
:root {
  /* Backgrounds */
  --bg-primary: #ffffff;      /* Main background */
  --bg-secondary: #fafafa;    /* Secondary surfaces */
  --bg-tertiary: #f5f5f5;     /* Tertiary surfaces */
  --bg-code: #f8f8f8;         /* Code blocks background */
  
  /* Text Colors */
  --text-primary: #000000;    /* Primary text */
  --text-secondary: #666666;  /* Secondary text */
  --text-tertiary: #999999;   /* Tertiary text */
  --text-disabled: #cccccc;   /* Disabled text */
  
  /* UI Colors */
  --border-color: #e0e0e0;    /* Borders and dividers */
  --border-light: #f0f0f0;    /* Lighter borders */
  --accent-color: #000000;    /* Primary accent */
  --hover-bg: #f5f5f5;        /* Hover backgrounds */
  
  /* Semantic Colors */
  --success: #22c55e;         /* Success states */
  --warning: #f59e0b;         /* Warning states */
  --error: #ef4444;           /* Error states */
  --info: #3b82f6;            /* Info states */
}
```

### Dark Mode

```css
[data-theme="dark"] {
  /* Backgrounds */
  --bg-primary: #000000;      /* Main background */
  --bg-secondary: #0a0a0a;    /* Secondary surfaces */
  --bg-tertiary: #141414;     /* Tertiary surfaces */
  --bg-code: #1a1a1a;         /* Code blocks background */
  
  /* Text Colors */
  --text-primary: #ffffff;    /* Primary text */
  --text-secondary: #999999;  /* Secondary text */
  --text-tertiary: #666666;   /* Tertiary text */
  --text-disabled: #444444;   /* Disabled text */
  
  /* UI Colors */
  --border-color: #333333;    /* Borders and dividers */
  --border-light: #222222;    /* Lighter borders */
  --accent-color: #ffffff;    /* Primary accent */
  --hover-bg: #1a1a1a;        /* Hover backgrounds */
  
  /* Semantic colors remain the same */
}
```

### Color Usage Guidelines

| Color | Usage | Example |
|-------|-------|----------|
| `--text-primary` | Main content, headings | Page titles, body text |
| `--text-secondary` | Supporting content | Descriptions, captions |
| `--text-tertiary` | Minimal priority content | Timestamps, metadata |
| `--bg-primary` | Main background | Page background |
| `--bg-secondary` | Card backgrounds | Cards, panels |
| `--border-color` | Separators | Card borders, dividers |
| `--accent-color` | Interactive elements | Links, buttons |

## 📐 Typography

### Font Stack

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 
             'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Type Scale

```css
/* Base: 16px (1rem) */

/* Display (Hero Titles) */
.display-1 { font-size: 3.5rem; font-weight: 800; line-height: 1.1; }  /* 56px */
.display-2 { font-size: 3rem; font-weight: 800; line-height: 1.2; }    /* 48px */
.display-3 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }  /* 40px */

/* Headings */
.h1 { font-size: 2rem; font-weight: 700; line-height: 1.3; }      /* 32px */
.h2 { font-size: 1.75rem; font-weight: 700; line-height: 1.3; }   /* 28px */
.h3 { font-size: 1.5rem; font-weight: 600; line-height: 1.4; }    /* 24px */
.h4 { font-size: 1.25rem; font-weight: 600; line-height: 1.4; }   /* 20px */
.h5 { font-size: 1.125rem; font-weight: 600; line-height: 1.5; }  /* 18px */
.h6 { font-size: 1rem; font-weight: 600; line-height: 1.5; }      /* 16px */

/* Body */
.body-large { font-size: 1.125rem; line-height: 1.7; }  /* 18px */
.body { font-size: 1rem; line-height: 1.6; }            /* 16px */
.body-small { font-size: 0.875rem; line-height: 1.6; }  /* 14px */
.caption { font-size: 0.75rem; line-height: 1.5; }      /* 12px */

/* Code */
.code { 
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  line-height: 1.6;
}
```

### Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

### Typography Best Practices

- **Headings**: Use appropriate semantic tags (h1-h6)
- **Body text**: 16px base size for readability
- **Line height**: 1.5-1.7 for body text, 1.1-1.3 for headings
- **Line length**: Max 75 characters for optimal readability
- **Contrast**: Minimum 4.5:1 for body text, 3:1 for large text

## 📏 Spacing System

### Spacing Scale

```css
--space-xs: 0.25rem;   /* 4px */
--space-sm: 0.5rem;    /* 8px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 3rem;     /* 48px */
--space-3xl: 4rem;     /* 64px */
--space-4xl: 6rem;     /* 96px */
```

### Usage Examples

```css
/* Section spacing */
section {
  padding: var(--space-3xl) 0;
}

/* Card padding */
.card {
  padding: var(--space-xl);
}

/* Element margins */
h2 {
  margin-bottom: var(--space-lg);
}

p {
  margin-bottom: var(--space-md);
}

/* Grid gaps */
.grid {
  gap: var(--space-xl);
}
```

## 🎯 Component Guidelines

### Buttons

```css
.btn {
  /* Base styles */
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  
  /* Primary button */
  background: var(--accent-color);
  color: var(--bg-primary);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: translateY(0);
}

.btn:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

#### Button Variants

- **Primary**: Main actions (black bg, white text)
- **Secondary**: Secondary actions (white bg, black text, border)
- **Outline**: Tertiary actions (transparent bg, border)
- **Ghost**: Minimal actions (transparent, no border)

### Cards

```css
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
```

### Links

```css
a {
  color: var(--text-primary);
  text-decoration: none;
  border-bottom: 1px solid var(--border-color);
  transition: border-color 0.2s ease;
}

a:hover {
  border-bottom-color: var(--text-primary);
}

a:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

### Code Blocks

```css
code {
  background: var(--bg-code);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
  border: 1px solid var(--border-light);
}

pre {
  background: var(--bg-code);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  border: 1px solid var(--border-color);
}

pre code {
  background: none;
  padding: 0;
  border: none;
}
```

### Navigation

```css
nav {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
}

nav a {
  color: var(--text-secondary);
  border: none;
  transition: color 0.2s ease;
}

nav a:hover,
nav a.active {
  color: var(--text-primary);
}
```

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Extra Small (Default) */
/* 0 - 639px */

/* Small */
@media (min-width: 640px) {
  /* Tablets */
}

/* Medium */
@media (min-width: 768px) {
  /* Small laptops */
}

/* Large */
@media (min-width: 1024px) {
  /* Desktops */
}

/* Extra Large */
@media (min-width: 1280px) {
  /* Large desktops */
}

/* 2X Large */
@media (min-width: 1536px) {
  /* Ultra-wide screens */
}
```

### Responsive Utilities

```css
/* Container */
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 640px) {
  .container { padding: 0 1.5rem; }
}

@media (min-width: 1024px) {
  .container { padding: 0 2rem; }
}

/* Grid System */
.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }

@media (min-width: 640px) {
  .grid-cols-sm-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-cols-lg-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### Mobile Optimization

```css
/* Touch targets: minimum 44x44px */
button, a, input {
  min-height: 44px;
  min-width: 44px;
}

/* Readable line lengths */
.content {
  max-width: 65ch;
}

/* Responsive typography */
html {
  font-size: 16px;
}

@media (max-width: 640px) {
  html { font-size: 14px; }
}

@media (min-width: 1280px) {
  html { font-size: 18px; }
}
```

## ✨ Animations & Transitions

### Easing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Transitions

```css
/* Hover effects */
.hover-lift {
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Slide up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp 0.4s ease-out;
}
```

### Animation Best Practices

- Keep animations under 300ms for interactions
- Use `transform` and `opacity` for best performance
- Add `will-change` for complex animations
- Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## ♿ Accessibility

### Focus Styles

```css
:focus {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid var(--accent-color);
  outline-offset: 2px;
}
```

### Color Contrast

**WCAG AA Requirements:**
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

**Our Ratios:**
- Black on White: 21:1 ✅
- #666666 on White: 5.74:1 ✅
- #999999 on White: 2.85:1 (large text only)

### Screen Reader Utilities

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## 🎨 Theme System

### Implementation

```css
/* Default light theme */
:root {
  /* Variables here */
}

/* Dark theme */
[data-theme="dark"] {
  /* Override variables */
}

/* System preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    /* Apply dark theme variables */
  }
}
```

### JavaScript Theme Toggle

```javascript
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', currentTheme);

function toggleTheme() {
  const newTheme = html.getAttribute('data-theme') === 'light' 
    ? 'dark' 
    : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
```

## 📦 Organization

### File Structure

```
styles/
├── integration-styles.css    # Shared styles for all integration pages
├── variables.css             # CSS custom properties
├── base.css                  # Reset and base styles
├── components.css            # Reusable components
└── utilities.css             # Utility classes
```

### CSS Architecture

1. **Variables**: Define all design tokens
2. **Base**: Reset and element defaults
3. **Components**: Reusable UI components
4. **Utilities**: Single-purpose helper classes
5. **Page-specific**: Override as needed

### Naming Conventions

**BEM (Block Element Modifier):**

```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__content { }

/* Modifier */
.card--featured { }
.card--dark { }
```

## 🚀 Performance

### CSS Optimization

- Use CSS custom properties for dynamic values
- Avoid deep nesting (max 3 levels)
- Use shorthand properties
- Group media queries
- Minimize use of expensive properties (box-shadow, filter)

### Critical CSS

```html
<style>
  /* Inline critical above-the-fold CSS */
  body { margin: 0; font-family: Inter, sans-serif; }
  .header { /* styles */ }
  .hero { /* styles */ }
</style>
```

### Loading Strategy

```html
<!-- Critical CSS inline -->
<!-- Non-critical CSS deferred -->
<link rel="stylesheet" href="integration-styles.css" media="print" onload="this.media='all'">
```

## 📋 Checklist for New Styles

- [ ] Uses design system variables
- [ ] Responsive on all breakpoints
- [ ] Accessible (keyboard, screen reader, contrast)
- [ ] Dark mode compatible
- [ ] Follows naming conventions
- [ ] Documented if complex
- [ ] Performance optimized
- [ ] Cross-browser tested

---

**Last Updated**: February 2026
**Maintained by**: [@guirguispierre](https://github.com/guirguispierre)
