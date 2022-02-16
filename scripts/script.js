/* ----- DÉCLARATION DES VARIABLES ----- */

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
var container = document.querySelector("#container");

/* ----- LOADING INITIAL ----- */
window.onload = (e) => {};

/* ----- FUNCTIONS ----- */

const mouseOver = (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "red";
};

// Création de la grille et de l'event listener
for (let i = 0; i < 16; i++) {
  const cellule = document.createElement("div");
  cellule.classList.add("cellule");
  cellule.addEventListener("mouseover", mouseOver);
  container.appendChild(cellule);
}
