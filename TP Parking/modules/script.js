import { Vehicle } from "./js/Vehicle.js";

const pay = document.getElementById("pay");
const ticket = document.getElementById("ticket");

let tabVeh = [];

ticket.addEventListener("click", () => {
  let plaque = document.getElementById("newplaque");
  let plaqueImmatriculation = plaque.value;
  let currentDate = new Date();
  let car = new Vehicle(plaqueImmatriculation, currentDate);
  tabVeh.push(car);
  console.table(tabVeh);
});

let affichage = document.querySelector(".message");

pay.addEventListener("click", () => {
  let plaque = document.getElementById("newplaque");
  let plaqueImmatriculation = plaque.value;
  console.table(tabVeh);
  if (tabVeh.length == 0) {
    affichage.innerHTML = `<span style="background-color: red"> Le véhicule ${plaqueImmatriculation} n'existe pas <br> </span>`;
    affichage.innerHTML += `<span style="background-color: green">Veuillez prendre un ticket pour le véhicule ${plaqueImmatriculation}</span>`;
    setTimeout(function () {
      affichage.innerHTML = "";
    }, 5000);
  }
  tarifs(plaqueImmatriculation);
});

function tarifs(plaqueImmatriculation) {
  let vehiculeTrouve = 0;
  const timeout = new Date();
}
tabVeh.forEach((element) => {
  if (plaqueImmatriculation == element.plaqueImmatriculation) {
    vehiculeTrouve = 1;
    if (timeout - element.date < 15 * 60 * 1000) {
      affichage.innerHTML = `<span style="background-color: coral"> Le prix à payer pour le véhicule ${plaqueImmatriculation} est de 0.80€ </span>`;
      setTimeout(function () {
        affichage.innerHTML = "";
      }, 5000);
    } else if (timeout - element.date < 30 * 60 * 1000) {
      affichage.innerHTML = `<span style="background-color: coral ">Le prix à payer pour le véhicule ${plaqueImmatriculation} est de 1.30€ </span>`;
      setTimeout(function () {
        affichage.innerHTML = "";
      }, 5000);
    } else if (timeout - element.date < 45 * 60 * 1000) {
      affichage.innerHTML = `<span style="background-color: coral">Le prix à payer pour le véhicule ${plaqueImmatriculation} est de 1.70€ </span>`;
      setTimeout(function () {
        affichage.innerHTML = "";
      }, 5000);
    } else if (timeout - element.date > 45 * 60 * 1000) {
      affichage.innerHTML = `<span style="background-color: coral"> Le prix à payer pour le véhicule ${plaqueImmatriculation} est de 6€ </span>`;
      setTimeout(function () {
        affichage.innerHTML = "";
      }, 5000);
    } else {
affichage.innerHTML = `<span style="background-color: red"> Le véhicule ${plaqueImmatriculation} n'existe pas <br> </span>`;
  affichage.innerHTML += `<span style="background-color: green">Veuillez prendre un ticket pour le véhicule ${plaqueImmatriculation}</span>`;
  setTimeout(function () {
    affichage.innerHTML = "";
  }, 5000);
  }
}
});

