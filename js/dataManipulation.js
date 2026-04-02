const data = {
  cardTitle: "Jogo",
  description: `3 vidas. Sem misericórdia. Cada erro pode ser o seu último.`,
  developer: "Tainá Pereira",
  genre: "Ação",
  year: 2026,
};

const currentYear = new Date().getFullYear();

if (currentYear === data.year) {
  alert("🎮 Grande Lançamento! Mad Cat chegou esse ano!");
}

const {
  cardTitle,
  description,
  developer: devName,
  genre,
  year: gameYear,
} = data;

document.getElementById("card-title").textContent = cardTitle;
document.getElementById("description").textContent = description;
document.getElementById("developer").textContent = `Desenvolvedor: ${devName}`;
document.getElementById("game-info").textContent = `${genre} • ${gameYear}`;
