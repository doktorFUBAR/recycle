// Hamburger menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const icon = document.querySelector(".far");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("animate");
    if (menu.style.transform === "translateY(-2000px)") {
        menu.style.transform = "translateY(0px)";
        icon.style.color = "#fff";
    } else {
        menu.style.transform = "translateY(-2000px)";
        icon.style.color = "#1A936F";
    }
});