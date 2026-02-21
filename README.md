# 🚀 Poke MCP Dashboard

A modern, community-driven dashboard showcasing Model Context Protocol (MCP) integrations specifically designed for Poke users. Created by [@guirguispierre](https://github.com/guirguispierre).

![Dashboard Preview](https://img.shields.io/badge/Status-Active-success)
![Integrations](https://img.shields.io/badge/Poke_MCPs-10-blue)
![Security](https://img.shields.io/badge/Security-Enhanced-green)
![Community](https://img.shields.io/badge/Community-Driven-purple)

---

## ⚠️ Important Disclaimer

**This project is independently created and maintained by [@guirguispierre](https://github.com/guirguispierre) as a community resource for Poke users. It is NOT affiliated with, endorsed by, sponsored by, or officially connected to poke.com or its parent company. This is a community-driven showcase of MCP integrations that work with Poke.**

---

## 🎯 Overview

This dashboard provides a comprehensive guide to 10 MCP (Model Context Protocol) integrations that enhance your Poke AI assistant with powerful external capabilities. Each integration includes detailed setup instructions, configuration examples, and real Poke conversation examples.

### What is MCP in Poke?

Model Context Protocol allows Poke to securely connect to external data sources and tools, enabling it to access real-time information and perform actions on your behalf. Once configured, you can naturally ask Poke to interact with these services through conversation.

---

## 🔌 Available Integrations

### 🚇 Transit & Location
- **[BART](bart.html)** - Bay Area Rapid Transit real-time data and schedules
  - Real-time train arrivals
  - Service advisories and delays
  - Station information
  - Route planning

### 📊 Financial
- **[Earnings Feed](earnings-feed.html)** - Financial data and market insights
  - Quarterly earnings reports
  - Earnings calendar
  - Historical data analysis
  - Company comparisons

### 🎬 Media Processing
- **[FFmpeg](ffmpeg.html)** - Video and audio processing
  - Format conversion (MP4, AVI, MOV, etc.)
  - Video editing and compression
  - Audio extraction
  - GIF creation

### ✅ Productivity
- **[Todoist](todoist.html)** - Task management integration
  - Create and manage tasks
  - Set due dates and priorities
  - Project organization
  - Productivity tracking

### 🎵 Entertainment
- **[Last.fm](last-fm.html)** - Music tracking and scrobbling
  - Listening history
  - Music statistics
  - Artist recommendations
  - Trend analysis

### 🌐 Deployment Platforms
- **[Netlify](netlify.html)** - Continuous deployment with edge network
  - Deploy sites from Git
  - Build status monitoring
  - Environment management
  - Domain configuration

- **[Vercel](vercel.html)** - Frontend deployment with serverless functions
  - Next.js optimized deployments
  - Serverless function management
  - Preview deployments
  - Analytics integration

### 🛠️ Developer Tools
- **[DeepWiki](deepwiki.html)** - Documentation search and knowledge management
  - Documentation search
  - Knowledge base queries
  - API reference lookup
  - Code examples

- **[Supabase](supabase.html)** - PostgreSQL database platform
  - Database queries
  - Real-time subscriptions
  - Row-level security
  - Schema management

- **[GitHub](github.html)** - Code repository and API integration
  - Repository management
  - Issue creation and tracking
  - Pull request workflows
  - Branch operations

---

## 🎨 Features

### For Poke Users
- **Click-to-Navigate Cards** - Click any integration card to view detailed setup guide
- **Poke Conversation Examples** - Real conversation examples for each integration
- **Copy-Paste Configurations** - Ready-to-use MCP configuration snippets for Poke
- **Quick Connection Links** - One-click setup placeholders (to be added)
- **Security Best Practices** - Poke-specific security guidelines for API keys

### Technical Features
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Modern UI** - Black theme with neon green accents and smooth animations
- **Categorized Integrations** - Organized by Transit, Financial, Media, Productivity, Entertainment, Deployment, and Developer categories
- **Status Indicators** - Real-time status for each Poke-ready integration
- **Interactive Modals** - Quick-view modals for setup instructions
- **Animated Elements** - Smooth transitions and hover effects

---

## 🚀 Quick Start for Poke Users

### Step 1: Choose an Integration
Browse the [dashboard](https://guirguispierre.github.io/mcp-dashboard/) and click on any integration card to view detailed setup instructions.

### Step 2: Get Required Credentials
Most integrations require API keys from the respective services:
- Create an account with the service (if needed)
- Generate an API token or key
- Save it securely

### Step 3: Configure Poke MCP
Add the integration to your Poke MCP configuration file:

**Location:**
- macOS/Linux: `~/.poke/mcp.json`
- Windows: `%USERPROFILE%\.poke\mcp.json`
- Or: Poke Settings → MCP Servers

**Example Configuration:**
```json
{
  "mcpServers": {
    "bart": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bart"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your_token_here"
      }
    }
  }
}
```

### Step 4: Restart Poke
Close and restart your Poke application to load the new MCP servers.

### Step 5: Start Using!
Simply talk to Poke naturally:
- "Check BART delays between Powell and Embarcadero"
- "Add a task to buy groceries tomorrow"
- "What were Apple's latest earnings?"

---

## 📁 Project Structure

```
mcp-dashboard/
├── index.html              # Main dashboard with all 10 integrations
├── style.css               # Black theme with neon green styling
├── script.js               # Interactive functionality and modals
│
├── bart.html               # BART integration detail page
├── earnings-feed.html      # Earnings Feed detail page
├── ffmpeg.html             # FFmpeg detail page
├── todoist.html            # Todoist detail page
├── last-fm.html            # Last.fm detail page
├── netlify.html            # Netlify detail page
├── vercel.html             # Vercel detail page
├── deepwiki.html           # DeepWiki detail page
├── supabase.html           # Supabase detail page
├── github.html             # GitHub detail page
│
├── package.json            # Dependencies and scripts
├── vercel.json             # Vercel deployment config
├── netlify.toml            # Netlify deployment config
└── README.md               # This file
```

### Page Structure

Each integration detail page includes:
- **Hero Section** - Large icon, title, and description
- **Quick Connect Placeholder** - For adding MCP connection links
- **Setup Instructions** - Step-by-step Poke configuration guide
- **MCP Configuration Code** - Copy-paste ready JSON configs
- **Poke Conversation Examples** - 3-5 realistic usage examples
- **Capabilities Grid** - What you can do with the integration
- **Resources** - Links to official documentation
- **Pro Tips** - Best practices and helpful hints

---

## 🔒 Security Features

### For Poke Users
- **Secure Configuration Storage** - All API keys stored in Poke MCP config
- **Environment Variables** - Proper credential management
- **No Client Exposure** - Zero API keys in client-side code
- **Rate Limiting** - Built-in protection against API abuse

### Implementation
- **Content Security Policy (CSP)** - Configured in deployment files
- **X-Frame-Options** - Protection against clickjacking
- **X-Content-Type-Options** - MIME type security
- **Referrer Policy** - Privacy-focused referrer handling
- **Permissions Policy** - Restricted feature access

---

## 💻 Local Development

### Prerequisites
- Node.js 16+ (for MCP servers)
- Git
- A code editor (VS Code recommended)

### Setup

1. **Clone the repository:**
```bash
git clone https://github.com/guirguispierre/mcp-dashboard.git
cd mcp-dashboard
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start local server:**
```bash
npm run dev
# or
python3 -m http.server 3000
# or
npx serve
```

4. **Open in browser:**
```
http://localhost:3000
```

---

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel --prod
```

3. **Configure:**
The `vercel.json` file includes all necessary headers and redirects.

### Deploy to Netlify

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Deploy:**
```bash
netlify deploy --prod
```

3. **Configure:**
The `netlify.toml` file includes all necessary headers and redirects.

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Select branch:** `main`
3. **Select folder:** `/ (root)`
4. Your site will be available at: `https://guirguispierre.github.io/mcp-dashboard/`

---

## 🎨 Customization

### Adding New Integrations

1. **Create a new detail page** (e.g., `new-integration.html`)
2. **Copy structure** from existing integration pages
3. **Update content** with integration-specific details
4. **Add to index.html:**

```html
<div class="integration-card" data-category="your-category" onclick="navigateToPage('new-integration.html')">
    <div class="card-header">
        <span class="icon">🔧</span>
        <h3>New Integration</h3>
        <span class="status-indicator status-active"></span>
    </div>
    <p class="description">Description for Poke users</p>
    <div class="card-footer">
        <span class="category-tag your-category">Category</span>
        <span class="tech-tag">Poke Ready</span>
    </div>
    <div class="card-actions">
        <a href="new-integration.html" class="help-btn">📚 View Full Guide</a>
        <button class="demo-btn" onclick="event.stopPropagation(); showDemo('new')">▶️ Quick Example</button>
    </div>
</div>
```

### Updating Colors

Modify CSS variables in `style.css`:

```css
:root {
    --primary-color: #000000;
    --success-color: #00ff00;
    --warning-color: #ffcc00;
    /* Add your custom colors */
}
```

---

## 📊 Performance

- **Lightweight** - Total size < 100KB
- **Fast Load Times** - Optimized assets
- **Smooth Animations** - 60fps transitions
- **Minimal Dependencies** - Pure HTML/CSS/JS
- **CDN-Ready** - Optimized for global distribution

---

## 🤝 Contributing

Contributions are welcome! This is a community project for Poke users.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature for Poke users'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- Add new MCP integration pages
- Improve Poke conversation examples
- Enhance documentation
- Add more security best practices
- Create video tutorials
- Translate to other languages

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**[@guirguispierre](https://github.com/guirguispierre)**
- Project: Independent community resource for Poke users

---

## 🙏 Acknowledgments

- **MCP Community** - For the Model Context Protocol standard
- **Poke Users** - For inspiration and feedback
- **API Providers** - BART, Todoist, Last.fm, GitHub, Netlify, Vercel, Supabase, and others
- **Open Source Contributors** - For making these integrations possible

---

## 📞 Support

### For Dashboard Issues
Open an issue in the [GitHub repository](https://github.com/guirguispierre/mcp-dashboard/issues)

### For MCP/Poke Integration Help
- Check the detailed integration pages on the dashboard
- Review [MCP Documentation](https://modelcontextprotocol.io)
- Search existing GitHub issues

### Common Issues

**Q: MCP server not showing up in Poke?**
A: Make sure you've restarted Poke after adding the configuration.

**Q: API key errors?**
A: Verify your API key is correct and has the required permissions.

**Q: Integration not working?**
A: Check that the MCP server is installed: `npm list -g @modelcontextprotocol/server-*`

---

## 🗺️ Roadmap

- [ ] Add video tutorials for each integration
- [ ] Create automated setup scripts
- [ ] Add more MCP integrations
- [ ] Build a configuration validator tool
- [ ] Create a Poke-specific MCP testing suite
- [ ] Add community example library
- [ ] Develop troubleshooting guides

---

## 📈 Stats

- **10 Active Integrations** - All Poke-ready
- **5 Categories** - Transit, Financial, Media, Productivity, Entertainment, Deployment, Developer
- **100% Poke Compatible** - Tested and documented
- **Community Driven** - Built for Poke users, by a Poke user

---

## 🌟 Star History

If you find this dashboard helpful for your Poke setup, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ for the Poke community by [@guirguispierre](https://github.com/guirguispierre) | Powered by Model Context Protocol**

*Not affiliated with poke.com - Independent community project*
