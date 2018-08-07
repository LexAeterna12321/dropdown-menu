const dropMenu = document.querySelectorAll(".dropMenu");
const hiddenMenu = document.querySelectorAll(".hiddenMenu");
let flag = true;

for (let i = 0; dropMenu.length > i; i++) {
    dropMenu[i].addEventListener("click", () => {
        hiddenMenu[i].classList.toggle("navToggled");
    })
}