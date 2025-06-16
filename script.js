// Smooth scrolling and fade-in animations
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const sections = document.querySelectorAll('.section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const memoryCards = document.querySelectorAll('.memory-card');
    const promiseItems = document.querySelectorAll('.promise-item');
    
    sections.forEach(section => {
        if (isElementInViewport(section) || section.getBoundingClientRect().top < window.innerHeight * 0.75) {
            section.classList.add('visible');
        }
    });

    timelineItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.8) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 200);
        }
    });

    memoryCards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 150);
        }
    });

    promiseItems.forEach((item, index) => {
        if (item.getBoundingClientRect().top < window.innerHeight * 0.8) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 100);
        }
    });
}

// Create stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Initialize
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
    createStars();
    handleScroll();
});

// Initial call
handleScroll();
