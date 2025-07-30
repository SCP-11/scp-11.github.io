// Enhanced dropdown functionality with smooth animations
const dropdowns = document.querySelectorAll(".dropdown");

// Smooth scroll for navigation links
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

// Enhanced gallery image interactions
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.filter = 'brightness(1.1)';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.filter = 'brightness(1)';
    });
});

// Lazy loading for videos
const videos = document.querySelectorAll('video');
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.load();
            videoObserver.unobserve(video);
        }
    });
});

videos.forEach(video => {
    videoObserver.observe(video);
});

// Add scroll progress indicator
function createScrollIndicator() {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #007acc, #00c6ff);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        indicator.style.width = scrolled + '%';
    });
}

// Initialize scroll indicator when page loads
document.addEventListener('DOMContentLoaded', createScrollIndicator);
