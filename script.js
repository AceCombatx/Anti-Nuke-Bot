document.addEventListener('DOMContentLoaded', function() {
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
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Add active class to first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }

    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .setup-step, .feature-detail-content, .support-option');
        
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
});

// Add CSS for the copy tooltip
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .code-block {
            position: relative;
            cursor: pointer;
        }
        
        .copy-tooltip {
            position: absolute;
            top: -30px;
            right: 10px;
            background-color: var(--success-color);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            animation: fadeIn 0.3s, fadeOut 0.3s 1.7s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .animated {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
`);
