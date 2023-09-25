import { Person } from "./classes/Person.js";
let contacts = document.getElementById("contacts");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let dateOfBirth = document.getElementById("dateOfBirth");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let buttonContact = document.querySelectorAll(".bloc1");
let person1;
let person2;
let person3;
let person4;
person1 = new Person("Albert", "DUPONT", "12/05/1993", "albertdupont@gmail.com", "+(33)0645125859");
person2 = new Person("John", "SMITH", "12/05/1993", "albertdupont@gmail.com", "+(33)0645125859");
person3 = new Person("Clara", "GOMEZ", "12/05/1993", "albertdupont@gmail.com", "+(33)0645125859");
person4 = new Person("Elizabeth", "MARTIN", "12/05/1993", "albertdupont@gmail.com", "+(33)0645125859");
let contactsTab = [];
contactsTab.push(person1, person2, person3, person4);
console.table(contactsTab);
document.addEventListener('DOMContentLoaded', function () {
    console.log("bonjour");
    contactsTab.forEach(element => {
        let button = document.createElement('button');
        button.type = 'button';
        button.innerHTML = `${element.firstname} ${element.lastname}`;
        button.className = `row btn btn-outline-light btn-lg btn-block bouton${element.id}`;
        contacts.appendChild(button);
    });
    let buttonAdd = document.createElement('button');
    buttonAdd.type = 'button';
    buttonAdd.innerHTML = `Add`;
    buttonAdd.className = "row btn btn-outline-light btn-lg btn-block";
});
contacts.addEventListener('click', () => {
});
function display() {
    contactsTab.forEach(element => {
        if (element.id = contacts.className) {
        }
    });
}
function affichage(tabFiltre) {
    if ((tabFiltre) && (tabFiltre.length > 0)) {
        console.log("ff");
        tableau.innerHTML = " ";
        let sommeNotes = 0;
        let nombreMatieres = 0;
        tabFiltre.forEach(element => {
            tableau.innerHTML += `
                    <tr>
                        <td>${element.eleve}</td>
                        <td>${element.matiere}</td>
                        <td>${element.notes}</td>
                        
                    </tr>    `;
            sommeNotes += Number(element.notes);
            nombreMatieres++;
        });
        let moyenne = (sommeNotes / nombreMatieres).toFixed(2);
        console.log(moyenne);
        moyenneAffichage.innerHTML = `La moyenne générale est de : ${moyenne}`;
    }
}
