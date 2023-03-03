const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.mobbar-menu');
const bars = document.querySelectorAll('.bar');
// const middle = document.getElementsByClassName('bar')[1];

hamburgerMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  hamburgerMenu.classList.toggle('active');
  navbarMenu.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('active'));
  bars[1].classList.toggle('hide');
}
