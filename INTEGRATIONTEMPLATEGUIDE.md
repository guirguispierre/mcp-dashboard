# Integration Template Guide

This guide explains how to use the `integration-template.html` file to create consistent, high-quality integration pages for the Poke MCP Dashboard.

## 🎯 Purpose

The integration template ensures:
- **Consistency**: All integration pages have the same structure and style
- **Quality**: All necessary information is included
- **Accessibility**: Pages are accessible to all users
- **Maintainability**: Easy to update and maintain

## 🛠️ How to Use the Template

### Step 1: Copy the Template

```bash
cp integration-template.html your-integration-name.html
```

### Step 2: Replace Placeholders

The template contains placeholders in `[BRACKETS]`. Replace each placeholder with your integration-specific content:

#### Required Placeholders

| Placeholder | Description | Example |
|-------------|-------------|----------|
| `[INTEGRATION_NAME]` | Name of the integration | `GitHub` |
| `[ICON_EMOJI]` | Emoji representing the service | `🐙` |
| `[BRIEF_DESCRIPTION_OF_INTEGRATION]` | One-line description | `Manage repositories and issues through Poke` |
| `[CATEGORY]` | Category tag | `Developer` |
| `[DETAILED_DESCRIPTION_OF_WHAT_THIS_INTEGRATION_DOES]` | Full description | `The GitHub MCP integration allows you to...` |
| `[SERVICE_NAME]` | Name of the service | `GitHub` |
| `[SIGNUP_URL]` | URL to sign up | `https://github.com/signup` |
| `[PACKAGE_NAME]` | npm package name | `@modelcontextprotocol/server-github` |
| `[API_KEY_NAME]` | Environment variable name | `GITHUB_PERSONAL_ACCESS_TOKEN` |
| `[MCP_SERVER_REPO]` | GitHub repo URL | `https://github.com/org/repo` |
| `[OFFICIAL_DOCS_URL]` | Official documentation | `https://docs.github.com` |
| `[API_REFERENCE_URL]` | API documentation | `https://docs.github.com/rest` |

### Step 3: Customize Sections

#### Overview Section
Provide a comprehensive description of what the integration does and why users would want it.

```html
<section class="section">
    <h2 class="section-title">Overview</h2>
    <div class="content-card">
        <p>The GitHub MCP integration connects your GitHub account to Poke, enabling you to manage repositories, issues, pull requests, and more directly through natural conversation.</p>
        <p>With this integration, you can quickly check repository status, create issues, review PRs, and manage your GitHub workflow without leaving Poke.</p>
    </div>
</section>
```

#### Prerequisites Section
List everything users need before starting.

```html
<ul class="checklist">
    <li>Poke installed with MCP support enabled</li>
    <li>GitHub account (<a href="https://github.com/signup">Sign up here</a>)</li>
    <li>Node.js 18+ installed</li>
    <li>Git configured on your system</li>
</ul>
```

#### Installation Section
Provide clear, step-by-step installation instructions.

**Best practices:**
- Number all steps clearly
- Include exact commands to copy/paste
- Show expected output where relevant
- Highlight security considerations
- Provide troubleshooting tips inline

#### Usage Examples Section
Provide 3-5 realistic examples showing how to use the integration.

```html
<h3>Example 1: List Repositories</h3>
<p>Ask Poke to show your GitHub repositories.</p>
<div class="example-box">
    <div class="example-label">You:</div>
    <div class="example-text">Show me my GitHub repositories</div>
</div>
<div class="example-box response">
    <div class="example-label">Poke:</div>
    <div class="example-text">Here are your repositories:\n1. mcp-dashboard (Public)\n2. personal-site (Private)\n3. awesome-project (Public)</div>
</div>
```

#### Available Commands Section
Document all available commands users can use.

```html
<div class="command-grid">
    <div class="command-card">
        <h4>list_repositories</h4>
        <p>List all repositories for the authenticated user</p>
        <code>"Show my repositories"</code>
    </div>
    <div class="command-card">
        <h4>create_issue</h4>
        <p>Create a new issue in a repository</p>
        <code>"Create an issue in my-repo about bug"</code>
    </div>
</div>
```

#### Troubleshooting Section
Document common issues and their solutions.

```html
<div class="troubleshooting-item">
    <h4>❌ Problem: Authentication failed</h4>
    <p><strong>Solution:</strong> Verify your personal access token is valid and has the correct permissions. Generate a new token at GitHub Settings > Developer Settings > Personal Access Tokens.</p>
</div>
```

#### Resources Section
Link to all relevant documentation and resources.

```html
<ul class="resource-list">
    <li><a href="https://docs.github.com">📚 Official GitHub Documentation</a></li>
    <li><a href="https://github.com/org/repo">🐙 MCP Server Repository</a></li>
    <li><a href="https://docs.github.com/rest">📑 GitHub API Reference</a></li>
</ul>
```

### Step 4: Add to Main Dashboard

Add your integration card to `index.html`:

```html
<div class="integration-card fade-in" data-category="developer" data-name="GitHub">
    <div class="card-icon">🐙</div>
    <div class="card-header">
        <div>
            <h3 class="card-title">GitHub</h3>
            <div class="status-indicator"></div>
        </div>
    </div>
    <p class="card-description">Manage repositories, issues, and pull requests through Poke</p>
    <div class="card-tags">
        <span class="tag tag-category">Developer</span>
        <span class="tag tag-status">Active</span>
    </div>
    <div class="card-actions">
        <button class="btn btn-primary" onclick="window.location.href='github.html'">
            <span>📚</span>
            <span>View Guide</span>
        </button>
        <button class="btn btn-secondary" onclick="showDemo('github')">
            <span>▶️</span>
        </button>
    </div>
</div>
```

## 🎨 Styling Guidelines

### Use Shared Styles

The template links to `integration-styles.css` which provides all necessary styling. Don't add custom styles unless absolutely necessary.

### Follow the Color Scheme

- **Light mode**: White background, black text
- **Dark mode**: Black background, white text
- **Accents**: Use sparingly for emphasis

### Maintain Consistency

- Use standard components from the CSS file
- Follow the existing layout structure
- Keep section spacing consistent
- Use the same heading hierarchy

## ♿ Accessibility Checklist

Ensure your integration page meets accessibility standards:

- [ ] All images have alt text
- [ ] Headings follow proper hierarchy (h1 > h2 > h3)
- [ ] Links have descriptive text (not "click here")
- [ ] Color contrast meets WCAG AA standards
- [ ] Keyboard navigation works throughout
- [ ] ARIA labels used where appropriate
- [ ] Focus indicators are visible
- [ ] Forms have proper labels

## 📝 Content Best Practices

### Writing Style

1. **Be Clear**: Use simple, direct language
2. **Be Concise**: Get to the point quickly
3. **Be Specific**: Provide exact commands and values
4. **Be Helpful**: Anticipate questions and problems
5. **Be Encouraging**: Make users feel they can succeed

### Code Examples

- Always include syntax highlighting hints (```bash, ```json, etc.)
- Use realistic, working examples
- Include comments where helpful
- Show expected output when relevant
- Test all examples yourself

### Screenshots

If adding screenshots:
- Use high-resolution images
- Optimize file size (WebP format preferred)
- Add descriptive alt text
- Show the complete context
- Update when UI changes

## 🧪 Testing Your Integration Page

### Pre-Publishing Checklist

- [ ] All placeholders replaced
- [ ] All links work correctly
- [ ] Code examples are accurate
- [ ] Installation steps tested
- [ ] Examples work with Poke
- [ ] Responsive on mobile
- [ ] Dark mode works correctly
- [ ] No console errors
- [ ] HTML validates
- [ ] Accessible with keyboard
- [ ] Readable by screen reader

### Test Commands

```bash
# Validate HTML
npx html-validate your-integration-name.html

# Check accessibility
npx pa11y your-integration-name.html

# Test responsive design
# Open in browser DevTools and test different viewport sizes
```

## 📊 Quality Standards

### Must Have

1. Complete overview and description
2. Clear prerequisites list
3. Step-by-step installation instructions
4. At least 3 usage examples
5. Troubleshooting section with common issues
6. Links to official documentation
7. Working code examples
8. Responsive design
9. Dark mode support
10. Accessibility compliance

### Should Have

1. Configuration options table
2. Available commands reference
3. Best practices section
4. FAQ section
5. Tips and tricks
6. Performance considerations
7. Security notes
8. Version compatibility info

### Nice to Have

1. Video walkthrough
2. Advanced use cases
3. Integration with other MCP servers
4. Community examples
5. Changelog
6. Known limitations
7. Roadmap

## 🔄 Maintenance

### When to Update

- MCP server version changes
- API changes from the service
- New features added
- User feedback indicates confusion
- Broken links discovered
- Security advisories

### Update Process

1. Test current instructions still work
2. Update affected sections
3. Bump any version numbers
4. Test again on fresh setup
5. Commit with clear message
6. Note changes in PR description

## 🔗 Template Versions

### Current Version: 1.0

**Includes:**
- Minimal black/white theme
- Dark mode support
- Responsive design
- Accessibility features
- Standard sections
- Shared styling

**Future Versions:**
- Interactive demos
- Video embedding
- Search within page
- Print-friendly version

## ❓ Common Questions

### Q: Can I modify the template structure?

**A:** Only if absolutely necessary. The standardized structure helps users know what to expect. If you need additional sections, add them after the standard sections.

### Q: What if my integration doesn't need all sections?

**A:** Keep all sections but note "Not applicable" if a section truly doesn't apply. Most integrations will use all sections.

### Q: Can I use custom CSS?

**A:** Avoid custom CSS. Use the shared `integration-styles.css` file. If you need additional styles, consider proposing them for the shared stylesheet.

### Q: How detailed should my examples be?

**A:** Very detailed! Users should be able to copy your examples and have them work immediately. Include all context and show expected results.

### Q: Should I include API credentials in examples?

**A:** Never include real credentials. Use placeholder values like `your_api_key_here` or `YOUR_TOKEN`. Always include security warnings.

## 📚 Additional Resources

- [CONTRIBUTING.md](CONTRIBUTING.md) - General contribution guidelines
- [CSS_ANALYSIS.md](CSS_ANALYSIS.md) - Design system documentation
- [integration-styles.css](integration-styles.css) - Shared stylesheet
- [Model Context Protocol Docs](https://modelcontextprotocol.io) - MCP documentation

## 🙏 Questions?

If you have questions about using the template:

1. Check this guide thoroughly
2. Look at existing integration pages for examples
3. Review the CSS documentation
4. Open a GitHub Discussion
5. Contact [@guirguispierre](https://github.com/guirguispierre)

---

**Happy integrating!** 🚀
