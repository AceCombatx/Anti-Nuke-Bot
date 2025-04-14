document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelectorAll('.theme-toggle');
    const body = document.documentElement;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    
    // Update toggle position based on current theme
    updateTogglePosition();
    
    // Add click event to all theme toggles
    themeToggle.forEach(toggle => {
        toggle.addEventListener('click', function() {
            if (body.classList.contains('dark-mode')) {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            } else {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            }
            updateTogglePosition();
        });
    });
    
    function updateTogglePosition() {
        const toggleBalls = document.querySelectorAll('.toggle-ball');
        toggleBalls.forEach(ball => {
            if (body.classList.contains('dark-mode')) {
                ball.style.transform = 'translateX(0)';
            } else {
                ball.style.transform = 'translateX(24px)';
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky header
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    // Add active class to first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .setup-step, .feature-detail-content, .support-option, .why-choose-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };

    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Add animated class to feature cards on load
    document.querySelectorAll('.feature-card').forEach(card => {
        card.classList.add('animated');
    });

    // Copy code blocks to clipboard
    const codeBlocks = document.querySelectorAll('.code-block code');
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const textToCopy = this.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Create and show tooltip
                const tooltip = document.createElement('div');
                tooltip.classList.add('copy-tooltip');
                tooltip.textContent = 'Copied!';
                this.parentNode.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 2000);
            });
        });
    });
    
    // Particle animation for CTA section
    const ctaParticles = document.querySelector('.cta-particles');
    if (ctaParticles) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random position, size, and animation delay
            const size = Math.random() * 10 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            ctaParticles.appendChild(particle);
        }
    }
    
    // Glow effect for hero and feature images
    const glowElements = document.querySelectorAll('.hero-glow, .image-glow');
    glowElements.forEach(glow => {
        glow.style.opacity = '0.7';
        
        setInterval(() => {
            const newOpacity = 0.5 + Math.random() * 0.5;
            glow.style.opacity = newOpacity.toString();
        }, 2000);
    });
});
