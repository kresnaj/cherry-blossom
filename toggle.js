const menuToggle = document.querySelector('.menu-toggle input');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', ()=> {
    navLinks.classList.toggle('slide');
});                                                                                                  