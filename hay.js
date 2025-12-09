// Smooth scroll to sections
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Toggle mobile menu
function toggleMenu(){
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('open');
}

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
function reveal(){
    revealElements.forEach(el=>{
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);
reveal();

// Contact form submission
const form = document.querySelector('form');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Message sent successfully!');
    });
}

// Section scroll-spy for navbar
document.addEventListener('scroll', ()=>{
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(sec=>{
        if(window.scrollY >= sec.offsetTop - 150){
            current = sec.getAttribute('id');
        }
    });
    navLinks.forEach(a=>{
        a.classList.remove('active');
        if(a.getAttribute('href') === '#'+current){
            a.classList.add('active');
        }
    });
});
