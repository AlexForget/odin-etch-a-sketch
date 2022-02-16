/* ----- DÉCLARATION DES VARIABLES ----- */

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
var container = document.querySelector("#container");

/* ----- LOADING INITIAL ----- */
window.onload = (e) => {};

for (let i = 0; i < 16; i++) {
  const cellule = document.createElement("div");
  cellule.classList.add("cellule");
  container.appendChild(cellule);
}
