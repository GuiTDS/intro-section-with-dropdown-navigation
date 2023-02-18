const modal = document.querySelector(".modal");
const botaoAbrirMenuLateral = document.querySelector(".btn-menu-lateral");
const menuLateral = document.querySelector(".menu-lateral");
const botaoFecharMenuLateral = document.querySelector(".btn-menu-lateral-fechar");

botaoAbrirMenuLateral.addEventListener("click", () => {
    menuLateral.classList.toggle("menu-lateral-ativo");
    botaoFecharMenuLateral.style.visibility = "visible";
    modal.style.visibility = "visible";

})

botaoFecharMenuLateral.addEventListener("click", () => {
    menuLateral.classList.remove("menu-lateral-ativo");
    botaoFecharMenuLateral.style.visibility = "hidden";
    modal.style.visibility = "hidden";
})