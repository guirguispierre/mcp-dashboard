# 🚀 Poke MCP Dashboard

A modern, community-driven dashboard showcasing Model Context Protocol (MCP) integrations specifically designed for Poke users. Created by [@guirguispierre](https://github.com/guirguispierre).

![Dashboard Preview](https://img.shields.io/badge/Status-Active-success)
![Integrations](https://img.shields.io/badge/Poke_MCPs-10-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Community](https://img.shields.io/badge/Community-Driven-purple)

---

## ⚠️ Important Disclaimer

**This project is independently created and maintained by [@guirguispierre](https://github.com/guirguispierre) as a community resource for Poke users. It is NOT affiliated with, endorsed by, sponsored by, or officially connected to poke.com or its parent company. This is a community-driven showcase of MCP integrations that work with Poke.**

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Quick Start](#-quick-start)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [Design System](#-design-system)
- [Third-Party Acknowledgments](#-third-party-mcp-server-acknowledgments)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

This dashboard provides a comprehensive guide to MCP (Model Context Protocol) integrations that enhance your Poke AI assistant with powerful external capabilities. Each integration includes detailed setup instructions, configuration examples, and real Poke conversation examples.

### What is MCP in Poke?

Model Context Protocol allows Poke to securely connect to external data sources and tools, enabling it to access real-time information and perform actions on your behalf. Once configured, you can naturally ask Poke to interact with these services through conversation.

### Key Features

- ✨ **Production-Ready Integrations** - All tested with Poke
- 📖 **Comprehensive Documentation** - Step-by-step guides for each integration
- 🎨 **Modern Design** - Beautiful, responsive UI with dark/light modes
- 🔒 **Security First** - Best practices for API key management
- ♿ **Accessible** - WCAG compliant, keyboard navigable
- 📱 **Responsive** - Works on all devices
- 🔍 **Searchable** - Find integrations quickly
- 🎯 **Categorized** - Organized by use case

---

## 🚀 Quick Start

### For Users

1. **Browse Integrations**
   ```
   Visit: https://guirguispierre.github.io/mcp-dashboard/
   ```

2. **Choose an Integration**
   - Click any integration card
   - Read the setup guide
   - Get your API credentials

3. **Configure Poke**
   - Add MCP server to your Poke config
   - Restart Poke
   - Start chatting!

### Example Configuration

```json
{
  "mcpServers": {
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

---

## 💻 Installation

### Prerequisites

- Node.js 18+ (for MCP servers)
- Git
- Poke with MCP support

### Local Development

```bash
# Clone repository
git clone https://github.com/guirguispierre/mcp-dashboard.git
cd mcp-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 📁 Project Structure

```
mcp-dashboard/
├── index.html                      # Main dashboard page
├── integration-template.html       # Template for new integrations
├── integration-styles.css          # Shared styles (black/white theme)
│
├── bart.html                       # Integration pages
├── deepwiki.html
├── earnings-feed.html
├── ffmpeg.html
├── github.html
├── last-fm.html
├── netlify.html
├── supabase.html
├── todoist.html
├── vercel.html
│
├── CONTRIBUTING.md                 # Contribution guidelines
├── INTEGRATIONTEMPLATEGUIDE.md    # Template usage guide
├── CSS_ANALYSIS.md                # Design system documentation
├── README.md                       # This file
├── LICENSE                         # MIT License
│
├── style.css                       # Main dashboard styles
├── script.js                       # Dashboard JavaScript
├── package.json                    # Project metadata
├── vercel.json                     # Vercel config
└── netlify.toml                    # Netlify config
```

---

## 📚 Documentation

### For Users
- **[Main Dashboard](https://guirguispierre.github.io/mcp-dashboard/)** - Browse all integrations
- **Individual Integration Pages** - Detailed setup guides (linked from dashboard)

### For Contributors
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
  - Adding new integrations
  - Code style guidelines
  - Testing requirements
  - Submission process
  
- **[INTEGRATIONTEMPLATEGUIDE.md](INTEGRATIONTEMPLATEGUIDE.md)** - Using the template
  - Template structure
  - Placeholder reference
  - Best practices
  - Quality standards

- **[CSS_ANALYSIS.md](CSS_ANALYSIS.md)** - Design system
  - Color palette
  - Typography scale
  - Component guidelines
  - Responsive breakpoints

### Quick Links
- 🐛 [Report a Bug](https://github.com/guirguispierre/mcp-dashboard/issues)
- 💡 [Request a Feature](https://github.com/guirguispierre/mcp-dashboard/issues)
- 💬 [Discussions](https://github.com/guirguispierre/mcp-dashboard/discussions)
- 📖 [MCP Documentation](https://modelcontextprotocol.io)

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Quick Start

1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/mcp-dashboard.git
   cd mcp-dashboard
   ```

2. **Create Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow the [Contributing Guide](CONTRIBUTING.md)
   - Use the [Integration Template](integration-template.html)
   - Follow the [Design System](CSS_ANALYSIS.md)

4. **Test Thoroughly**
   - Test on multiple browsers
   - Check mobile responsiveness
   - Validate HTML/CSS
   - Test accessibility

5. **Submit PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Ways to Contribute

- 🔌 **Add Integrations** - Create pages for new MCP servers
- 📝 **Improve Docs** - Enhance setup guides and examples
- 🐛 **Fix Bugs** - Report and fix issues
- 🎨 **Design** - Improve UI/UX
- ♿ **Accessibility** - Enhance accessibility features
- 🌍 **Translate** - Add multi-language support

### Contribution Ideas

- Add: Slack, Discord, Notion, Linear, Airtable integrations
- Create video tutorials for each integration
- Build interactive demos
- Add more conversation examples
- Improve mobile experience
- Enhance search functionality
- Add integration testing

**Read the full [Contributing Guide](CONTRIBUTING.md) for detailed instructions.**

---

## 🎨 Design System

### Minimal Black & White Theme

This project uses a consistent minimal design system across all integration pages:

#### Colors
```css
/* Light Mode */
--bg-primary: #ffffff;
--text-primary: #000000;
--border-color: #e0e0e0;

/* Dark Mode */
--bg-primary: #000000;
--text-primary: #ffffff;
--border-color: #333333;
```

#### Typography
- **Font**: Inter, system fonts
- **Scale**: 16px base, modular scale
- **Weights**: 400 (body), 600 (medium), 700-800 (headings)

#### Components
- Cards with subtle borders
- Rounded corners (8-12px)
- Minimal shadows
- Clear hover states
- Accessible focus indicators

**See [CSS_ANALYSIS.md](CSS_ANALYSIS.md) for complete design system documentation.**

---

## 🙏 Third-Party MCP Server Acknowledgments

This dashboard showcases MCP servers developed by various talented developers in the community. We gratefully acknowledge:

### Community-Developed Servers

- **Last.fm MCP** by [Rian van der Merwe](https://github.com/rianvdm)
  - Repository: [rianvdm/lastfm-mcp](https://github.com/rianvdm/lastfm-mcp)
  - License: MIT License
  - Deployment: Cloudflare Workers with OAuth 2.0
  - URL: https://lastfm-mcp.com/mcp

- **EarningsFeed MCP** by [EarningsFeed Organization](https://github.com/earningsfeed)
  - Official API: https://earningsfeed.com/api
  - MCP Endpoint: https://earningsfeed.com/api/mcp
  - Documentation: https://earningsfeed.com/api/docs
  - SDKs: [Python](https://github.com/earningsfeed/earningsfeed-python), [Node.js](https://github.com/earningsfeed/earningsfeed-node), [Rust](https://github.com/earningsfeed/earningsfeed-rust), [CLI](https://github.com/earningsfeed/earningsfeed-cli)
  - License: MIT License (SDKs)
  - Data Source: SEC EDGAR Database

- **FFmpeg MCP** (Original) by [yubraaj11](https://github.com/yubraaj11)
  - Original Repository: [yubraaj11/ffmpeg-mcp](https://github.com/yubraaj11/ffmpeg-mcp)
  - Fork/Deployment: [guirguispierre/ffmepgPOKE](https://github.com/guirguispierre/ffmepgPOKE)
  - Deployment URL: https://ffmpeg-mcp.onrender.com/mcp
  - Framework: FastMCP + FFmpeg Python bindings
  - Core Technology: FFmpeg (LGPL/GPL licensed)

### Pierre's Original Servers

- **BART MCP** - Custom-built MCP server for Bay Area Rapid Transit
  - Repository: [guirguispierre/bartMCP](https://github.com/guirguispierre/bartMCP)
  - Framework: FastMCP + BART Legacy API
  - Data Source: BART API (api.bart.gov)
  - License: MIT License

### Official MCP Servers

The following integrations use official MCP servers from the Model Context Protocol organization:

- **GitHub MCP** - [@modelcontextprotocol/server-github](https://github.com/modelcontextprotocol/servers/tree/main/src/github)
- **Todoist MCP** - [@modelcontextprotocol/server-todoist](https://github.com/modelcontextprotocol/servers)
- **Supabase MCP** - [@modelcontextprotocol/server-supabase](https://github.com/modelcontextprotocol/servers)
- **Vercel MCP** - [@modelcontextprotocol/server-vercel](https://github.com/modelcontextprotocol/servers)
- **Netlify MCP** - [@modelcontextprotocol/server-netlify](https://github.com/modelcontextprotocol/servers)
- **DeepWiki MCP** - [@modelcontextprotocol/server-deepwiki](https://github.com/modelcontextprotocol/servers)

All official servers maintained by [@modelcontextprotocol](https://github.com/modelcontextprotocol/servers)

### Frameworks & Technologies

- **FastMCP** by [jlowin](https://github.com/jlowin/fastmcp) - Framework for building MCP servers
- **Model Context Protocol** - [Anthropic/ModelContextProtocol](https://github.com/modelcontextprotocol) - The MCP standard

---

**Note:** This dashboard aggregates and documents these integrations but does not claim ownership of the underlying MCP servers. Each server is the work of its respective developers and is used in accordance with its license. We deeply appreciate the contributions of all developers who make these tools available to the community.

---

## 🔒 Security

### Best Practices

- ✅ Store API keys in environment variables
- ✅ Never commit credentials to Git
- ✅ Use minimal required permissions
- ✅ Rotate keys regularly
- ✅ Follow service-specific security guidelines

### Implementation

- All integration pages emphasize security
- Warning boxes for credential handling
- Best practices sections in each guide
- Links to official security docs

---

## 📊 Performance

- **Lightweight** - Minimal dependencies
- **Fast Load** - Optimized assets
- **Responsive** - Mobile-first design
- **Accessible** - WCAG AA compliant
- **SEO Friendly** - Semantic HTML, proper meta tags

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All links work
- [ ] Code examples are accurate
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark/light mode both work
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] No console errors
- [ ] HTML validates
- [ ] Cross-browser compatible

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**[@guirguispierre](https://github.com/guirguispierre)**
- Independent community project
- Not affiliated with poke.com
- Open source contributor

---

## 📞 Support

### Need Help?

- **Dashboard Issues**: [GitHub Issues](https://github.com/guirguispierre/mcp-dashboard/issues)
- **Integration Help**: Check individual integration pages
- **MCP Questions**: [MCP Documentation](https://modelcontextprotocol.io)
- **General Discussion**: [GitHub Discussions](https://github.com/guirguispierre/mcp-dashboard/discussions)

### Common Issues

**Q: MCP server not showing up in Poke?**
A: Restart Poke after adding the configuration.

**Q: API key errors?**
A: Verify key is correct and has required permissions.

**Q: How do I contribute?**
A: Read [CONTRIBUTING.md](CONTRIBUTING.md) for complete guide.

---

## 🗺️ Roadmap

- [ ] Video tutorials for each integration
- [ ] Interactive demos
- [ ] More integrations (Slack, Discord, Notion, Linear)
- [ ] Configuration validator tool
- [ ] Community example library
- [ ] Multi-language support
- [ ] Advanced search functionality
- [ ] Integration testing suite

---

## 🌟 Star History

If you find this helpful, please star the repo! ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=guirguispierre/mcp-dashboard&type=Date)](https://star-history.com/#guirguispierre/mcp-dashboard&Date)

---

## 🔗 Links

- **Live Dashboard**: [https://guirguispierre.github.io/mcp-dashboard/](https://guirguispierre.github.io/mcp-dashboard/)
- **Repository**: [https://github.com/guirguispierre/mcp-dashboard](https://github.com/guirguispierre/mcp-dashboard)
- **Issues**: [Report Issues](https://github.com/guirguispierre/mcp-dashboard/issues)
- **Contributing**: [CONTRIBUTING.md](CONTRIBUTING.md)
- **MCP Docs**: [https://modelcontextprotocol.io](https://modelcontextprotocol.io)

---

**Built with ❤️ for the Poke community by [@guirguispierre](https://github.com/guirguispierre)**

*Independent community project • Not affiliated with poke.com • MIT License*

**Join us in making MCP integrations accessible to all Poke users! 🚀**
