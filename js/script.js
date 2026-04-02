const idade = window.prompt("Qual é sua idade?", "18");
const mostruario = document.body;
const darkTheme = document.getElementById("light-dark");
const darkThemeMobile = document.getElementById("light-dark-mobile");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const form = document.querySelector(".form");
const input = document.querySelector("input");
const message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = input.value.trim();

  if (!nome) {
    message.textContent = "Digite um nome válido 😐";
    return;
  }

  message.textContent = `Bem-vindo, ${nome}! 🎉`;

  input.value = "";
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open");
});

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

darkTheme.addEventListener("click", toggleTheme);
darkThemeMobile.addEventListener("click", toggleTheme);

if (idade >= 18) {
  alert("Você é maior de idade");
  mostruario.style.filter = "none";
} else {
  alert("Você é menor de idade e não pode ver o conteúdo da página");
}
