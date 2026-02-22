document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Poke MCP Dashboard initialized');
    initializeTheme();
    initializeSearch();
    initializeFilters();
    initializeFAQ();
    animateOnScroll();
    updateStats();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
    if (!themeToggle) return;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeUI(currentTheme, themeIcon, themeText);
    
    themeToggle.addEventListener('click', () => {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeUI(newTheme, themeIcon, themeText);
        
        console.log(`Theme switched to: ${newTheme}`);
    });
}

function updateThemeUI(theme, icon, text) {
    if (!icon || !text) return;
    
    if (theme === 'dark') {
        icon.textContent = '☀️';
        text.textContent = 'Light Mode';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Dark Mode';
    }
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.integration-card');
        
        cards.forEach(card => {
            const name = card.getAttribute('data-name')?.toLowerCase() || '';
            const description = card.querySelector('.card-description')?.textContent.toLowerCase() || '';
            const category = card.getAttribute('data-category')?.toLowerCase() || '';
            
            const matches = searchTerm === '' || 
                          name.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          category.includes(searchTerm);
            
            if (matches) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
        
        if (searchTerm) {
            console.log(`Search: "${searchTerm}"`);
        }
    });
}

// Category Filtering
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

function filterByCategory(category) {
    const cards = document.querySelectorAll('.integration-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 10);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Global FAQ toggle function (for onclick in HTML)
function toggleFaq(element) {
    const faqItem = element.closest('.faq-item');
    if (faqItem) {
        faqItem.classList.toggle('active');
    }
}

// Scroll Animations
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

    document.querySelectorAll('.integration-card, .guide-step, .security-card').forEach(el => {
        observer.observe(el);
    });
}

// Statistics Counter
function updateStats() {
    const cards = document.querySelectorAll('.integration-card');
    const categories = new Set();
    
    cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (category) categories.add(category);
    });

    const totalIntegrationsEl = document.getElementById('totalIntegrations');
    const totalCategoriesEl = document.getElementById('totalCategories');
    
    if (totalIntegrationsEl) {
        animateNumber(totalIntegrationsEl, cards.length);
    }
    
    if (totalCategoriesEl) {
        animateNumber(totalCategoriesEl, categories.size);
    }
}

function animateNumber(element, targetNumber) {
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

// Smooth Scroll for Anchor Links
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

// Scroll to Integrations Helper Function
function scrollToIntegrations() {
    const section = document.querySelector('.integrations-section');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Security Features
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

// Rate Limiter Class
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

// API Rate Limiter Instance
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

// Export Functions (for Module Systems)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        filterByCategory,
        RateLimiter,
        secureAPICall,
        showSecurityTips,
        toggleFaq
    };
}

// Console Branding & Info
console.log('%c🚀 Poke MCP Dashboard', 'color: #0ea5e9; font-size: 18px; font-weight: bold;');
console.log('Community resource for connecting MCP servers to Poke');
console.log('');
console.log('%c🔒 Security Reminder', 'color: #10b981; font-size: 16px; font-weight: bold;');
console.log('All API keys should be stored securely.');
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
console.log('• Integration type labels (Built-in vs Custom MCP)');
