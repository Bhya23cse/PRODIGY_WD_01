
document.addEventListener('DOMContentLoaded', function() {
    const colorModeBtn = document.querySelector('.color-mode-btn');
    const body = document.body;

    colorModeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#bbb';
        });
        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('open');
    });
});
