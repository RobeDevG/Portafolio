const menuCheck = document.getElementById('menu')
const menu = document.querySelector('.nav__menu-links')


menuCheck.addEventListener('change', mostrarMenu)

function mostrarMenu(){
    menu.classList.toggle('hidden')
}