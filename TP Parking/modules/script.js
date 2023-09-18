import { Vehicle } from "./js/Vehicle.js"


const pay = document.getElementById('pay')
const ticket = document.getElementById('ticket')

let tabVeh = []

ticket.addEventListener('click', () => {
    let plaque = document.getElementById('newplaque')
    let plaqueImmatriculation = plaque.value
    let currentDate = new Date();
    let car = new Vehicle(plaqueImmatriculation, currentDate)
    tabVeh.push(car)
    console.table(tabVeh);
})


let affichage = document.querySelector(".message")
pay.addEventListener('click', () => {
    let plaque = document.getElementById('newplaque')
    let plaqueImmatriculation = plaque.value
    console.table(tabVeh);
    let vehiculeTrouve = 0
    tabVeh.forEach(element => {
        if (plaqueImmatriculation == element.plaqueImmatriculation) {
            vehiculeTrouve = 1
            affichage.innerHTML = `${plaqueImmatriculation} existe`
        }
    });
    if (vehiculeTrouve == 0) {
        affichage.innerHTML = "c'est pas bon"
    } 
    
})

