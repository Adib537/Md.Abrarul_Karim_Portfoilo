let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nabvar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};