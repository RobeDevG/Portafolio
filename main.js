const menuCheck = document.getElementById('menu')
const menu = document.querySelector('.nav__menu-links')
const cardsWindows = document.querySelector('.card__container')
const cardsMovile = document.querySelector('.slaider__container')

menuCheck.addEventListener('change', mostrarMenu)

function mostrarMenu(){
    menu.classList.toggle('hidden')
}