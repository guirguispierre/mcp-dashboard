document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Poke MCP Dashboard initialized');
    initializeTheme();
    initializeSearch();
    initializeFilters();
    initializeFAQ();
    animateOnScroll();
    updateStats();
});

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const themeText = document.getElementById('themeText');
    
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
    });
}

function updateThemeUI(theme, icon, text) {
    if (theme === 'dark') {
        icon.textContent = '☀️';
        text.textContent = 'Light Mode';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Dark Mode';
    }
}

function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.integration-card');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const name = card.getAttribute('data-name').toLowerCase();
            const description = card.querySelector('.card-description').textContent.toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();
            
            const matches = name.includes(searchTerm) || 
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
    });
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.integration-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            filterByCategory(category, cards);
        });
    });
}

function filterByCategory(category, cards) {
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

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
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
    });
}

function toggleFaq(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
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

    document.querySelectorAll('.integration-card, .guide-step, .security-card').forEach(el => {
        observer.observe(el);
    });
}

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

// Smooth scroll for anchor links
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

// Console styling
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
