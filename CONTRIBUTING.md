# Contributing to MCP Dashboard

Thank you for your interest in contributing to the MCP Dashboard! This project is a community-driven showcase of Model Context Protocol integrations for Poke users, and we welcome contributions from developers of all experience levels.

## 📋 Table of Contents

- [Welcome](#welcome)
- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Code Style Guidelines](#code-style-guidelines)
- [Adding New Integrations](#adding-new-integrations)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Security Considerations](#security-considerations)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Testing Checklist](#testing-checklist)
- [Git Workflow](#git-workflow)
- [Review Process](#review-process)
- [Community](#community)

---

## 🎯 Welcome

The MCP Dashboard is a **static HTML/CSS/JavaScript website** that helps Poke users discover and configure MCP (Model Context Protocol) integrations. Our goal is to make it easy for anyone to enhance their Poke AI assistant with powerful external capabilities.

### Project Philosophy

- **Simplicity First**: Keep the codebase clean and easy to understand
- **User-Focused**: Prioritize clear documentation and user experience
- **Security-Conscious**: Always handle API keys and credentials safely
- **Accessible**: Ensure the dashboard works for everyone
- **Community-Driven**: Welcome contributions and feedback

---

## 🤝 Ways to Contribute

### 1. **Code Contributions**
- Add new MCP integration pages
- Improve existing integration documentation
- Enhance UI/UX design
- Fix bugs and improve performance
- Add new features

### 2. **Documentation**
- Improve README and guides
- Add more Poke conversation examples
- Create video tutorials
- Translate content to other languages
- Write blog posts about integrations

### 3. **Bug Reports**
- Report issues you encounter
- Provide detailed reproduction steps
- Suggest fixes or workarounds

### 4. **Feature Requests**
- Propose new integrations
- Suggest UX improvements
- Request new functionality

### 5. **Design Contributions**
- Improve visual design
- Create illustrations or icons
- Enhance mobile responsiveness
- Suggest accessibility improvements

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have:

- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **Git** installed ([Download](https://git-scm.com/))
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))
- Basic knowledge of HTML, CSS, and JavaScript

### Development Environment Setup

1. **Fork the repository**
   
   Click the "Fork" button at the top right of the [repository page](https://github.com/guirguispierre/mcp-dashboard).

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR-USERNAME/mcp-dashboard.git
   cd mcp-dashboard
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/guirguispierre/mcp-dashboard.git
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Start local development server**

   ```bash
   npm run dev
   ```

   This will start a local server at `http://localhost:3000`

6. **Verify the setup**

   - Open `http://localhost:3000` in your browser
   - Check that all integration cards load correctly
   - Click through to individual integration pages
   - Test the theme toggle (on index.html)
   - Verify responsive design on mobile devices

### Keeping Your Fork Updated

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 📁 Project Structure

```
mcp-dashboard/
├── index.html                   # Main dashboard (modern light/dark theme)
├── style.css                    # Shared CSS variables and components
├── script.js                    # Interactive JavaScript functionality
├── integration-styles.css       # Shared styles for integration pages (optional)
├── integration-template.html    # Template for new integrations
│
├── Integration Pages (consistent dark theme):
│   ├── bart.html                # BART transit integration
│   ├── earnings-feed.html       # Financial data integration
│   ├── ffmpeg.html              # Media processing integration
│   ├── todoist.html             # Task management integration
│   ├── last-fm.html             # Music tracking integration
│   ├── netlify.html             # Netlify deployment integration
│   ├── vercel.html              # Vercel deployment integration
│   ├── deepwiki.html            # Documentation search integration
│   ├── supabase.html            # Database integration
│   └── github.html              # GitHub integration
│
├── Documentation:
│   ├── README.md                # Project overview and user guide
│   ├── CONTRIBUTING.md          # This file - contribution guidelines
│   ├── INTEGRATION_TEMPLATE_GUIDE.md  # Template usage guide
│   └── CSS_ANALYSIS.md          # CSS architecture documentation
│
└── Configuration Files:
    ├── package.json             # Project metadata and scripts
    ├── vercel.json              # Vercel deployment configuration
    └── netlify.toml             # Netlify deployment configuration
```

### Design System Architecture

The project uses **two intentionally different design systems**:

1. **Main Dashboard (index.html)**
   - Modern light/dark theme with toggle
   - Subtle blue accents (#0ea5e9)
   - Inter font from Google Fonts
   - Clean, professional aesthetic for browsing

2. **Integration Pages (all 10 detail pages)**
   - Fixed dark theme (no toggle)
   - Neon green accents (#00ff00)
   - System fonts
   - Developer-focused aesthetic for documentation

**This is intentional** - the main page serves as a showcase while integration pages are optimized for code-heavy technical documentation. When contributing, match the design of the page type you're working on.

📖 **See [CSS_ANALYSIS.md](CSS_ANALYSIS.md) for detailed architecture documentation.**

---

## 🎨 Code Style Guidelines

### HTML Guidelines

**Consistency**
- Use 4 spaces for indentation (not tabs)
- Use lowercase for element names and attributes
- Use double quotes for attribute values
- Close all tags properly

**Semantic HTML**
- Use semantic tags: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
- Use appropriate heading hierarchy (h1 → h2 → h3)
- Include proper ARIA labels for accessibility
- Use `<code>` for inline code and `<pre><code>` for code blocks

### CSS Guidelines

**Use CSS Variables**

Integration pages use these variables from `style.css`:

```css
:root {
    --background: #000000;       /* Pure black */
    --surface: #0a0a0a;         /* Card backgrounds */
    --success-color: #00ff00;   /* Neon green accents */
    --warning-color: #ffcc00;   /* Yellow warnings */
    --text-primary: #ffffff;    /* White text */
    --text-secondary: #b0b0b0;  /* Gray text */
    --border-color: #333333;    /* Borders */
}
```

**Responsive Design**
```css
/* Mobile-first approach */
.container { padding: 1rem; }

@media (min-width: 768px) {
    .container { padding: 2rem; }
}
```

### JavaScript Guidelines

- Use 4 spaces for indentation
- Use single quotes for strings
- Use `const`/`let`, never `var`
- Use camelCase for variables and functions
- Add JSDoc comments for complex functions
- Handle errors gracefully

---

## ➕ Adding New Integrations

### 🎯 Quick Start: Use the Template!

We've created a complete template to make adding integrations easy:

**1. Copy the template:**
```bash
cp integration-template.html your-integration.html
```

**2. Read the guide:**
📖 **[INTEGRATION_TEMPLATE_GUIDE.md](INTEGRATION_TEMPLATE_GUIDE.md)** - Complete step-by-step instructions

**3. Follow the TODO comments in the template**

The template includes:
- ✅ All required sections pre-structured
- ✅ Consistent styling matching existing pages
- ✅ TODO comments marking what to customize
- ✅ Example structure for all components
- ✅ Built-in responsive design
- ✅ Accessibility features included

### Template Files

| File | Purpose |
|------|---------|
| **[integration-template.html](integration-template.html)** | Complete HTML template with TODO comments |
| **[INTEGRATION_TEMPLATE_GUIDE.md](INTEGRATION_TEMPLATE_GUIDE.md)** | Comprehensive usage guide |
| **[integration-styles.css](integration-styles.css)** | Shared CSS (optional alternative to inline styles) |

### Step-by-Step Process

#### 1. **Create Your Integration Page**

```bash
# Copy the template
cp integration-template.html slack.html

# Or copy from existing integration
cp bart.html slack.html
```

#### 2. **Customize the Content**

Update these sections (see template for details):

- [ ] Meta tags (description, title)
- [ ] Hero section (icon, title, subtitle)
- [ ] Setup instructions (4-6 steps)
- [ ] MCP configuration (valid JSON)
- [ ] Conversation examples (3-5 realistic examples)
- [ ] Capabilities grid (4-6 features)
- [ ] Resources (3-6 links)
- [ ] Pro tips (5-8 tips)
- [ ] Footer disclaimer

#### 3. **Add to Main Dashboard**

Add your integration card to `index.html`:

```html
<div class="integration-card fade-in" 
     data-category="your-category" 
     data-name="Your Integration">
    <div class="card-icon">🔧</div>
    <div class="card-header">
        <div>
            <h3 class="card-title">Your Integration</h3>
            <div class="status-indicator"></div>
        </div>
    </div>
    <p class="card-description">Brief description</p>
    <div class="card-tags">
        <span class="tag tag-category">Category</span>
        <span class="tag tag-status">Active</span>
    </div>
    <div class="card-actions">
        <button class="btn btn-primary" 
                onclick="window.location.href='your-integration.html'">
            <span>📚</span>
            <span>View Guide</span>
        </button>
        <button class="btn btn-secondary" 
                onclick="showDemo('your-integration')">
            <span>▶️</span>
        </button>
    </div>
</div>
```

**Available Categories:**
- `developer` - Developer tools and APIs
- `productivity` - Task and project management
- `deployment` - Hosting and deployment platforms
- `transit` - Transportation and location services
- `entertainment` - Music, media, games
- `financial` - Financial data and analytics
- `media` - Video/audio processing

#### 4. **Update JavaScript (script.js)**

Add modal data and demo function:

```javascript
// In the helpData object (around line 30)
'your-integration': {
    title: '🔧 Your Integration for Poke',
    description: 'What this integration does',
    setup: [
        'Step 1 brief instruction',
        'Step 2 brief instruction',
        // ...
    ],
    pokeConfig: `{
  "mcpServers": {
    "your-integration": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-your-integration"],
      "env": {
        "API_KEY": "your_key_here"
      }
    }
  }
}`,
    examples: [
        '"Example Poke prompt 1"',
        '"Example Poke prompt 2"'
    ],
    links: [
        { text: 'Official Docs', url: 'https://...' }
    ]
}

// In the demoData object (around line 200)
'your-integration': 'Try asking Poke:\n\n"Example prompt"\n\nPoke will...'
```

#### 5. **Update README.md**

Add to the appropriate category section:

```markdown
### 🆕 Your Category
- **[Your Integration](your-integration.html)** - Brief description
  - Feature 1
  - Feature 2
  - Feature 3
```

#### 6. **Complete the Checklist**

Before submitting your PR:

- [ ] Used integration-template.html as starting point
- [ ] Followed INTEGRATION_TEMPLATE_GUIDE.md instructions
- [ ] All TODO comments removed
- [ ] All placeholders replaced with actual content
- [ ] Page follows dark theme styling
- [ ] Meta tags complete and accurate
- [ ] Setup instructions tested and working
- [ ] MCP configuration is valid JSON
- [ ] 3-5 realistic Poke conversation examples
- [ ] 4-6 capability cards describing features
- [ ] Resources section with working links
- [ ] Pro Tips section with helpful advice
- [ ] Card added to index.html
- [ ] Modal data added to script.js
- [ ] README.md updated
- [ ] Tested on desktop and mobile
- [ ] All links tested and working
- [ ] No API keys in code examples
- [ ] Footer disclaimer updated

📖 **For detailed guidance, see [INTEGRATION_TEMPLATE_GUIDE.md](INTEGRATION_TEMPLATE_GUIDE.md)**

---

## 🔄 Pull Request Process

### Before Submitting

1. **Test thoroughly**
   - Run local development server
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test on mobile devices or browser dev tools
   - Verify all links work
   - Check for console errors

2. **Review your changes**
   ```bash
   git diff main your-branch-name
   ```

3. **Update documentation**
   - Update README.md if needed
   - Add comments to complex code
   - Update CONTRIBUTING.md if you add new processes

### Creating a Pull Request

1. **Create a feature branch**
   ```bash
   git checkout -b feature/add-slack-integration
   # or
   git checkout -b fix/mobile-layout-bug
   # or
   git checkout -b docs/improve-setup-guide
   ```

2. **Make your changes**
   - Follow code style guidelines
   - Keep commits focused and atomic
   - Write clear commit messages

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add Slack MCP integration page with setup guide"
   ```

   **Commit Message Format:**
   ```
   <type>: <description>

   [optional body]

   [optional footer]
   ```

   **Types:**
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes (formatting, semicolons, etc.)
   - `refactor`: Code refactoring
   - `test`: Adding or updating tests
   - `chore`: Maintenance tasks

   **Examples:**
   ```
   feat: add Slack MCP integration page

   - Create slack.html using integration template
   - Add Slack card to main dashboard
   - Include 5 Poke conversation examples
   - Add modal data to script.js

   Closes #42
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/add-slack-integration
   ```

5. **Open a Pull Request**
   - Go to the original repository on GitHub
   - Click "Pull requests" → "New pull request"
   - Click "compare across forks"
   - Select your fork and branch
   - Click "Create pull request"

### Pull Request Template

```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] New integration
- [ ] Bug fix
- [ ] Feature enhancement
- [ ] Documentation update
- [ ] Code refactoring

## Integration Details (if applicable)
- **Integration Name:** [e.g., Slack]
- **Category:** [e.g., Productivity]
- **MCP Server:** [npm package or GitHub link]
- **Requires API Key:** [Yes/No]

## Changes Made
- Created [integration].html using template
- Added integration card to index.html
- Added modal data to script.js
- Updated README.md

## Testing Checklist
- [ ] Tested locally with npm run dev
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested mobile responsiveness (375px, 768px, 1024px)
- [ ] All links work correctly
- [ ] No console errors
- [ ] Integration checklist completed
- [ ] Followed INTEGRATION_TEMPLATE_GUIDE.md

## Screenshots (if applicable)
[Add screenshots of new features or UI changes]

## Related Issues
Closes #XX
```

### Review Process Timeline

- Initial review: Within 3-5 days
- Follow-up reviews: Within 2-3 days
- Merge after approval: 1-2 days

---

## 🐛 Issue Guidelines

### Before Creating an Issue

1. **Search existing issues** to avoid duplicates
2. **Update to the latest version** and test again
3. **Check the FAQ** in README.md
4. **Reproduce the bug** consistently

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. macOS 13.0]
 - Browser: [e.g. Chrome 120]
 - Device: [e.g. Desktop, iPhone 14]

**Additional context**
Any other context about the problem.
```

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions or features you've considered.

**Additional context**
Any other context or screenshots.

**Would you like to implement this feature?**
Yes/No. If yes, we can guide you!
```

### New Integration Request

```markdown
**Integration Name**
[e.g., Slack, Notion, Linear]

**Description**
Brief description of what this integration does.

**Category**
[e.g., Productivity, Developer Tools, Entertainment]

**MCP Server Availability**
- [ ] Official MCP server exists
- [ ] Community MCP server exists
- [ ] No MCP server yet (would need to be created)

**Links**
- Service website: [URL]
- API documentation: [URL]
- MCP server (if exists): [URL]

**Why add this integration?**
Explain the value for Poke users.

**Would you like to create this integration page?**
Yes/No. If yes, we'll help you get started!
```

### Issue Labels

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to docs
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed
- `integration`: New MCP integration
- `question`: Further information requested
- `wontfix`: This will not be worked on

---

## 🔒 Security Considerations

### API Key Management

**Never commit API keys or secrets**

❌ **Bad:**
```html
<pre><code>{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "ghp_1234567890abcdefghijklmnop"
      }
    }
  }
}</code></pre>
```

✅ **Good:**
```html
<pre><code>{
  "mcpServers": {
    "github": {
      "env": {
        "GITHUB_TOKEN": "your_github_token_here"
      }
    }
  }
}</code></pre>
```

### Content Security

**Input Validation**
```javascript
// Always validate user input
function searchIntegrations(query) {
    // Sanitize input
    const sanitized = query.trim().toLowerCase();
    
    // Validate
    if (sanitized.length > 100) {
        console.warn('Search query too long');
        return;
    }
    
    // Use safely
    filterCards(sanitized);
}
```

**XSS Prevention**
```javascript
// Bad: Direct HTML injection
element.innerHTML = userInput;

// Good: Use textContent or sanitize
element.textContent = userInput;
```

### External Links

Always use `rel="noopener noreferrer"` for external links:

```html
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
    External Link
</a>
```

---

## ♿ Accessibility Guidelines

### Keyboard Navigation

```html
<!-- Good: Proper semantic button -->
<button onclick="handleClick()">Click Me</button>

<!-- Bad: Div pretending to be button -->
<div onclick="handleClick()">Click Me</div>
```

### ARIA Labels

```html
<!-- Icon-only buttons need labels -->
<button aria-label="Close modal" onclick="closeModal()">✕</button>

<!-- Status indicators -->
<div class="status-indicator" role="status" aria-label="Integration active"></div>
```

### Color Contrast

- Normal text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Test with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Focus Indicators

```css
button:focus,
a:focus {
    outline: 2px solid var(--success-color);
    outline-offset: 2px;
}
```

---

## ✅ Testing Checklist

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Responsive Design
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large desktop (1025px+)

### Functionality
- [ ] All links work
- [ ] Navigation works
- [ ] Back buttons work
- [ ] No console errors
- [ ] Code blocks display correctly

### Content Quality
- [ ] No typos
- [ ] Valid JSON in configs
- [ ] Realistic Poke examples
- [ ] Clear instructions

---

## 🌿 Git Workflow

### Branch Naming

```bash
feature/add-notion-integration   # New features
fix/mobile-menu-overflow         # Bug fixes
docs/improve-setup-guide         # Documentation
style/update-colors              # Visual changes
```

### Commit Messages

```bash
# Good
feat: add Notion MCP integration page
fix: resolve mobile layout overflow on iOS
docs: improve BART setup instructions

# Bad
Updated stuff
Fix bug
changes
```

---

## 👥 Review Process

### For Contributors

1. Wait for initial review (3-5 days)
2. Respond to feedback promptly
3. Make requested changes
4. Request re-review
5. Be patient and respectful

### For Reviewers

Check:
1. Functionality - Does it work?
2. Code quality - Clean and readable?
3. Documentation - Clear instructions?
4. Design - Consistent styling?
5. Testing - Checklist completed?

---

## 🎉 Community

### Getting Help

- **GitHub Issues**: Technical questions
- **Discussions**: General questions and ideas
- **Pull Requests**: Mention @guirguispierre for urgent reviews

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:
- Be respectful and considerate
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy and kindness

### Recognition

Contributors are:
- Listed in README.md
- Thanked in release notes
- Credited in commits
- Invited to the contributor community

---

## 📚 Additional Resources

### Template & Guides

- 📝 **[integration-template.html](integration-template.html)** - Integration page template
- 📖 **[INTEGRATION_TEMPLATE_GUIDE.md](INTEGRATION_TEMPLATE_GUIDE.md)** - Complete template guide
- 🎨 **[CSS_ANALYSIS.md](CSS_ANALYSIS.md)** - CSS architecture analysis
- 📘 **[README.md](README.md)** - Project overview

### Learning Resources

**HTML/CSS/JavaScript:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

**MCP:**
- [Model Context Protocol Docs](https://modelcontextprotocol.io)
- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers)

### Tools

**Development:**
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

**Testing:**
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org/)
- [JSONLint](https://jsonlint.com/) - Validate JSON configs

---

## 📝 License

By contributing to MCP Dashboard, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Thank you for contributing to the MCP Dashboard! Your efforts help make MCP integrations accessible to all Poke users.

**Questions?** Don't hesitate to ask! We're here to help.

**Happy Contributing! 🚀**

---

**Built with ❤️ for the Poke community by [@guirguispierre](https://github.com/guirguispierre) and contributors**

*Not affiliated with poke.com • Independent community project • MIT License*
