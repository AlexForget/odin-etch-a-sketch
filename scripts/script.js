/* ----- DÉCLARATION DES VARIABLES ----- */
var largeurGrille = 800;
var nbCellule;

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
var grille = document.querySelector("#grille");

/* ----- FUNCTIONS ----- */

validerCelluleMinMax = () => {
  var validerNbCell = parseInt(
    document.querySelector("#input-taille-cellule").value
  );
  if (validerNbCell < 1 || validerNbCell > 100) {
    alert("Min : 1 - Max : 100");
    return false;
  }
  return true;
};

const mouseOver = (e) => {
  console.log(e.target);
  e.target.style.backgroundColor = "red";
};

const effacerGrille = (e) => {
  if (validerCelluleMinMax()) {
    supprimerGrille();
    nbCellule = parseInt(document.querySelector("#input-taille-cellule").value);
    creerGrille();
  }
};

// Création de la grille et de l'event listener
const creerGrille = () => {
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
};

// Suppression de la grille
const supprimerGrille = () => {
  console.log("cellule : " + nbCellule);
  for (let i = 0; i < nbCellule * nbCellule; i++) {
    grille.removeChild(grille.lastChild);
  }
};

// Bouton pour effacer la grille
var boutonEffacer = document.querySelector("#effacer");
boutonEffacer.addEventListener("click", effacerGrille);

/* ----- LOADING INITIAL ----- */
window.onload = (e) => {
  nbCellule = parseInt(document.querySelector("#input-taille-cellule").value);
  creerGrille();
};
