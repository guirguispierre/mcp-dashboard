document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Poke MCP Dashboard initialized');
    initializeInteractions();
    animateOnScroll();
    updateStats();
    initializeSmoothScroll();
});

function initializeInteractions() {
    const cards = document.querySelectorAll('.integration-card');
    
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Only add click effect if not clicking a button
            if (!e.target.closest('button')) {
                card.classList.add('clicked');
                setTimeout(() => card.classList.remove('clicked'), 300);
            }
        });

        card.addEventListener('mouseenter', (e) => {
            const cardName = e.currentTarget.querySelector('h3').textContent;
            console.log(`Viewing: ${cardName} for Poke`);
        });
    });
}

function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.integration-card, .guide-card').forEach(card => {
        observer.observe(card);
    });
}

function updateStats() {
    const integrations = document.querySelectorAll('.integration-card');
    const activeCount = document.querySelectorAll('.status-active').length;
    
    const categories = new Set();
    integrations.forEach(card => {
        const category = card.getAttribute('data-category');
        if (category) categories.add(category);
    });

    animateNumber('total-integrations', activeCount);
    animateNumber('categories', categories.size);
}

function animateNumber(elementId, targetNumber) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const duration = 1000;
    const steps = 30;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
        step++;
        current += increment;
        
        if (step >= steps) {
            element.textContent = targetNumber;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, duration / steps);
}

function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function scrollToIntegrations() {
    const section = document.querySelector('.integrations-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Help Modal Functions - Poke Specific
function openHelp(integration) {
    const modal = document.getElementById('helpModal');
    const helpContent = document.getElementById('helpContent');
    
    const helpData = {
        bart: {
            title: '🚇 BART Integration for Poke',
            description: 'Connect Bay Area Rapid Transit data to Poke for real-time transit information, schedules, and service advisories.',
            setup: [
                'Install the BART MCP server: <code>npm install @modelcontextprotocol/server-bart</code>',
                'Add to your Poke MCP configuration file (usually <code>~/.poke/mcp.json</code> or Poke settings)',
                'No API key required - BART provides open data',
                'Restart Poke to load the new MCP server'
            ],
            pokeConfig: `{
  "mcpServers": {
    "bart": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-bart"]
    }
  }
}`,
            examples: [
                '\"Hey Poke, what\\'s the next train from Powell Street to Embarcadero?\"',
                '\"Are there any BART delays right now?\"',
                '\"Show me the BART schedule for tomorrow morning from SF to Oakland\"',
                '\"What BART stations are near me?\"'
            ],
            links: [
                { text: 'BART MCP Server', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/bart' },
                { text: 'BART API Documentation', url: 'https://api.bart.gov/docs/overview/index.aspx' }
            ]
        },
        earnings: {
            title: '📊 Earnings Feed for Poke',
            description: 'Access real-time financial data, earnings reports, and market insights directly through Poke.',
            setup: [
                'Obtain API key from your financial data provider (e.g., Alpha Vantage, Financial Modeling Prep)',
                'Install the earnings MCP server',
                'Add to your Poke MCP configuration with your API key in environment variables',
                'Restart Poke to activate'
            ],
            pokeConfig: `{
  "mcpServers": {
    "earnings": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-earnings"],
      "env": {
        "EARNINGS_API_KEY": "your_api_key_here"
      }
    }
  }
}`,
            examples: [
                '\"Poke, what are the latest earnings reports for tech companies?\"',
                '\"Show me Apple\\'s earnings history for the past year\"',
                '\"When is Tesla\\'s next earnings call?\"',
                '\"What were Microsoft\\'s Q4 earnings?\"'
            ],
            links: []
        },
        ffmpeg: {
            title: '🎬 FFmpeg for Poke',
            description: 'Process video and audio files through Poke with comprehensive format conversion capabilities.',
            setup: [
                'Install FFmpeg on your system: <code>brew install ffmpeg</code> (macOS) or appropriate package manager',
                'Install MCP server: <code>npm install @modelcontextprotocol/server-ffmpeg</code>',
                'Add to your Poke MCP configuration',
                'Ensure FFmpeg is in your system PATH',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "ffmpeg": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-ffmpeg"]
    }
  }
}`,
            examples: [
                '\"Poke, convert this video to MP4 format\"',
                '\"Extract the audio from my video file as MP3\"',
                '\"Resize this video to 720p resolution\"',
                '\"Compress this video to under 50MB\"'
            ],
            links: [
                { text: 'FFmpeg Documentation', url: 'https://ffmpeg.org/documentation.html' }
            ]
        },
        todoist: {
            title: '✅ Todoist for Poke',
            description: 'Manage your tasks and projects seamlessly through Poke conversations.',
            setup: [
                'Create a Todoist account at <a href="https://todoist.com" target="_blank">todoist.com</a>',
                'Get your API token from Todoist Settings → Integrations → Developer',
                'Install: <code>npm install @modelcontextprotocol/server-todoist</code>',
                'Add to Poke MCP config with your API token',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "todoist": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-todoist"],
      "env": {
        "TODOIST_API_TOKEN": "your_todoist_token_here"
      }
    }
  }
}`,
            examples: [
                '\"Poke, add a task to buy groceries tomorrow at 5pm\"',
                '\"Show me all my tasks for this week\"',
                '\"Mark my \\'finish report\\' task as complete\"',
                '\"Create a new project called \\'Home Renovation\\'\"',
                '\"What are my high priority tasks?\"'
            ],
            links: [
                { text: 'Todoist API', url: 'https://developer.todoist.com/' }
            ]
        },
        lastfm: {
            title: '🎵 Last.fm for Poke',
            description: 'Track your music listening history and get personalized music insights through Poke.',
            setup: [
                'Create a Last.fm account at <a href="https://last.fm" target="_blank">last.fm</a>',
                'Get API credentials from <a href="https://last.fm/api/account/create" target="_blank">last.fm/api</a>',
                'Install the MCP server',
                'Add API key and secret to your Poke MCP configuration',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "lastfm": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-lastfm"],
      "env": {
        "LASTFM_API_KEY": "your_api_key",
        "LASTFM_SECRET": "your_secret"
      }
    }
  }
}`,
            examples: [
                '\"Poke, what have I been listening to lately?\"',
                '\"Show me my top artists this month\"',
                '\"What song have I played the most this year?\"',
                '\"Get recommendations based on my listening history\"'
            ],
            links: [
                { text: 'Last.fm API', url: 'https://www.last.fm/api' }
            ]
        },
        netlify: {
            title: '🌐 Netlify for Poke',
            description: 'Deploy and manage your Netlify sites directly through Poke commands.',
            setup: [
                'Create a Netlify account at <a href="https://netlify.com" target="_blank">netlify.com</a>',
                'Generate Personal Access Token: Netlify Dashboard → User Settings → Applications → Personal Access Tokens',
                'Install: <code>npm install @modelcontextprotocol/server-netlify</code>',
                'Add token to Poke MCP configuration',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "netlify": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-netlify"],
      "env": {
        "NETLIFY_TOKEN": "your_netlify_token"
      }
    }
  }
}`,
            examples: [
                '\"Poke, deploy my site from the main branch\"',
                '\"Show me the status of my Netlify deployments\"',
                '\"List all my Netlify sites\"',
                '\"Check the build logs for my last deployment\"'
            ],
            links: [
                { text: 'Netlify API', url: 'https://docs.netlify.com/api/get-started/' }
            ]
        },
        vercel: {
            title: '▲ Vercel for Poke',
            description: 'Control your Vercel deployments and projects through Poke.',
            setup: [
                'Create a Vercel account at <a href="https://vercel.com" target="_blank">vercel.com</a>',
                'Generate Access Token: Account Settings → Tokens → Create Token',
                'Install: <code>npm install @modelcontextprotocol/server-vercel</code>',
                'Add token to Poke MCP configuration',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "vercel": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-vercel"],
      "env": {
        "VERCEL_TOKEN": "your_vercel_token"
      }
    }
  }
}`,
            examples: [
                '\"Poke, deploy my Next.js app to production\"',
                '\"Show me my Vercel deployments for this project\"',
                '\"Check the status of my latest Vercel build\"',
                '\"List all my Vercel projects\"'
            ],
            links: [
                { text: 'Vercel API', url: 'https://vercel.com/docs/rest-api' }
            ]
        },
        deepwiki: {
            title: '📚 DeepWiki for Poke',
            description: 'Search documentation and knowledge bases through Poke conversations.',
            setup: [
                'Install DeepWiki MCP server',
                'Configure your documentation sources',
                'Add to Poke MCP configuration',
                'Set up indexing for your docs',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "deepwiki": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-deepwiki"]
    }
  }
}`,
            examples: [
                '\"Poke, search the docs for authentication methods\"',
                '\"Find information about API rate limits\"',
                '\"Show me the latest documentation updates\"',
                '\"What does the documentation say about webhooks?\"'
            ],
            links: []
        },
        supabase: {
            title: '🗄️ Supabase for Poke',
            description: 'Query and manage your Supabase database directly through Poke.',
            setup: [
                'Create a Supabase project at <a href="https://supabase.com" target="_blank">supabase.com</a>',
                'Get your project URL and anon/service key from Project Settings → API',
                'Install: <code>npm install @modelcontextprotocol/server-supabase</code>',
                'Add credentials to Poke MCP configuration',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-supabase"],
      "env": {
        "SUPABASE_URL": "https://your-project.supabase.co",
        "SUPABASE_KEY": "your_supabase_key"
      }
    }
  }
}`,
            examples: [
                '\"Poke, query my users table and show me all active users\"',
                '\"Create a new record in the posts table\"',
                '\"Show me the schema of my database\"',
                '\"Count how many records are in the orders table\"'
            ],
            links: [
                { text: 'Supabase Documentation', url: 'https://supabase.com/docs' }
            ]
        },
        github: {
            title: '🐙 GitHub for Poke',
            description: 'Manage your GitHub repositories, issues, and pull requests through Poke.',
            setup: [
                'Generate Personal Access Token: GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)',
                'Select scopes: <code>repo</code>, <code>read:user</code>, <code>read:org</code>',
                'Install: <code>npm install @modelcontextprotocol/server-github</code>',
                'Add token to Poke MCP configuration',
                'Restart Poke'
            ],
            pokeConfig: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "your_github_token"
      }
    }
  }
}`,
            examples: [
                '\"Poke, list my GitHub repositories\"',
                '\"Create a new issue titled \\'Add dark mode\\' in my project\"',
                '\"Show me recent pull requests on my main repo\"',
                '\"What are the open issues in my project?\"',
                '\"Create a new branch called \\'feature/new-ui\\' in my repo\"'
            ],
            links: [
                { text: 'GitHub API', url: 'https://docs.github.com/en/rest' }
            ]
        }
    };
    
    const data = helpData[integration];
    if (!data) return;
    
    let html = `
        <h3>${data.title}</h3>
        <p>${data.description}</p>
        
        <h4>⚙️ Poke Setup Instructions</h4>
        <ol>
            ${data.setup.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        ${data.pokeConfig ? `
            <h4>📝 Poke MCP Configuration</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                Add this to your Poke MCP configuration file:
            </p>
            <pre><code>${data.pokeConfig}</code></pre>
        ` : ''}
        
        <h4>💡 Example Poke Prompts</h4>
        <ul>
            ${data.examples.map(example => `<li><em>${example}</em></li>`).join('')}
        </ul>
        
        ${data.links.length > 0 ? `
            <h4>📖 Resources</h4>
            <ul>
                ${data.links.map(link => `<li><a href="${link.url}" target="_blank" class="external-link">${link.text}</a></li>`).join('')}
            </ul>
        ` : ''}
        
        <p style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--border-color); color: var(--text-secondary); font-size: 0.9rem;">
            <strong>💡 Tip:</strong> After adding the MCP server to your configuration, restart Poke for the changes to take effect. You can then start using these integrations naturally in your Poke conversations!
        </p>
    `;
    
    helpContent.innerHTML = html;
    modal.style.display = 'block';
}

function closeHelp() {
    const modal = document.getElementById('helpModal');
    modal.style.display = 'none';
}

function showDemo(integration) {
    const demoData = {
        bart: 'Try asking Poke:\n\n"Hey Poke, are there any BART delays between Powell St and Embarcadero right now?"\n\nPoke will use the BART MCP to check real-time transit data and give you current service information.',
        earnings: 'Try asking Poke:\n\n"What were Apple\'s latest quarterly earnings?"\n\nPoke will fetch the most recent earnings data and provide you with a detailed summary.',
        ffmpeg: 'Try asking Poke:\n\n"Convert my video.mov file to MP4 format with 1080p resolution"\n\nPoke will use FFmpeg to process your video file with the specified settings.',
        todoist: 'Try asking Poke:\n\n"Add a task to review the project proposal by Friday at 3pm"\n\nPoke will create a new task in your Todoist with the specified due date and time.',
        lastfm: 'Try asking Poke:\n\n"What are my top 10 most played songs this month?"\n\nPoke will query your Last.fm history and show your listening statistics.',
        netlify: 'Try asking Poke:\n\n"Deploy my website from the main branch to production"\n\nPoke will trigger a new deployment on Netlify and provide you with the deployment status.',
        vercel: 'Try asking Poke:\n\n"Show me the deployment status of my Next.js app"\n\nPoke will check your Vercel deployments and give you current build information.',
        deepwiki: 'Try asking Poke:\n\n"Search the documentation for information about webhooks"\n\nPoke will search your configured knowledge bases and return relevant documentation.',
        supabase: 'Try asking Poke:\n\n"Query the users table and show me all users who signed up this week"\n\nPoke will execute the query on your Supabase database and return the results.',
        github: 'Try asking Poke:\n\n"Create a new issue titled \'Add dark mode\' in my mcp-dashboard repo"\n\nPoke will create the issue on GitHub and provide you with the issue URL.'
    };
    
    alert(`📝 Poke Usage Example:\n\n${demoData[integration] || 'Example coming soon!'}
    \n✨ Just talk to Poke naturally - it understands context!`);
}

function showSecurityTips() {
    alert('🔒 Security Best Practices for Poke MCP:\n\n' +
        '1. Never commit your Poke MCP config file with API keys to GitHub\n' +
        '2. Store your MCP configuration securely on your local machine\n' +
        '3. Use environment variables for sensitive data when possible\n' +
        '4. Rotate API keys regularly for all services\n' +
        '5. Only grant minimum required permissions for each API\n' +
        '6. Enable 2FA on all connected accounts (GitHub, Todoist, etc.)\n' +
        '7. Review which MCPs have access to what data periodically\n' +
        '8. Keep your Poke app and MCP servers updated\n' +
        '9. Monitor API usage for unusual activity\n' +
        '10. Back up your configuration but keep it secure\n\n' +
        'Stay safe while using Poke! 🛡️');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('helpModal');
    if (event.target === modal) {
        closeHelp();
    }
}

function filterByCategory(category) {
    const cards = document.querySelectorAll('.integration-card');
    
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

class RateLimiter {
    constructor(maxRequests, timeWindow) {
        this.maxRequests = maxRequests;
        this.timeWindow = timeWindow;
        this.requests = [];
    }

    canMakeRequest() {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.timeWindow);
        
        if (this.requests.length < this.maxRequests) {
            this.requests.push(now);
            return true;
        }
        return false;
    }

    getRemainingRequests() {
        const now = Date.now();
        this.requests = this.requests.filter(time => now - time < this.timeWindow);
        return this.maxRequests - this.requests.length;
    }
}

const apiLimiter = new RateLimiter(10, 60000);

function secureAPICall(endpoint) {
    if (!apiLimiter.canMakeRequest()) {
        console.warn('⚠️ Rate limit exceeded. Please try again later.');
        return Promise.reject(new Error('Rate limit exceeded'));
    }

    console.log(`✅ API call allowed. Remaining: ${apiLimiter.getRemainingRequests()}`);
    
    return fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterByCategory,
        RateLimiter,
        secureAPICall,
        openHelp,
        closeHelp,
        showDemo,
        showSecurityTips
    };
}

console.log('%c🚀 Poke MCP Dashboard', 'color: #00ff00; font-size: 18px; font-weight: bold;');
console.log('Community resource for connecting MCP servers to Poke');
console.log('');
console.log('%c🔒 Security Reminder', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('All API keys should be stored in your Poke MCP configuration file.');
console.log('Never share or commit your API keys to version control.');
console.log('');
console.log('%c⚠️ Disclaimer', 'color: #ffcc00; font-size: 14px; font-weight: bold;');
console.log('This dashboard is a community project by Pierre Guirguis.');
console.log('Not affiliated with or endorsed by poke.com.');
