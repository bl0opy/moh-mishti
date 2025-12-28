// ========================================
// Premium Yogurt Website - Interactive JS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavScroll();
    initSectionAnimations();
    initSmoothScroll();
    initParallax();
    setActiveNavLink();
});

// ========================================
// Scroll Progress Bar
// ========================================

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ========================================
// Navigation Scroll Effect
// ========================================

function initNavScroll() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ========================================
// Section Fade-in Animations
// ========================================

function initSectionAnimations() {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                animateCards(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// ========================================
// Animate Cards on Scroll
// ========================================

function animateCards(section) {
    const cards = section.querySelectorAll('.card, .feature-item, .location-card, .value-item');

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';

            requestAnimationFrame(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, index * 100);
    });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Parallax Effect for Hero
// ========================================

function initParallax() {
    const hero = document.querySelector('.hero');

    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = hero.querySelectorAll('.hero-content, .hero-background');

            parallaxElements.forEach((el, index) => {
                const speed = (index + 1) * 0.3;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
}

// ========================================
// Set Active Navigation Link
// ========================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Mouse Movement Effect (Luxury Touch)
// ========================================

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .location-card, .value-item');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const xRotation = ((y / rect.height) - 0.5) * 5;
            const yRotation = ((x / rect.width) - 0.5) * -5;

            card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) translateY(-10px)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ========================================
// Page Transition Effect
// ========================================

function initPageTransition() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FBF7F0, #E6D5F5);
        z-index: 9999;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
    `;
    document.body.appendChild(overlay);

    // Intercept navigation clicks
    document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only handle internal links
            if (href && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault();

                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'all';

                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });

    // Fade in on page load
    window.addEventListener('load', () => {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.pointerEvents = 'none';
        }, 500);
    });
}

initPageTransition();

// ========================================
// Button Ripple Effect
// ========================================

document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
