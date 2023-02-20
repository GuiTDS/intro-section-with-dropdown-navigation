const btnOpenMenu = document.querySelector('.lateral-menu-btn');
const lateralMenu = document.querySelector('.lateral-menu');

btnOpenMenu.addEventListener("click", () => {
    document.body.classList.toggle('menu-open');
    lateralMenu.classList.toggle('lateral-menu-active');
})