document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 MCP Dashboard initialized');
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
            console.log(`Viewing: ${cardName}`);
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

// Help Modal Functions
function openHelp(integration) {
    const modal = document.getElementById('helpModal');
    const helpContent = document.getElementById('helpContent');
    
    const helpData = {
        bart: {
            title: '🚇 BART Integration Setup',
            description: 'Access real-time Bay Area Rapid Transit data including schedules, advisories, and station information.',
            setup: [
                'Install the BART MCP server: <code>npm install @modelcontextprotocol/server-bart</code>',
                'No API key required - BART provides open data',
                'Configure in your AI assistant\'s MCP settings'
            ],
            examples: [
                '"What\'s the next train from Powell Street to Embarcadero?"',
                '"Are there any BART delays right now?"',
                '"Show me the BART schedule for tomorrow morning"'
            ],
            links: [
                { text: 'BART API Documentation', url: 'https://api.bart.gov/docs/overview/index.aspx' }
            ]
        },
        earnings: {
            title: '📊 Earnings Feed Integration',
            description: 'Get real-time financial data, earnings reports, and market insights.',
            setup: [
                'Obtain API key from your financial data provider',
                'Set environment variable: <code>EARNINGS_API_KEY=your_key</code>',
                'Configure the MCP server endpoint'
            ],
            examples: [
                '"What are the latest earnings reports for tech companies?"',
                '"Show me Apple\'s earnings history"',
                '"When is Tesla\'s next earnings call?"'
            ],
            links: []
        },
        ffmpeg: {
            title: '🎬 FFmpeg Integration',
            description: 'Process video and audio files with comprehensive format conversion capabilities.',
            setup: [
                'Install FFmpeg on your system',
                'Install MCP server: <code>npm install @modelcontextprotocol/server-ffmpeg</code>',
                'Ensure FFmpeg is in your system PATH'
            ],
            examples: [
                '"Convert this video to MP4 format"',
                '"Extract audio from this video file"',
                '"Resize this video to 720p"'
            ],
            links: [
                { text: 'FFmpeg Documentation', url: 'https://ffmpeg.org/documentation.html' }
            ]
        },
        todoist: {
            title: '✅ Todoist Integration',
            description: 'Manage tasks and projects with seamless productivity workflows.',
            setup: [
                'Create a Todoist account at todoist.com',
                'Generate API token in Todoist settings',
                'Set environment variable: <code>TODOIST_API_TOKEN=your_token</code>'
            ],
            examples: [
                '"Add a task to buy groceries tomorrow"',
                '"Show me my tasks for this week"',
                '"Mark my meeting task as complete"'
            ],
            links: [
                { text: 'Todoist API', url: 'https://developer.todoist.com/' }
            ]
        },
        lastfm: {
            title: '🎵 Last.fm Integration',
            description: 'Track your music listening history and discover new music.',
            setup: [
                'Create a Last.fm account',
                'Get API key from last.fm/api',
                'Set environment variables: <code>LASTFM_API_KEY</code> and <code>LASTFM_SECRET</code>'
            ],
            examples: [
                '"What have I been listening to lately?"',
                '"Show me my top artists this month"',
                '"Scrobble this track I\'m listening to"'
            ],
            links: [
                { text: 'Last.fm API', url: 'https://www.last.fm/api' }
            ]
        },
        netlify: {
            title: '🌐 Netlify Integration',
            description: 'Deploy and manage websites with continuous deployment.',
            setup: [
                'Create a Netlify account',
                'Generate Personal Access Token in Netlify dashboard',
                'Set environment variable: <code>NETLIFY_TOKEN=your_token</code>'
            ],
            examples: [
                '"Deploy my site to Netlify"',
                '"Show me my Netlify deployment status"',
                '"List all my Netlify sites"'
            ],
            links: [
                { text: 'Netlify API', url: 'https://docs.netlify.com/api/get-started/' }
            ]
        },
        vercel: {
            title: '▲ Vercel Integration',
            description: 'Deploy frontend applications with serverless functions.',
            setup: [
                'Create a Vercel account',
                'Generate Access Token in Vercel dashboard',
                'Set environment variable: <code>VERCEL_TOKEN=your_token</code>'
            ],
            examples: [
                '"Deploy my Next.js app to Vercel"',
                '"Show me my Vercel deployments"',
                '"Check the status of my Vercel project"'
            ],
            links: [
                { text: 'Vercel API', url: 'https://vercel.com/docs/rest-api' }
            ]
        },
        deepwiki: {
            title: '📚 DeepWiki Integration',
            description: 'Search documentation and manage knowledge bases.',
            setup: [
                'Install DeepWiki MCP server',
                'Configure documentation sources',
                'Set up indexing for your docs'
            ],
            examples: [
                '"Search the docs for authentication methods"',
                '"Find information about API rate limits"',
                '"Show me the latest documentation updates"'
            ],
            links: []
        },
        supabase: {
            title: '🗄️ Supabase Integration',
            description: 'Access PostgreSQL database with real-time capabilities.',
            setup: [
                'Create a Supabase project',
                'Get your project URL and API keys',
                'Set environment variables: <code>SUPABASE_URL</code> and <code>SUPABASE_KEY</code>'
            ],
            examples: [
                '"Query my users table"',
                '"Create a new record in the posts table"',
                '"Show me the schema of my database"'
            ],
            links: [
                { text: 'Supabase Documentation', url: 'https://supabase.com/docs' }
            ]
        },
        github: {
            title: '🐙 GitHub Integration',
            description: 'Manage code repositories and collaborate on projects.',
            setup: [
                'Generate Personal Access Token in GitHub settings',
                'Set environment variable: <code>GITHUB_TOKEN=your_token</code>',
                'Configure appropriate scopes for your needs'
            ],
            examples: [
                '"List my GitHub repositories"',
                '"Create a new issue in my project"',
                '"Show me recent pull requests"'
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
        
        <h4>⚙️ Setup Instructions</h4>
        <ol>
            ${data.setup.map(step => `<li>${step}</li>`).join('')}
        </ol>
        
        <h4>💡 Example Prompts</h4>
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
            <strong>Note:</strong> These integrations work with Claude Desktop, Poke (with MCP support), and other MCP-compatible AI assistants. Always keep your API keys secure and never share them publicly.
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
        bart: 'Example: "Hey, can you check if there are any BART delays between Powell St and Embarcadero?"',
        earnings: 'Example: "What were Apple\'s earnings for Q4 2023?"',
        ffmpeg: 'Example: "Convert my video.mov file to MP4 format with 1080p resolution"',
        todoist: 'Example: "Add a task to review the project proposal by Friday"',
        lastfm: 'Example: "What are my top 10 most played songs this month?"',
        netlify: 'Example: "Deploy my website from the main branch to production"',
        vercel: 'Example: "Show me the deployment status of my Next.js app"',
        deepwiki: 'Example: "Search the documentation for information about webhooks"',
        supabase: 'Example: "Query the users table and show me all active users"',
        github: 'Example: "Create a new issue titled \'Add dark mode\' in my project"'
    };
    
    alert(`📝 Usage Example:\n\n${demoData[integration] || 'Example coming soon!'}\n\nTry asking your AI assistant something similar!`);
}

function showSecurityTips() {
    alert('🔒 Security Best Practices:\n\n' +
        '1. Never commit API keys to version control\n' +
        '2. Use environment variables for sensitive data\n' +
        '3. Rotate API keys regularly\n' +
        '4. Use minimum required permissions\n' +
        '5. Monitor API usage for anomalies\n' +
        '6. Enable 2FA on all accounts\n' +
        '7. Review third-party access regularly\n' +
        '8. Keep dependencies updated\n\n' +
        'Stay safe! 🛡️');
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

console.log('%c🔒 Security Reminder', 'color: #00ff00; font-size: 16px; font-weight: bold;');
console.log('All API keys are managed server-side using environment variables.');
console.log('Rate limiting is implemented to prevent abuse.');
console.log('No sensitive credentials are exposed in client-side code.');
console.log('\n%c⚠️ Disclaimer', 'color: #ffcc00; font-size: 14px; font-weight: bold;');
console.log('This dashboard is independently created and not affiliated with poke.com or any official AI platform.');
