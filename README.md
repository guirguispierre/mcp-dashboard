# 🚀 MCP Integration Dashboard

A modern, professional dashboard showcasing Pierre Guirguis's Model Context Protocol (MCP) integrations.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-success)
![Integrations](https://img.shields.io/badge/Integrations-10-blue)
![Security](https://img.shields.io/badge/Security-Enhanced-green)

## 🎯 Overview

This dashboard provides a visual overview of 10 active MCP integrations across multiple categories:

### 🚇 Transit & Location
- **BART** - Bay Area Rapid Transit real-time data

### 📊 Financial
- **Earnings Feed** - Financial data and market insights

### 🎬 Media Processing
- **FFmpeg** - Video and audio processing

### ✅ Productivity
- **Todoist** - Task management integration

### 🎵 Entertainment
- **Last.fm** - Music tracking and scrobbling

### 🌐 Deployment Platforms
- **Netlify** - Continuous deployment with edge network
- **Vercel** - Frontend deployment with serverless functions

### 🛠️ Developer Tools
- **DeepWiki** - Documentation search and knowledge management
- **Supabase** - PostgreSQL database platform
- **GitHub** - Code repository and API integration

## 🔒 Security Features

### Environment Variables
All API keys and secrets are stored securely using environment variables. **Never commit API keys to the repository.**

### Rate Limiting
Implemented rate limiting to prevent API abuse:
- 10 requests per minute per client
- Graceful degradation when limits are reached
- Server-side enforcement for critical endpoints

### No Client Secrets
- Zero API keys exposed in client-side JavaScript
- All sensitive operations handled server-side
- Secure proxy endpoints for API calls

### Security Headers
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer Policy
- Permissions Policy

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Set environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add your API keys and secrets

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy --prod
```

3. Set environment variables in Netlify dashboard:
   - Go to Site Settings > Environment Variables
   - Add your API keys and secrets

### Manual Deployment

The dashboard is a static website and can be deployed to any static hosting service:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Google Cloud Storage

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/guirguispierre/mcp-dashboard.git
cd mcp-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start local server:
```bash
npm run dev
```

4. Open in browser:
```
http://localhost:3000
```

## 📁 Project Structure

```
mcp-dashboard/
├── index.html          # Main dashboard page
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
├── package.json        # Dependencies and scripts
├── vercel.json         # Vercel deployment config
├── netlify.toml        # Netlify deployment config
└── README.md           # Documentation
```

## 🎨 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean, professional interface with gradient accents
- **Animated Elements** - Smooth transitions and hover effects
- **Category Filtering** - Organize integrations by category
- **Status Indicators** - Real-time status for each integration
- **Security First** - Built with security best practices

## 🔧 Customization

### Adding New Integrations

1. Open `index.html`
2. Add a new integration card in the `integrations-grid` section:

```html
<div class="integration-card" data-category="your-category">
    <div class="card-header">
        <span class="icon">🔧</span>
        <h3>Your Integration</h3>
        <span class="status-indicator status-active"></span>
    </div>
    <p class="description">Description of your integration</p>
    <div class="card-footer">
        <span class="category-tag your-category">Category</span>
        <span class="tech-tag">Technology</span>
    </div>
</div>
```

3. Add corresponding category styling in `style.css`

### Updating Colors

Modify CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* Add your custom colors */
}
```

## 📊 Performance

- Lightweight (< 50KB total)
- Fast load times
- Optimized animations
- Minimal dependencies
- CDN-ready

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Pierre Guirguis**
- GitHub: [@guirguispierre](https://github.com/guirguispierre)

## 🙏 Acknowledgments

- Model Context Protocol (MCP) community
- All the amazing API providers and platforms
- Open source contributors

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ by Pierre Guirguis | Powered by Model Context Protocol