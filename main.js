const menuCheck = document.getElementById('menu')
const menu = document.querySelector('.nav__menu-links')
const activeMenu = document.querySelectorAll('.nav__menu-link')

menuCheck.addEventListener('change', mostrarMenu)

function mostrarMenu() {
    menu.classList.toggle('hidden')
}

activeMenu.forEach((e , i) => { 
    activeMenu[i].addEventListener('click', mostrarMenu)
})