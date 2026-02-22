# 📝 Integration Template Guide

This guide explains how to use the `integration-template.html` file to create new MCP integration pages for the Poke MCP Dashboard.

---

## 🎯 Overview

The integration template provides a complete, ready-to-use structure for creating new integration pages. It includes:

- ✅ All required sections with proper styling
- ✅ Consistent dark theme matching existing pages
- ✅ TODO comments marking what needs customization
- ✅ Example structure for all components
- ✅ Responsive design built-in
- ✅ Accessibility features included

---

## 🚀 Quick Start

### Step 1: Copy the Template

```bash
cp integration-template.html your-integration-name.html
```

**Naming Convention:**
- Use lowercase
- Use hyphens for spaces
- Match the integration name
- Examples: `slack.html`, `notion.html`, `linear.html`, `google-calendar.html`

### Step 2: Search and Replace

Open your new file and replace these placeholders:

| Placeholder | Replace With | Example |
|-------------|--------------|---------|
| `[Integration Name]` | Full integration name | Slack, Notion, Linear |
| `[integration-name]` | Lowercase with hyphens | slack, notion, linear |
| `[integration-key]` | Configuration key | slack, notion, linear |
| `[Brief description]` | Short description | Team communication platform |
| `[One-line description]` | Concise feature summary | Real-time team messaging and collaboration |
| `[Extended description]` | Detailed benefits | Send messages, manage channels, and collaborate with your team directly through Poke |
| `[SERVICE_URL]` | Official website URL | https://slack.com |
| `[Service Name]` | Service/company name | Slack |

**Quick Find & Replace (VS Code):**
1. Press `Cmd/Ctrl + H`
2. Find: `[Integration Name]`
3. Replace: `Your Integration Name`
4. Click "Replace All"

### Step 3: Customize Each Section

Follow the TODO comments in the template:

---

## 📋 Section-by-Section Guide

### 1. **Meta Tags** (Lines 5-8)

```html
<!-- BEFORE -->
<meta name="description" content="[Integration Name] MCP Integration for Poke - [Brief description]">
<title>[Integration Name] MCP for Poke - MCP Dashboard</title>

<!-- AFTER -->
<meta name="description" content="Slack MCP Integration for Poke - Team communication and collaboration">
<title>Slack MCP for Poke - MCP Dashboard</title>
```

**Guidelines:**
- Keep description under 160 characters
- Include keywords: "MCP", "Poke", integration name
- Make title descriptive and consistent

---

### 2. **Hero Section** (Lines 132-141)

```html
<!-- Choose an appropriate emoji icon -->
<div class="hero-icon">💬</div>

<!-- Update the title -->
<h1 class="hero-title">Slack MCP for Poke</h1>

<!-- One-line description -->
<p class="hero-subtitle">Team communication and collaboration platform</p>

<!-- Extended description -->
<p style="color: var(--text-secondary); margin-top: 1rem;">
    Send messages, manage channels, and collaborate with your team directly through Poke
</p>
```

**Emoji Selection Guide:**
- 💬 - Chat/Messaging (Slack, Discord)
- 📝 - Note-taking (Notion, Evernote)
- 📅 - Calendar (Google Calendar, Outlook)
- 📊 - Analytics/Data
- 🎨 - Design tools
- 🔧 - Developer tools
- 🌐 - Web services
- 📦 - Package managers
- 🎵 - Music/Media
- ✅ - Productivity

---

### 3. **Setup Instructions** (Lines 158-247)

This is the most important section. Follow this structure:

#### **Step 1: Account Creation (if needed)**

```html
<li>
    <strong style="color: var(--text-primary);">Create [Service] Account</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        Sign up at <a href="https://service.com" target="_blank" rel="noopener noreferrer" class="external-link">service.com</a><br>
        Free tier includes [features available in free tier]
    </p>
</li>
```

**Tips:**
- Mention if free tier exists
- Note any limitations
- Include direct signup link

#### **Step 2: API Credentials**

```html
<li>
    <strong style="color: var(--text-primary);">Get Your API Key</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        1. Log into [Service]<br>
        2. Navigate to Settings → [Section] → API<br>
        3. Click "Create New Token" or "Generate API Key"<br>
        4. Copy the token and save it securely<br>
        5. (Optional) Set appropriate scopes: [required scopes]
    </p>
</li>
```

**Tips:**
- Provide exact navigation path
- List required scopes/permissions
- Mention security best practices

#### **Step 3: Install MCP Server**

```html
<li>
    <strong style="color: var(--text-primary);">Install [Integration] MCP Server</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        Open your terminal and run:<br>
        <code style="background: var(--background); padding: 0.5rem; display: inline-block; margin-top: 0.5rem; border-radius: 4px;">
            npm install -g @modelcontextprotocol/server-[integration]
        </code>
    </p>
</li>
```

**Tips:**
- Use actual npm package name
- Mention if package is unofficial/community
- Note any system requirements

#### **Step 4: Poke Configuration**

```html
<li>
    <strong style="color: var(--text-primary);">Add to Poke MCP Configuration</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        Add this to your MCP configuration file:
    </p>
    <pre style="background: var(--background); padding: 1rem; border-radius: 8px; overflow-x: auto; margin-top: 0.5rem;"><code>{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_TOKEN": "your_slack_token_here",
        "SLACK_WORKSPACE": "your_workspace_id"
      }
    }
  }
}</code></pre>
    <p style="color: var(--warning-color); margin-top: 0.5rem; font-size: 0.9rem;">
        ⚠️ Replace placeholder values with your actual credentials
    </p>
</li>
```

**Configuration Guidelines:**
- Use valid JSON syntax
- Include all required environment variables
- Use clear placeholder names
- Add warning about replacing placeholders
- Test the configuration yourself before submitting

#### **Step 5 & 6: Restart and Test**

```html
<li>
    <strong style="color: var(--text-primary);">Restart Poke</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        Close and restart your Poke application to load the new MCP server.
    </p>
</li>

<li>
    <strong style="color: var(--text-primary);">Test the Connection</strong>
    <p style="color: var(--text-secondary); margin-top: 0.5rem;">
        Try asking Poke: <em>"[Simple test command]"</em>
    </p>
</li>
```

---

### 4. **Conversation Examples** (Lines 251-284)

Create 3-5 realistic examples showing different capabilities:

#### **Example Structure:**

```html
<div class="conversation-example">
    <div class="user-message">👤 You: "[Natural language request to Poke]"</div>
    <div class="poke-response">
        🤖 Poke: "[Detailed response with formatting]<br><br>
        [Data or information]<br>
        [Status or follow-up]"
    </div>
</div>
```

#### **Best Practices:**

**1. Make it realistic**
```html
<!-- Good: Specific and realistic -->
<div class="user-message">👤 You: "Send a message to the #engineering channel saying 'Deploy complete!'"</div>
<div class="poke-response">
    🤖 Poke: "Message sent to #engineering channel!<br><br>
    ✅ Sent at 2:45 PM<br>
    👥 Channel has 24 members<br>
    📱 Mobile notifications enabled"
</div>

<!-- Bad: Too vague -->
<div class="user-message">👤 You: "Send message"</div>
<div class="poke-response">
    🤖 Poke: "Message sent"
</div>
```

**2. Show variety**

Include examples for:
- Basic operations (create, read)
- Advanced features (search, filter, analyze)
- Different data types
- Error handling (optional)
- Integration with other features

**3. Use proper formatting**

```html
<!-- Use <br> for line breaks -->
🤖 Poke: "Here are your results:<br><br>
• Item 1<br>
• Item 2<br>
• Item 3<br><br>
Would you like more details?"
```

**4. Add context and personality**

Make responses feel natural and helpful, like a real AI assistant would respond.

---

### 5. **Capabilities Grid** (Lines 288-314)

Showcase 4-6 key features:

```html
<div class="guide-grid">
    <div class="guide-card">
        <h3 style="color: var(--success-color);">Feature Name</h3>
        <p>Clear description of what users can accomplish with this feature.</p>
    </div>
    
    <!-- Add 3-5 more cards -->
</div>
```

**Feature Categories:**
- Core functionality
- Data access
- Automation capabilities
- Analytics/insights
- Integration features
- Advanced features

**Example (Slack):**
```html
<div class="guide-card">
    <h3 style="color: var(--success-color);">Send Messages</h3>
    <p>Post messages to channels, direct messages, or threads with mentions and formatting.</p>
</div>

<div class="guide-card">
    <h3 style="color: var(--success-color);">Manage Channels</h3>
    <p>Create, archive, and configure channels. Invite members and set channel topics.</p>
</div>
```

---

### 6. **Resources Section** (Lines 318-337)

Add 3-6 relevant links:

```html
<li style="margin-bottom: 1rem;">
    <a href="https://service.com" target="_blank" rel="noopener noreferrer" class="external-link">
        🌐 Official [Service] Website
    </a>
</li>
```

**Required Links:**
1. Official service website
2. API documentation
3. MCP server repository (if available)
4. Model Context Protocol docs (already included)

**Optional Links:**
- Help/support pages
- Getting started guides
- Community forums
- Video tutorials

**Link Guidelines:**
- Always use `target="_blank"`
- Always include `rel="noopener noreferrer"`
- Use descriptive text (not "click here")
- Add emoji icons for visual interest

---

### 7. **Pro Tips Section** (Lines 341-354)

Add 5-8 helpful tips:

```html
<ul style="color: var(--text-secondary); line-height: 1.8;">
    <li>✨ [Tip about getting started]</li>
    <li>⚡ [Tip about efficiency]</li>
    <li>🎯 [Tip about best practices]</li>
    <li>🔒 [Security tip]</li>
    <li>💰 [Cost optimization tip]</li>
    <li>🔄 [Integration tip]</li>
</ul>
```

**Tip Categories:**
- Getting started quickly
- Performance optimization
- Best practices
- Security considerations
- Cost/rate limit management
- Combining with other MCPs
- Advanced features
- Common pitfalls to avoid

**Example Tips:**
```html
<li>✨ No API key required - [Service] provides open data!</li>
<li>⚡ Use specific identifiers for faster responses</li>
<li>🎯 Combine with calendar MCP for automated scheduling</li>
<li>🔒 Use environment variables, never hardcode API keys</li>
<li>💰 Free tier includes 10,000 requests/month</li>
```

---

### 8. **Footer** (Lines 363-375)

Update the disclaimer with specific service name:

```html
<p>
    <strong>⚠️ Important Disclaimer:</strong> 
    This page is independently created by Pierre Guirguis. 
    Not affiliated with poke.com or Slack. 
    Keep your API credentials secure.
</p>
```

---

## 🎨 Using the Shared CSS (Optional)

### Option A: Use Inline Styles (Current Method)

Keep the inline `<style>` block as-is in the template. This is what all current integration pages use.

**Pros:**
- Self-contained page
- No additional HTTP request
- Easier to see all styles in one place

**Cons:**
- Duplication across pages
- Harder to maintain consistency
- Larger file size

### Option B: Use Shared CSS File (Recommended for Future)

Replace the inline `<style>` block with:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="...">
    <title>...</title>
    
    <!-- Base styles -->
    <link rel="stylesheet" href="style.css">
    
    <!-- Integration page styles -->
    <link rel="stylesheet" href="integration-styles.css">
</head>
```

**Pros:**
- Single source of truth
- Easier to maintain
- Smaller individual files
- Consistent updates

**Cons:**
- Additional HTTP request
- Need to update all existing pages

---

## ✅ Completion Checklist

Before submitting your new integration page, verify:

### Content Completeness

- [ ] **Meta tags** updated with integration name and description
- [ ] **Hero section** has appropriate emoji, title, and description
- [ ] **Setup instructions** are clear and tested (4-6 steps)
- [ ] **MCP configuration** is valid JSON with correct syntax
- [ ] **Conversation examples** include 3-5 realistic scenarios
- [ ] **Capabilities grid** showcases 4-6 key features
- [ ] **Resources section** has relevant links (all working)
- [ ] **Pro tips** provide 5-8 helpful suggestions
- [ ] **Footer disclaimer** updated with service name
- [ ] All TODO comments removed
- [ ] All placeholders replaced

### Functionality Testing

- [ ] Page loads without errors in browser
- [ ] Back button works and returns to index.html
- [ ] All external links open in new tabs
- [ ] All links go to correct destinations (no 404s)
- [ ] Code blocks display correctly
- [ ] No console errors (F12 → Console)

### Visual Consistency

- [ ] Matches dark theme of other integration pages
- [ ] Neon green (#00ff00) used for accents
- [ ] Proper spacing and padding
- [ ] Icons and emojis display correctly
- [ ] Text hierarchy is clear (h1 → h2 → h3)

### Responsive Design

Test at these breakpoints:
- [ ] Mobile (375px - iPhone SE)
- [ ] Tablet (768px - iPad)
- [ ] Desktop (1024px)
- [ ] Large desktop (1920px)

Check:
- [ ] Text remains readable
- [ ] No horizontal scrolling
- [ ] Code blocks don't overflow
- [ ] Hero section scales properly
- [ ] Buttons are easily tappable on mobile (44x44px minimum)

### Accessibility

- [ ] All links have descriptive text
- [ ] External links have `rel="noopener noreferrer"`
- [ ] Code blocks have proper contrast
- [ ] Focus indicators visible when tabbing
- [ ] Heading hierarchy is logical (h1 → h2, no skipping)
- [ ] No text in images (use alt text if images added)

### Security

- [ ] No real API keys in code examples
- [ ] Placeholders clearly marked (e.g., `your_api_key_here`)
- [ ] Security tips included in Pro Tips section
- [ ] External links use HTTPS
- [ ] No sensitive information exposed

### Integration with Main Dashboard

After creating the integration page, you must also:

- [ ] Add integration card to `index.html`
- [ ] Add modal data to `script.js` (helpData object)
- [ ] Add demo data to `script.js` (demoData object)
- [ ] Update `README.md` with integration description
- [ ] Test navigation from main page to integration page

---

## 📐 Design Specifications

### Typography Scale

```
Hero Title: 3rem (48px)
Section Title: 1.75rem (28px)
Hero Subtitle: 1.25rem (20px)
Body Text: 1rem (16px)
Small Text: 0.9rem (14.4px)
Code: 0.875rem (14px)
```

### Spacing Scale

```
Section Margin: 2rem (32px)
Content Padding: 2rem (32px)
Element Gap: 0.75rem (12px)
Card Padding: 1.5rem (24px)
```

### Color Usage

```css
/* Background Layers */
--background: #000000      /* Body background, code blocks */
--surface: #0a0a0a        /* Card backgrounds */
--surface-light: #1a1a1a  /* Pro tips background */

/* Text */
--text-primary: #ffffff    /* Headings, important text */
--text-secondary: #b0b0b0  /* Body text, descriptions */

/* Accents */
--success-color: #00ff00   /* Green accents, borders */
--warning-color: #ffcc00   /* Yellow warnings */
--border-color: #333333    /* Card borders */
```

### Border Radius

```
Large: 12px (sections, cards)
Medium: 8px (buttons, inputs)
Small: 4px (code, tags)
Circle: 50% (step numbers, status indicators)
```

---

## 🔍 Quality Checklist

### Content Quality

- [ ] **Clear & Concise** - Instructions are easy to follow
- [ ] **Complete** - No missing information
- [ ] **Accurate** - All technical details are correct
- [ ] **Tested** - You've personally tested the setup
- [ ] **Spell-checked** - No typos or grammar errors

### Code Quality

- [ ] **Valid JSON** - Configuration examples are syntactically correct
- [ ] **Working Commands** - Terminal commands are accurate
- [ ] **Proper Links** - URLs are correct and not broken
- [ ] **Clean HTML** - Properly formatted and indented
- [ ] **No Hardcoded Values** - Uses placeholders for secrets

### User Experience

- [ ] **Logical Flow** - Steps follow a natural progression
- [ ] **Helpful Examples** - Conversation examples are realistic
- [ ] **Visual Hierarchy** - Important information stands out
- [ ] **Easy Navigation** - Back buttons work correctly
- [ ] **Mobile Friendly** - Works on small screens

---

## 📝 Example: Complete Integration Page

Here's a minimal but complete example for a fictional "Slack" integration:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Slack MCP Integration for Poke - Team communication platform">
    <title>Slack MCP for Poke - MCP Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <style>
        /* Include all styles from integration-template.html */
    </style>
</head>
<body>
    <div class="container">
        <div class="back-nav">
            <a href="index.html" class="back-btn">← Back to Dashboard</a>
        </div>

        <div class="disclaimer-banner">
            <span class="disclaimer-icon">⚠️</span>
            <p><strong>Independent Project:</strong> This page is not affiliated with poke.com. Community resource by Pierre Guirguis.</p>
        </div>

        <div class="hero-section">
            <div class="hero-icon">💬</div>
            <h1 class="hero-title">Slack MCP for Poke</h1>
            <p class="hero-subtitle">Team communication and collaboration platform</p>
            <p style="color: var(--text-secondary); margin-top: 1rem;">
                Send messages, manage channels, and collaborate with your team through Poke
            </p>
        </div>

        <!-- ... rest of the content ... -->
    </div>
</body>
</html>
```

---

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This

**1. Missing rel attributes on external links**
```html
<a href="https://external.com" target="_blank">Link</a>
```

**2. Hardcoding API keys**
```html
<code>SLACK_TOKEN: "xoxb-123456789-real-token"</code>
```

**3. Breaking the style consistency**
```html
<style>
  .hero-section {
    background: blue; /* Don't change established styles! */
  }
</style>
```

**4. Skipping accessibility attributes**
```html
<div onclick="doSomething()">Click me</div>
```

**5. Invalid JSON in configuration**
```json
{
  "mcpServers": {
    "slack": {
      command: "npx",  // Missing quotes!
    }
  }
}
```

### ✅ Do This Instead

**1. Proper external links**
```html
<a href="https://external.com" target="_blank" rel="noopener noreferrer">Link</a>
```

**2. Use placeholders**
```html
<code>SLACK_TOKEN: "your_slack_token_here"</code>
```

**3. Keep consistent styling**
```html
<!-- Use the template styles as-is -->
```

**4. Proper semantic HTML**
```html
<button onclick="doSomething()">Click me</button>
```

**5. Valid JSON**
```json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"]
    }
  }
}
```

---

## 📚 Additional Resources

### Reference Integration Pages

Study these well-implemented pages for examples:

- **[bart.html](bart.html)** - Good example with detailed setup and multiple examples
- **[todoist.html](todoist.html)** - Excellent conversation examples
- **[last-fm.html](last-fm.html)** - Great capabilities grid and pro tips
- **[github.html](github.html)** - Clear API credential instructions

### Testing Tools

**Browser Testing:**
- Chrome DevTools: F12 or Cmd/Ctrl + Shift + I
- Responsive Mode: Cmd/Ctrl + Shift + M
- Network Throttling: DevTools → Network → Slow 3G

**Validation:**
- HTML: [W3C Validator](https://validator.w3.org/)
- Links: [W3C Link Checker](https://validator.w3.org/checklink)
- Accessibility: [WAVE](https://wave.webaim.org/)

**JSON Validation:**
- [JSONLint](https://jsonlint.com/)
- VS Code JSON schema validation

---

## 🤝 Getting Help

### Questions About the Template?

1. **Check existing integration pages** - See how others implemented similar features
2. **Read CONTRIBUTING.md** - Detailed contribution guidelines
3. **Open a Discussion** - Ask the community
4. **Create an Issue** - Report template problems or suggest improvements

### Before Asking for Help

1. Have you tested the page locally?
2. Have you checked for console errors?
3. Have you reviewed existing integration pages?
4. Have you read the CONTRIBUTING.md guide?
5. Can you provide a specific example or screenshot?

---

## 🎉 You're Ready!

Follow this guide, use the template, complete the checklist, and you'll have a professional integration page ready for review. 

**Thank you for contributing to the MCP Dashboard!** 🚀

---

**Questions or feedback about this template guide?** Open an issue or PR!

**Template Version:** 1.0.0  
**Last Updated:** February 2026  
**Maintained by:** [@guirguispierre](https://github.com/guirguispierre)
