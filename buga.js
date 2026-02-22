window.addEventListener('load', () => {
    document.querySelector('.kitty').classList.add('loaded');
});
const burger = document.getElementById("burger");
const infofo = document.getElementById("infofo");

burger.addEventListener("click", () => {
burger.classList.toggle("active");
infofo.classList.toggle("active");
});