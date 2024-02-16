// buat variabel

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let x = document.querySelector('#x');



// ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('x')
}