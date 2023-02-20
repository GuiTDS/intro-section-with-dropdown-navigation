const btnOpenMenu = document.querySelector('.lateral-menu-btn');
const lateralMenu = document.querySelector('.lateral-menu');
const dropdown = document.querySelectorAll('.dropdown');

btnOpenMenu.addEventListener("click", () => {
    document.body.classList.toggle('menu-open');
    lateralMenu.classList.toggle('lateral-menu-active');
})

dropdown.forEach( btn => {
    btn.addEventListener("click", () => {
        btn.parentElement.classList.toggle('dropdown-active');
    })
})