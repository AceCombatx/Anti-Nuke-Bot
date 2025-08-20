document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.documentElement;
    
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    
    // Update toggle position based on current theme
    updateTogglePosition();
    
    // Add click event to theme toggle
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
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
    }
    
    function updateTogglePosition() {
        const toggleBall = document.querySelector('.toggle-ball');
        if (toggleBall) {
            if (body.classList.contains('dark-mode')) {
                toggleBall.style.transform = 'translateX(0)';
            } else {
                toggleBall.style.transform = 'translateX(24px)';
            }
        }
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 100) {
                navbar.style.background = 'rgba(10, 14, 26, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(10, 14, 26, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        }
        
        lastScrollY = currentScrollY;
    });

    // Active navigation link
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .pricing-card, .support-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Particle animation for CTA section
    const ctaParticles = document.querySelector('.cta-particles');
    if (ctaParticles) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = 'rgba(255, 255, 255, 0.3)';
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animation = `float-particle ${Math.random() * 10 + 10}s linear infinite`;
            particle.style.animationDelay = Math.random() * 5 + 's';
            
            ctaParticles.appendChild(particle);
        }
    }

    // Add floating particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Copy to clipboard functionality for code blocks
    const codeBlocks = document.querySelectorAll('code');
    codeBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const textToCopy = this.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Create and show tooltip
                const tooltip = document.createElement('div');
                tooltip.style.position = 'absolute';
                tooltip.style.background = 'var(--success-color)';
                tooltip.style.color = 'white';
                tooltip.style.padding = '0.5rem 1rem';
                tooltip.style.borderRadius = '8px';
                tooltip.style.fontSize = '0.8rem';
                tooltip.style.fontWeight = '500';
                tooltip.style.zIndex = '1000';
                tooltip.style.pointerEvents = 'none';
                tooltip.style.transform = 'translateX(-50%)';
                tooltip.style.left = '50%';
                tooltip.style.top = '-40px';
                tooltip.textContent = 'Copied!';
                
                this.style.position = 'relative';
                this.appendChild(tooltip);
                
                // Remove tooltip after 2 seconds
                setTimeout(() => {
                    if (tooltip.parentNode) {
                        tooltip.parentNode.removeChild(tooltip);
                    }
                }, 2000);
            }).catch(() => {
                console.log('Failed to copy to clipboard');
            });
        });
    });

    // Typing effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Stats counter animation
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                let currentValue = 0;
                const increment = finalValue.includes('K') ? 1000 : 
                                 finalValue.includes('%') ? 1 : 1;
                const duration = 2000;
                const steps = duration / 16;
                const stepValue = parseFloat(finalValue) / steps;
                
                const counter = setInterval(() => {
                    currentValue += stepValue;
                    if (currentValue >= parseFloat(finalValue)) {
                        target.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        if (finalValue.includes('K')) {
                            target.textContent = Math.floor(currentValue / 1000) + 'K+';
                        } else if (finalValue.includes('%')) {
                            target.textContent = Math.floor(currentValue) + '%';
                        } else {
                            target.textContent = Math.floor(currentValue);
                        }
                    }
                }, 16);
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroGlow = document.querySelector('.hero-glow');
        const heroGrid = document.querySelector('.hero-grid');
        
        if (heroGlow) {
            heroGlow.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px)`;
        }
        
        if (heroGrid) {
            heroGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});