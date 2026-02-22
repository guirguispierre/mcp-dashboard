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
├── index.html              # Main dashboard page (modern theme with toggle)
├── style.css               # Shared CSS variables and components
├── script.js               # Interactive JavaScript functionality
│
├── Integration Pages (consistent dark theme):
│   ├── bart.html           # BART transit integration
│   ├── earnings-feed.html  # Financial data integration
│   ├── ffmpeg.html         # Media processing integration
│   ├── todoist.html        # Task management integration
│   ├── last-fm.html        # Music tracking integration
│   ├── netlify.html        # Netlify deployment integration
│   ├── vercel.html         # Vercel deployment integration
│   ├── deepwiki.html       # Documentation search integration
│   ├── supabase.html       # Database integration
│   └── github.html         # GitHub integration
│
├── Configuration Files:
│   ├── package.json        # Project metadata and scripts
│   ├── vercel.json         # Vercel deployment configuration
│   ├── netlify.toml        # Netlify deployment configuration
│   └── README.md           # Project documentation
```

### File Purposes

- **index.html**: Main landing page with all integration cards, search, and filtering
- **Integration pages**: Detailed setup guides with configuration examples and Poke conversation examples
- **style.css**: CSS variables, shared components, responsive design
- **script.js**: Modal functionality, filtering, animations, rate limiting

---

## 🎨 Code Style Guidelines

### HTML Guidelines

**Consistency**
- Use 4 spaces for indentation (not tabs)
- Use lowercase for element names and attributes
- Use double quotes for attribute values
- Close all tags properly (even self-closing tags)

**Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Clear, concise description">
    <title>Page Title - MCP Dashboard</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <!-- Content here -->
    </div>
</body>
</html>
```

**Semantic HTML**
- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use appropriate heading hierarchy (h1 → h2 → h3)
- Include proper ARIA labels for accessibility
- Use `<code>` for inline code and `<pre><code>` for code blocks

### CSS Guidelines

**CSS Variables**

Use CSS variables from `:root` for consistency:

```css
:root {
    --primary-color: #000000;
    --success-color: #00ff00;
    --warning-color: #ffcc00;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --background: #000000;
    --surface: #0a0a0a;
    --border-color: #333333;
}
```

**Naming Conventions**
- Use kebab-case for class names: `.integration-card`, `.hero-section`
- Use descriptive names: `.section-title` not `.st`
- Use BEM naming for complex components when appropriate

**Organization**
1. Layout properties (display, position, float)
2. Box model (width, height, padding, margin, border)
3. Typography (font, line-height, color)
4. Visual (background, box-shadow, transform)
5. Misc (cursor, overflow, z-index)

**Example**
```css
.integration-card {
    /* Layout */
    display: flex;
    flex-direction: column;
    
    /* Box Model */
    padding: 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    
    /* Visual */
    background: var(--surface);
    transition: all 0.3s ease;
}

.integration-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 0, 0.2);
}
```

**Responsive Design**
```css
/* Mobile-first approach */
.container {
    padding: 1rem;
}

@media (min-width: 768px) {
    .container {
        padding: 2rem;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 1400px;
    }
}
```

### JavaScript Guidelines

**Style**
- Use 4 spaces for indentation
- Use single quotes for strings
- Use semicolons at the end of statements
- Use camelCase for variable and function names
- Use UPPERCASE for constants

**Functions**
```javascript
// Good: Clear, descriptive function name
function showIntegrationModal(integrationName) {
    const modal = document.getElementById('helpModal');
    const content = getIntegrationContent(integrationName);
    
    if (!content) {
        console.error(`Integration not found: ${integrationName}`);
        return;
    }
    
    modal.style.display = 'block';
    renderModalContent(content);
}

// Good: Use const/let, not var
const API_RATE_LIMIT = 10;
let requestCount = 0;

// Good: Add comments for complex logic
// Rate limiter prevents API abuse by tracking requests
class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }
}
```

**DOM Manipulation**
```javascript
// Good: Cache DOM queries
const cards = document.querySelectorAll('.integration-card');
cards.forEach(card => {
    card.addEventListener('click', handleCardClick);
});

// Bad: Repeated DOM queries in loop
document.querySelectorAll('.integration-card').forEach(card => {
    document.getElementById('container').appendChild(card); // Don't do this
});
```

**Event Handling**
```javascript
// Good: Use event delegation
document.addEventListener('DOMContentLoaded', () => {
    initializeInteractions();
    animateOnScroll();
    updateStats();
});

// Good: Clean event listeners
function closeModal() {
    modal.style.display = 'none';
    // Clean up event listeners if needed
}
```

---

## ➕ Adding New Integrations

### Step-by-Step Process

#### 1. **Create the Integration Page**

Copy an existing integration page as a template:

```bash
cp bart.html new-integration.html
```

#### 2. **Update Page Content**

Modify the following sections in your new integration page:

**Meta Tags and Title**
```html
<meta name="description" content="Your Integration MCP for Poke - Brief description">
<title>Your Integration MCP for Poke - MCP Dashboard</title>
```

**Hero Section**
```html
<div class="hero-section">
    <div class="hero-icon">🔧</div> <!-- Choose appropriate emoji -->
    <h1 class="hero-title">Your Integration MCP for Poke</h1>
    <p class="hero-subtitle">Brief one-line description</p>
    <p style="color: var(--text-secondary); margin-top: 1rem;">
        Extended description of what users can do
    </p>
</div>
```

**Setup Instructions**
```html
<ol class="step-list">
    <li>
        <strong style="color: var(--text-primary);">Step Title</strong>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">
            Detailed instructions with code examples
        </p>
        <code style="background: var(--background); ...">
            command or code here
        </code>
    </li>
    <!-- Add 4-6 setup steps -->
</ol>
```

**MCP Configuration**
```html
<pre style="background: var(--background); padding: 1rem; border-radius: 8px; overflow-x: auto; margin-top: 0.5rem;"><code>{
  "mcpServers": {
    "your-integration": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-your-integration"],
      "env": {
        "API_KEY": "your_api_key_here"
      }
    }
  }
}</code></pre>
```

**Poke Conversation Examples** (minimum 3-5 examples)
```html
<div class="conversation-example">
    <div class="user-message">👤 You: "Example question to Poke"</div>
    <div class="poke-response">
        🤖 Poke: "Realistic response from Poke...<br><br>
        With specific details and formatting"
    </div>
</div>
```

**Capabilities Grid**
```html
<div class="guide-grid">
    <div class="guide-card">
        <h3 style="color: var(--success-color);">Feature Name</h3>
        <p>What users can do with this feature</p>
    </div>
    <!-- Add 4-6 capability cards -->
</div>
```

#### 3. **Add to Main Dashboard (index.html)**

Add your integration card to the integrations grid:

```html
<div class="integration-card fade-in" data-category="your-category" data-name="Your Integration">
    <div class="card-icon">🔧</div>
    <div class="card-header">
        <div>
            <h3 class="card-title">Your Integration</h3>
            <div class="status-indicator"></div>
        </div>
    </div>
    <p class="card-description">Brief description for the main page</p>
    <div class="card-tags">
        <span class="tag tag-category">Category</span>
        <span class="tag tag-status">Active</span>
    </div>
    <div class="card-actions">
        <button class="btn btn-primary" onclick="window.location.href='new-integration.html'">
            <span>📚</span>
            <span>View Guide</span>
        </button>
        <button class="btn btn-secondary" onclick="showDemo('new-integration')">
            <span>▶️</span>
        </button>
    </div>
</div>
```

#### 4. **Update script.js**

Add help modal data and demo function:

```javascript
// In the helpData object
'new-integration': {
    title: '🔧 Your Integration for Poke',
    description: 'Brief description',
    setup: [
        'Step 1 instructions',
        'Step 2 instructions',
        // ...
    ],
    pokeConfig: `{
  "mcpServers": {
    "your-integration": { ... }
  }
}`,
    examples: [
        '"Example Poke prompt 1"',
        '"Example Poke prompt 2"',
    ],
    links: [
        { text: 'Official Docs', url: 'https://...' }
    ]
}

// In the demoData object
'new-integration': 'Try asking Poke:\n\n"Example prompt"\n\nPoke will...'
```

#### 5. **Update Documentation**

Add your integration to README.md:

```markdown
### 🆕 Your Category
- **[Your Integration](new-integration.html)** - Brief description
  - Feature 1
  - Feature 2
  - Feature 3
```

#### 6. **Integration Checklist**

Before submitting, verify:

- [ ] Page follows the consistent dark theme styling
- [ ] All inline styles use CSS variables from style.css
- [ ] Meta tags are complete and accurate
- [ ] Setup instructions are clear and tested
- [ ] MCP configuration is valid JSON
- [ ] 3-5 realistic Poke conversation examples included
- [ ] 4-6 capability cards describing features
- [ ] Resources section with relevant links
- [ ] Pro Tips section with helpful advice
- [ ] Disclaimer banner present
- [ ] Back navigation works correctly
- [ ] Footer disclaimer updated
- [ ] Card added to main index.html
- [ ] Modal data added to script.js
- [ ] README.md updated
- [ ] Mobile responsive on all screen sizes
- [ ] All links tested and working
- [ ] No API keys or secrets in code
- [ ] Tested locally with `npm run dev`

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
   git commit -m "Add Slack MCP integration page with setup guide"
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

   - Create slack.html with setup instructions
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

## Testing Checklist
- [ ] Tested locally
- [ ] Tested on multiple browsers
- [ ] Tested mobile responsiveness
- [ ] All links work correctly
- [ ] No console errors
- [ ] Integration checklist completed (if applicable)

## Screenshots (if applicable)
Add screenshots of visual changes

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
// Or use a sanitization library
```

### External Links

Always use `rel="noopener noreferrer"` for external links:

```html
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">
    External Link
</a>
```

### Security Headers

Maintain security headers in `vercel.json` and `netlify.toml`:

- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

---

## ♿ Accessibility Guidelines

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```html
<!-- Good: Proper button -->
<button onclick="handleClick()">Click Me</button>

<!-- Bad: Div as button -->
<div onclick="handleClick()">Click Me</div>

<!-- If you must use div, add proper ARIA -->
<div role="button" tabindex="0" onclick="handleClick()" onkeypress="handleKeyPress(event)">
    Click Me
</div>
```

### ARIA Labels

```html
<!-- Navigation -->
<nav aria-label="Main navigation">
    <a href="#integrations" aria-label="Jump to integrations section">Integrations</a>
</nav>

<!-- Buttons with icons only -->
<button aria-label="Close modal" onclick="closeModal()">
    ✕
</button>

<!-- Status indicators -->
<div class="status-indicator" role="status" aria-label="Integration active"></div>
```

### Color Contrast

Maintain WCAG AA compliance:

- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio
- Test with tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Alt Text

```html
<!-- Decorative images -->
<img src="icon.png" alt="" role="presentation">

<!-- Informative images -->
<img src="diagram.png" alt="MCP architecture showing client-server connection">
```

### Focus Indicators

```css
/* Always maintain visible focus indicators */
button:focus,
a:focus {
    outline: 2px solid var(--success-color);
    outline-offset: 2px;
}

/* Don't remove focus outlines without providing alternative */
:focus-visible {
    outline: 2px solid var(--success-color);
}
```

### Screen Reader Testing

Test with:
- **macOS**: VoiceOver (Cmd + F5)
- **Windows**: NVDA (free) or JAWS
- **Chrome**: ChromeVox extension

---

## ✅ Testing Checklist

Since this is a static site without automated tests, use this manual testing checklist:

### Browser Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Functionality Testing

- [ ] All links work correctly
- [ ] Navigation between pages works
- [ ] Back buttons return to correct pages
- [ ] Search functionality works
- [ ] Filter buttons work correctly
- [ ] Modals open and close properly
- [ ] Code snippets copy correctly
- [ ] External links open in new tabs

### Responsive Design

Test at breakpoints:
- [ ] Mobile (320px - 480px)
- [ ] Tablet (481px - 768px)
- [ ] Desktop (769px - 1024px)
- [ ] Large desktop (1025px+)

Check:
- [ ] Text is readable at all sizes
- [ ] Images scale appropriately
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44x44px
- [ ] Cards reflow correctly

### Performance

- [ ] Page load time < 3 seconds
- [ ] No console errors
- [ ] No console warnings
- [ ] Images optimized
- [ ] CSS/JS not blocking render

### Accessibility

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] ARIA labels present
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader compatible
- [ ] No flashing content

### Content

- [ ] No typos or grammatical errors
- [ ] Code examples are valid
- [ ] Links go to correct destinations
- [ ] Poke examples are realistic
- [ ] Instructions are clear and complete

### Security

- [ ] No API keys in code
- [ ] External links use rel="noopener"
- [ ] No inline JavaScript in HTML
- [ ] Input is validated
- [ ] No XSS vulnerabilities

---

## 🌿 Git Workflow

### Branch Naming Conventions

Use descriptive branch names:

```
feature/integration-name    # New integration
fix/bug-description         # Bug fix
docs/what-changed          # Documentation
refactor/component-name    # Code refactoring
style/design-update        # Visual changes
chore/maintenance-task     # Maintenance
```

**Examples:**
```bash
git checkout -b feature/add-notion-integration
git checkout -b fix/mobile-menu-overflow
git checkout -b docs/improve-contributing-guide
git checkout -b style/update-color-scheme
```

### Commit Guidelines

**Atomic Commits**

Make small, focused commits:

```bash
# Good: Separate commits for different changes
git add bart.html
git commit -m "feat: add BART integration page"

git add index.html
git commit -m "feat: add BART card to main dashboard"

git add script.js
git commit -m "feat: add BART modal data"

# Bad: One large commit
git add .
git commit -m "Added BART integration"
```

**Commit Message Best Practices**

- Use present tense: "Add feature" not "Added feature"
- Be specific: "Fix mobile menu overflow on iOS" not "Fix bug"
- Reference issues: "Closes #42" or "Fixes #15"
- Keep first line under 50 characters
- Add detailed body if needed (wrap at 72 characters)

### Syncing with Upstream

Keep your fork updated:

```bash
# Fetch upstream changes
git fetch upstream

# Merge into your local main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main

# Rebase your feature branch
git checkout feature/your-branch
git rebase main
```

### Handling Merge Conflicts

```bash
# Start rebase
git rebase main

# If conflicts occur:
# 1. Open conflicted files
# 2. Resolve conflicts
# 3. Stage resolved files
git add resolved-file.html

# Continue rebase
git rebase --continue

# Or abort if needed
git rebase --abort
```

---

## 👥 Review Process

### For Contributors

**After submitting a PR:**

1. **Wait for initial review** (3-5 days)
2. **Respond to feedback** promptly
3. **Make requested changes** in new commits
4. **Request re-review** after changes
5. **Be patient and respectful**

**Responding to feedback:**

```markdown
> Can you add more examples?

Good point! I've added 3 more Poke conversation examples. 
See commits abc123 and def456.

> The mobile layout breaks at 480px

Fixed in commit ghi789. Tested on iPhone SE, iPhone 14, and Android devices.
```

### For Reviewers

**Review Criteria:**

1. **Functionality**
   - Does it work as intended?
   - Are there any bugs?
   - Does it follow the existing patterns?

2. **Code Quality**
   - Follows style guidelines?
   - Clean and readable?
   - Properly commented?
   - No security issues?

3. **Documentation**
   - Clear setup instructions?
   - Good Poke examples?
   - Links work correctly?
   - README updated?

4. **Design**
   - Consistent with existing pages?
   - Responsive on all devices?
   - Accessible?

5. **Testing**
   - Testing checklist completed?
   - Works on multiple browsers?
   - No console errors?

**Providing Feedback:**

Be constructive and specific:

❌ **Bad:**
```
This doesn't work. Fix it.
```

✅ **Good:**
```
The mobile layout breaks at 480px width. The cards overflow the container.
Can you add a media query to stack them vertically?

Something like:
@media (max-width: 480px) {
    .integrations-grid {
        grid-template-columns: 1fr;
    }
}
```

**Approval Process:**

1. Review code and test locally
2. Leave inline comments on specific lines
3. Approve or request changes
4. Follow up on changes
5. Merge when approved

---

## 🎉 Community

### Getting Help

- **GitHub Issues**: Ask questions via issues
- **Discussions**: Use GitHub Discussions for general topics
- **Email**: Contact [@guirguispierre](https://github.com/guirguispierre)

### Recognition

Contributors will be:
- Listed in README.md
- Thanked in release notes
- Credited in commit messages
- Invited to join the contributor team

### Code of Conduct

**Our Pledge:**

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity, experience level, nationality, personal appearance, race, religion, or sexual identity and orientation.

**Our Standards:**

**Positive behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community
- Showing empathy towards others

**Unacceptable behavior:**
- Harassment or discriminatory language
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information
- Other unprofessional conduct

**Enforcement:**

Violations can be reported to [@guirguispierre](https://github.com/guirguispierre). All complaints will be reviewed and investigated promptly and fairly.

---

## 📚 Additional Resources

### Learning Resources

**HTML/CSS:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)

**JavaScript:**
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

**Git:**
- [Pro Git Book](https://git-scm.com/book/en/v2)
- [GitHub Guides](https://guides.github.com/)

**MCP:**
- [Model Context Protocol Docs](https://modelcontextprotocol.io)
- [MCP Servers Repository](https://github.com/modelcontextprotocol/servers)

### Tools

**Development:**
- [VS Code](https://code.visualstudio.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/)

**Testing:**
- [BrowserStack](https://www.browserstack.com/) (cross-browser testing)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (performance)
- [WAVE](https://wave.webaim.org/) (accessibility)

**Design:**
- [Figma](https://www.figma.com/)
- [ColorZilla](https://www.colorzilla.com/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## 📝 License

By contributing to MCP Dashboard, you agree that your contributions will be licensed under the MIT License.

---

## 🙏 Thank You!

Thank you for contributing to the MCP Dashboard! Your efforts help make it easier for Poke users to discover and integrate powerful MCP servers. Every contribution, no matter how small, makes a difference.

**Questions?** Don't hesitate to ask! We're here to help.

**Happy Contributing! 🚀**

---

**Built with ❤️ for the Poke community by [@guirguispierre](https://github.com/guirguispierre) and contributors**

*Not affiliated with poke.com • Independent community project • MIT License*
