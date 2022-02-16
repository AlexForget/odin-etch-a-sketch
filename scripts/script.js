/* ----- DÉCLARATION DES VARIABLES ----- */

/* ----- DÉCLARATIOM DES DOCUMENT QUERY ----- */
const test = document.querySelector("p");

/* ----- LOADING INITIAL ----- */
window.onload = (e) => {
  test.textContent = "Changement JS";
};
