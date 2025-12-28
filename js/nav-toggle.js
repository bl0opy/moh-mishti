(function() {
    function initMobileNav() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.getElementById('primary-nav');
        if (!toggle || !nav) return;

        toggle.addEventListener('click', (e) => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!nav.classList.contains('open')) return;
            const isInside = e.target.closest('nav');
            if (!isInside) {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open navigation');
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && nav.classList.contains('open')) {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open navigation');
                toggle.focus();
            }
        });

        // Ensure nav is closed when resizing to desktop widths
        window.addEventListener('resize', () => {
            if (window.innerWidth > 640 && nav.classList.contains('open')) {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
        initMobileNav();
    }
})();
