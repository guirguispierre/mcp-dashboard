document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Poke MCP Dashboard initialized');
    initializeInteractions();
    animateOnScroll();
    updateStats();
    initializeSmoothScroll();
    initializeFilters();       // FIX: Enable category filtering
    initializeSearch();        // FIX: Enable search functionality
    initializeThemeToggle();   // FIX: Enable theme toggle
    initializeFAQ();          // Initialize FAQ toggles
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
    const activeCount = integrations.length;
    
    const categories = new Set();
    integrations.forEach(card => {
        const category = card.getAttribute('data-category');
        if (category) categories.add(category);
    });

    animateNumber('totalIntegrations', activeCount);
    animateNumber('totalCategories', categories.size);
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

// FIX: Initialize filter buttons with event listeners
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and filter
            const category = this.getAttribute('data-category');
            filterByCategory(category);
            
            console.log(`Filtered by category: ${category}`);
        });
    });
}

// FIX: Initialize search input with event listener
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.integration-card');
            
            cards.forEach(card => {
                const name = card.getAttribute('data-name')?.toLowerCase() || '';
                const description = card.querySelector('.card-description')?.textContent.toLowerCase() || '';
                
                if (searchTerm === '' || name.includes(searchTerm) || description.includes(searchTerm)) {
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
            
            console.log(`Search: "${searchTerm}"`);
        });
    }
}

// FIX: Initialize theme toggle functionality
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    const html = document.documentElement;
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeUI(currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeUI(theme);
        console.log(`Theme switched to: ${theme}`);
    });
    
    function updateThemeUI(theme) {
        if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
        if (themeText) themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
}

// Initialize FAQ toggles
function initializeFAQ() {
    // This function is called by the inline onclick in the HTML
    // No changes needed here - FAQ functionality works via the toggleFaq function below
}

// FAQ toggle function (called from HTML onclick)
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    if (faqItem) {
        faqItem.classList.toggle('active');
    }
}

// Category filter function (now properly connected via initializeFilters)
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

// Security tips modal (keep this for the security section)
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

// Rate limiter class (keep for potential API usage)
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

// Export functions if module system is available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterByCategory,
        RateLimiter,
        secureAPICall,
        showSecurityTips,
        toggleFaq
    };
}

// Console branding
console.log('%c🚀 Poke MCP Dashboard', 'color: #0ea5e9; font-size: 18px; font-weight: bold;');
console.log('Community resource for connecting MCP servers to Poke');
console.log('');
console.log('%c🔒 Security Reminder', 'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('All API keys should be stored in your Poke MCP configuration file.');
console.log('Never share or commit your API keys to version control.');
console.log('');
console.log('%c⚠️ Disclaimer', 'color: #f59e0b; font-size: 14px; font-weight: bold;');
console.log('This dashboard is a community project by Pierre Guirguis.');
console.log('Not affiliated with or endorsed by poke.com.');
console.log('');
console.log('%c✅ UI Enhancements Active:', 'color: #10b981; font-size: 14px; font-weight: bold;');
console.log('• Category filtering enabled');
console.log('• Search functionality enabled');
console.log('• Theme toggle enabled');
