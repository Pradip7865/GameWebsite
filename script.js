const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Function to toggle nav menu and animate links
function toggleNav() {
    // Toggle nav
    nav.classList.toggle('nav-active');

    // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animation
    burger.classList.toggle('toggle');
}

// Toggle nav on burger click
burger.addEventListener('click', toggleNav);

// Close nav when a nav-link is clicked (optional)
navLinks.forEach(link => {
    link.addEventListener('click', toggleNav);
});
