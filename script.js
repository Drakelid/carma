// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate counter on scroll
    const counterElement = document.querySelector('.counter-number');
    let hasAnimated = false;
    
    function animateCounter() {
        if (hasAnimated) return;
        
        const target = 1247;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counterElement.textContent = Math.floor(current).toLocaleString();
        }, 16);
        
        hasAnimated = true;
    }
    
    // Intersection Observer for counter animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter();
            }
        });
    }, { threshold: 0.5 });
    
    if (counterElement) {
        observer.observe(counterElement.closest('.environment-section'));
    }

    // Add hover effects to cards
    const cards = document.querySelectorAll('.problem-card, .advisor, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Button click animations
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Hero Image Interactions
    const heroImage = document.querySelector('.hero-image');
    const statBubbles = document.querySelectorAll('.stat-bubble');
    
    // Image hover effect
    if (heroImage) {
        heroImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        heroImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Interactive stat bubbles
    statBubbles.forEach((bubble, index) => {
        bubble.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-5px)';
            this.style.background = 'rgba(0, 212, 170, 0.15)';
            
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 20px;
                border: 2px solid rgba(0, 212, 170, 0.6);
                border-radius: 50%;
                transform: translate(-50%, -50%) scale(0);
                animation: bubbleRipple 1s ease-out forwards;
                pointer-events: none;
            `;
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 1000);
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.background = 'rgba(255, 255, 255, 0.95)';
        });
        
        bubble.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, 100);
        });
    });
    
    // Parallax effect for floating elements
    const floatingElements = document.querySelectorAll('.floating-box');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translateY(${rate * speed}px) rotate(${scrolled * 0.02}deg)`;
        });
    });

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });
});

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pointRipple {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
        }
    }
    
    @keyframes bubbleRipple {
        0% {
            width: 20px;
            height: 20px;
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
        }
        100% {
            width: 60px;
            height: 60px;
            opacity: 0;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    .point {
        position: relative;
        overflow: visible;
    }
`;
document.head.appendChild(style);