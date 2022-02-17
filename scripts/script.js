/* ----- DÉCLARATION DES VARIABLES ----- */
var largeurGrille = 800;
var nbCellule = 20;

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
var grille = document.querySelector("#grille");

/* ----- LOADING INITIAL ----- */
window.onload = (e) => {};

/* ----- FUNCTIONS ----- */

const mouseOver = (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "red";
};

// Création de la grille et de l'event listener
for (let i = 0; i < nbCellule * nbCellule; i++) {
  const cellule = document.createElement("div");
  cellule.setAttribute(
    "style",
    `width:${largeurGrille / nbCellule}px; 
    height:${largeurGrille / nbCellule}px`
  );
  cellule.addEventListener("mouseover", mouseOver);
  grille.appendChild(cellule);
}
