import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

// Smooth scroll with offset for navbar
document.addEventListener('DOMContentLoaded', function() {
    // Handle anchor links with smooth scroll and offset
    const handleAnchorClick = (e) => {
        const link = e.target.closest('a[href^="/#"], a[href^="#"]');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href.startsWith('#') && !href.startsWith('/#')) return;

        // Extract anchor ID
        const anchorId = href.replace(/^\/?#/, '');
        const targetElement = document.getElementById(anchorId);

        // Only handle smooth scroll if we're on the same page and element exists
        if (targetElement && window.location.pathname === '/') {
            e.preventDefault();

            // Calculate navbar height dynamically
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.offsetHeight + parseInt(getComputedStyle(navbar).marginBottom || 0) : 100;

            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        // If element doesn't exist or we're on different page, let browser handle navigation normally
    };

    // Add click handlers to all anchor links
    document.addEventListener('click', handleAnchorClick);

    // Update active navigation link based on scroll position
    const updateActiveLink = () => {
        const sections = ['mechanika', 'nagrody', 'graj', 'smaki-chwili'];

        // Calculate navbar height dynamically for offset
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight + parseInt(getComputedStyle(navbar).marginBottom || 0) : 100;
        const offset = navbarHeight + 20; // Add extra 20px for better visibility

        let currentSection = '';
        const scrollPosition = window.pageYOffset + offset;

        // Find which section is currently in view
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.offsetHeight;

                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    currentSection = sectionId;
                }
            }
        });

        // Update active state for desktop navigation
        const desktopLinks = document.querySelectorAll('.desktop-nav-link');
        desktopLinks.forEach(link => {
            const href = link.getAttribute('href');
            const linkSection = href.replace(/^\/?#/, '');

            if (linkSection === currentSection) {
                link.classList.add('font-bold');
                link.classList.remove('font-normal');
            } else {
                link.classList.remove('font-bold');
                link.classList.add('font-normal');
            }
        });

        // Update active state for mobile navigation
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            const href = link.getAttribute('href');
            const linkSection = href.replace(/^\/?#/, '');

            if (linkSection === currentSection) {
                link.classList.add('font-bold');
                link.classList.remove('font-normal');
            } else {
                link.classList.remove('font-bold');
                link.classList.add('font-normal');
            }
        });
    };

    // Update on scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(updateActiveLink, 10);
    });

    // Update on window resize to recalculate navbar height
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateActiveLink();
        }, 100);
    });

    // Update on page load if there's a hash
    if (window.location.hash) {
        setTimeout(() => {
            const hash = window.location.hash.replace('#', '');
            const targetElement = document.getElementById(hash);
            if (targetElement) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar ? navbar.offsetHeight + parseInt(getComputedStyle(navbar).marginBottom || 0) : 100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            updateActiveLink();
        }, 100);
    }

    // Initial update
    updateActiveLink();
});

document.addEventListener('DOMContentLoaded', function () {
    const iframeContainer = document.getElementById('iframe-container');
    const placeholder = document.getElementById('iframe-placeholder');
    const iframeSrc = "https://bp-lp.test/game/index.html";
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    placeholder.addEventListener('click', function () {
        placeholder.classList.add('hidden');

        const iframe = document.createElement('iframe');
        iframe.src = iframeSrc + "?csrf_token=" + encodeURIComponent(csrfToken);
        iframe.frameborder = 0;
        iframe.classList.add('absolute', 'top-0', 'left-0', 'w-full', 'h-full');

        iframeContainer.appendChild(iframe);

        iframe.addEventListener('load', () => {
            iframe.contentWindow.focus();
        });
    });
});
document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        const iframe = document.querySelector('#iframe-container iframe');
        if (iframe && document.activeElement === iframe) {
            e.preventDefault();
        }
    }
});
