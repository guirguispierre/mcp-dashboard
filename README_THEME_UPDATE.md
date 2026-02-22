# Theme Update - Minimal Black/White Design

## Overview
All integration guide pages have been updated to match the minimal black/white aesthetic of the main index.html page.

## Changes Made

### Design System
- **Removed**: Neon green accents (#00ff00), glowing text shadows, gradients
- **Added**: Minimal grayscale palette with subtle blue accents (#0ea5e9)
- **Updated**: All borders, backgrounds, and text colors to use consistent gray scale

### Color Palette
```css
/* Primary Colors */
--bg-primary: #ffffff (white background)
--bg-card: #ffffff (card backgrounds)
--text-primary: #0a0a0a (almost black text)

/* Gray Scale */
--gray-darker: #18181b
--gray-dark: #27272a
--gray-medium: #3f3f46
--gray-light: #71717a
--gray-lighter: #a1a1aa
--gray-border: #e4e4e7

/* Accent (used sparingly) */
--accent-blue: #0ea5e9 (subtle blue for links and highlights)
```

### Typography
- Font: Inter (matching index.html)
- Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- Letter spacing: -0.025em for headings
- Line height: 1.6 for body text

### Components Updated
1. **Hero Sections**: Removed neon green borders, simplified to gray borders
2. **Section Titles**: Changed from bright green to standard text color
3. **Step Indicators**: Changed from green circles to black/white circles
4. **Credit Sections**: Removed colored borders, simplified to minimal gray borders
5. **Conversation Examples**: Updated border colors from green to neutral
6. **Buttons**: Hover states use subtle gray instead of bright green
7. **Code Blocks**: Simplified styling with gray borders

### Files Modified
- All integration HTML files (bart.html, ffmpeg.html, earnings-feed.html, last-fm.html, todoist.html, github.html, deepwiki.html, netlify.html, supabase.html, vercel.html)
- Created integration-styles-minimal.css (new minimal theme)

### Benefits
- Consistent visual experience across entire site
- Professional, clean aesthetic
- Better accessibility and readability
- Reduced visual noise and distractions
- Matches modern minimalist design trends

## Testing Checklist
- [ ] All pages load correctly with new styles
- [ ] Dark mode compatibility (if applicable)
- [ ] Mobile responsiveness maintained
- [ ] All links and buttons functional
- [ ] Typography hierarchy clear and consistent
- [ ] Code blocks readable
- [ ] Credit sections properly styled
