# Contributing to Poke MCP Dashboard

Thank you for your interest in contributing to the Poke MCP Dashboard! This document provides guidelines and instructions for contributing to this project.

## 🌟 How to Contribute

There are many ways to contribute to this project:

- **Add new MCP integrations**: Create documentation for new MCP servers
- **Improve existing documentation**: Fix typos, add examples, clarify instructions
- **Report bugs**: Help us identify issues in the documentation or website
- **Suggest features**: Propose new features or improvements
- **Design improvements**: Enhance the UI/UX of the dashboard

## 🚀 Adding a New Integration

### Prerequisites

1. The MCP server should be publicly available (GitHub repo, npm package, etc.)
2. You should have tested the integration with Poke
3. You have documentation or examples of how to use it

### Steps to Add an Integration

1. **Fork the repository**
   ```bash
   git clone https://github.com/guirguispierre/mcp-dashboard.git
   cd mcp-dashboard
   ```

2. **Create a new branch**
   ```bash
   git checkout -b add-integration-name
   ```

3. **Use the integration template**
   - Copy `integration-template.html` to `your-integration-name.html`
   - Follow the guidelines in `INTEGRATIONTEMPLATEGUIDE.md`
   - Link to `integration-styles.css` for consistent styling

4. **Update index.html**
   - Add a new card for your integration in the integrations grid
   - Include appropriate icon, description, and category
   - Add to the correct category filter

5. **Update statistics**
   - Update the total integration count in `index.html`
   - Add your category if it's new

6. **Test your changes**
   - Open `index.html` in a browser
   - Verify all links work
   - Test on mobile and desktop
   - Check dark/light mode compatibility
   - Validate HTML (https://validator.w3.org/)
   - Check accessibility (browser dev tools)

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add [Integration Name] MCP integration"
   ```

8. **Push and create Pull Request**
   ```bash
   git push origin add-integration-name
   ```
   Then create a PR on GitHub with:
   - Clear description of the integration
   - Link to the MCP server repository
   - Screenshots of your integration page
   - Any special setup requirements

## 📝 Code Style Guidelines

### HTML Guidelines

- Use semantic HTML5 elements (`<header>`, `<section>`, `<article>`, etc.)
- Include proper meta tags for SEO
- Use descriptive IDs and classes
- Maintain proper indentation (2 spaces)
- Add comments for complex sections
- Include alt text for all images
- Use ARIA labels where appropriate

**Example:**
```html
<section class="setup-section" aria-labelledby="setup-heading">
  <h2 id="setup-heading">Setup Instructions</h2>
  <!-- Content here -->
</section>
```

### CSS Guidelines

- Follow the minimal black/white design system
- Use CSS custom properties (variables) from `integration-styles.css`
- Mobile-first responsive design
- Use meaningful class names (BEM methodology preferred)
- Group related styles together
- Add comments for complex styles

**Color Palette:**
```css
/* Light Mode */
--bg-primary: #ffffff;
--bg-secondary: #fafafa;
--text-primary: #000000;
--text-secondary: #666666;
--border-color: #e0e0e0;
--accent-color: #000000;

/* Dark Mode */
--bg-primary: #000000;
--bg-secondary: #0a0a0a;
--text-primary: #ffffff;
--text-secondary: #999999;
--border-color: #333333;
--accent-color: #ffffff;
```

### JavaScript Guidelines

- Use modern ES6+ syntax
- Add comments for complex logic
- Use meaningful variable names
- Handle errors gracefully
- Test in multiple browsers
- Keep functions small and focused

**Example:**
```javascript
// Toggle theme between light and dark mode
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}
```

### Documentation Guidelines

- Use clear, concise language
- Include code examples for all steps
- Add screenshots where helpful
- Provide troubleshooting tips
- Link to official documentation
- Test all instructions yourself

## 🧪 Testing Requirements

Before submitting a PR, ensure:

### Functionality Testing
- [ ] All links work correctly
- [ ] Navigation functions properly
- [ ] Code examples are accurate
- [ ] Dark/light mode toggle works
- [ ] Search functionality includes your integration
- [ ] Filter buttons work with your category

### Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Alt text for images
- [ ] Proper heading hierarchy
- [ ] Focus indicators visible

### Performance Testing
- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Smooth animations (60fps)

## 📋 Submission Process

### Pull Request Checklist

- [ ] Branch is up to date with main
- [ ] All tests pass
- [ ] Documentation is complete
- [ ] Code follows style guidelines
- [ ] Commit messages are clear
- [ ] PR description is detailed
- [ ] Screenshots included
- [ ] Linked to relevant issues

### PR Title Format

```
[Type] Brief description

Examples:
[Feature] Add Slack MCP integration
[Fix] Correct GitHub setup instructions
[Docs] Update contributing guidelines
[Style] Improve mobile responsiveness
```

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] New integration
- [ ] Bug fix
- [ ] Documentation update
- [ ] Style improvement
- [ ] Other (please describe)

## Integration Details (if applicable)
- **MCP Server**: [Link to repo]
- **Category**: [Developer/Productivity/etc.]
- **Tested with Poke**: Yes/No

## Screenshots
[Add screenshots here]

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] Tested on multiple devices
- [ ] All tests pass

## Additional Notes
Any special considerations or notes
```

## 🐛 Issue Reporting Guidelines

### Bug Reports

When reporting bugs, include:

1. **Clear title**: Describe the issue concisely
2. **Description**: What happened vs. what you expected
3. **Steps to reproduce**: Detailed steps to trigger the bug
4. **Environment**: Browser, OS, device
5. **Screenshots**: If applicable
6. **Error messages**: Console logs or errors

**Template:**
```markdown
**Bug Description**
A clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- Browser: [e.g., Chrome 120]
- OS: [e.g., macOS 14]
- Device: [e.g., iPhone 13]

**Screenshots**
[If applicable]

**Additional Context**
Any other relevant information
```

### Feature Requests

When suggesting features, include:

1. **Problem statement**: What problem does this solve?
2. **Proposed solution**: How would it work?
3. **Alternatives**: Other approaches you considered
4. **Use cases**: Examples of how it would be used
5. **Impact**: Who benefits from this feature?

**Template:**
```markdown
**Feature Description**
A clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
Detailed explanation of how it would work

**Alternatives Considered**
Other approaches you've thought about

**Use Cases**
Examples of how this would be used

**Additional Context**
Mockups, examples, or references
```

## 📚 Integration Content Guidelines

### Required Sections

Every integration page must include:

1. **Overview**: Brief introduction to the MCP server
2. **Prerequisites**: What users need before starting
3. **Installation**: Step-by-step setup instructions
4. **Configuration**: How to configure the integration
5. **Usage Examples**: Practical examples with Poke
6. **Troubleshooting**: Common issues and solutions
7. **Resources**: Links to official docs, repos, etc.

### Writing Style

- **Be clear and concise**: Avoid jargon when possible
- **Use active voice**: "Configure the API key" not "The API key should be configured"
- **Be specific**: Provide exact commands, paths, and values
- **Include examples**: Show, don't just tell
- **Be encouraging**: Make users feel confident they can do it

### Code Example Format

```bash
# Always include comments
# Use realistic examples
npm install @modelcontextprotocol/server-github
```

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token_here"
      }
    }
  }
}
```

## 🎨 Design System

### Color Usage

- **Black (#000000)**: Primary text, headers, emphasis
- **White (#FFFFFF)**: Backgrounds (light mode), text (dark mode)
- **Gray (#666666)**: Secondary text, descriptions
- **Light Gray (#FAFAFA)**: Secondary backgrounds
- **Border (#E0E0E0)**: Dividers, borders (light mode)

### Typography

- **Font Family**: Inter, -apple-system, sans-serif
- **Headings**: 700-800 weight
- **Body**: 400-500 weight
- **Code**: Monospace font, slightly smaller

### Spacing

- Use consistent spacing scale: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem
- Maintain visual hierarchy with whitespace
- Group related content

### Components

- **Buttons**: Rounded corners (8px), clear hover states
- **Cards**: Subtle borders, appropriate padding
- **Code blocks**: Dark background, syntax highlighting
- **Links**: Underline on hover, clear focus states

## 🤝 Code Review Process

### What We Look For

1. **Functionality**: Does it work as intended?
2. **Code Quality**: Is it clean and maintainable?
3. **Documentation**: Is it clear and complete?
4. **Design**: Does it match the design system?
5. **Accessibility**: Is it accessible to all users?
6. **Performance**: Is it optimized?

### Review Timeline

- Initial review within 3-5 days
- Follow-up reviews within 1-2 days
- Merges typically within 1 week

### Addressing Feedback

- Respond to all comments
- Make requested changes or discuss alternatives
- Mark conversations as resolved when done
- Request re-review when ready

## 📜 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

## 💬 Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Create an Issue
- **Feature Ideas**: Open an Issue with [Feature Request] tag
- **General Chat**: Discussions tab

## 🙏 Thank You!

Thank you for contributing to the Poke MCP Dashboard! Your efforts help make MCP integrations more accessible to everyone.

---

**Maintainer**: [@guirguispierre](https://github.com/guirguispierre)
**Project**: [github.com/guirguispierre/mcp-dashboard](https://github.com/guirguispierre/mcp-dashboard)
**License**: MIT
