// Cursor glow effect
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Intersection Observer for fade-up & skill bars
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible', 'in-view');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-up, .skill-card, .about-card, .cert-card, .achieve-card, .project-card, .contact-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

// Hamburger menu
document.getElementById('hamburger')?.addEventListener('click', () => {
    const ul = document.querySelector('nav ul');
    ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    ul.style.flexDirection = 'column';
    ul.style.position = 'absolute';
    ul.style.top = '70px';
    ul.style.left = '0';
    ul.style.right = '0';
    ul.style.background = 'rgba(8,11,18,0.98)';
    ul.style.padding = '20px';
    ul.style.borderBottom = '1px solid rgba(255,255,255,0.07)';
});

// Smooth active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute('id');
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
    });
});

console.log('🚀 Portfolio Loaded — Samit Khicher');
function openResume(){
    document.getElementById("resumeModal").style.display = "flex";
}

function closeResume(){
    document.getElementById("resumeModal").style.display = "none";
}

