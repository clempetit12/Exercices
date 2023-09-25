import { Person } from "./classes/Person.js";
let contacts = document.getElementById("contacts");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let dateOfBirth = document.getElementById("dateOfBirth");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("phoneNumber");
let buttonContact = document.querySelectorAll(".buttonContact");
let person1;
let person2;
let person3;
let person4;
person1 = new Person("Albert", "DUPONT", "05/05/1992", "albertdupont@gmail.com", "+(33)0645125859");
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
        button.id = `${element.id}`;
        button.innerHTML = `${element.firstname} ${element.lastname}`;
        button.className = `row btn btn-outline-light btn-lg btn-block buttonContact `;
        contacts.appendChild(button);
    });
    let buttonAdd = document.createElement('button');
    buttonAdd.type = 'button';
    buttonAdd.innerHTML = `Add`;
    buttonAdd.className = "row btn btn-outline-light btn-lg btn-block";
    console.log(buttonContact);
    buttonContact = document.querySelectorAll(".buttonContact");
    console.log(buttonContact);
    chargerBouton();
});
function chargerBouton() {
    buttonContact.forEach(function (bouton) {
        console.log(`le bouton `);
        bouton.addEventListener("click", function () {
            console.log("selecteur");
            const personneTrouve = contactsTab.filter((personneid) => Number(bouton.id) == personneid.id);
            console.log(`la personne trouvée est ${personneTrouve[0].firstname}`);
            display(personneTrouve[0]);
        });
    });
}
function display(personneTrouvee) {
    console.log("display");
    firstname.value = personneTrouvee.firstname;
    lastname.value = personneTrouvee.lastname;
    const date = `${personneTrouvee.dateOfBirth.getDate()}` + "/" + `${personneTrouvee.dateOfBirth.getMonth()}` + "/" + `${personneTrouvee.dateOfBirth.getFullYear()}`;
    dateOfBirth.value = date;
    email.value = personneTrouvee.email;
    phoneNumber.value = separationPhoneNumber(personneTrouvee.phoneNumber);
}
function separationPhoneNumber(numero) {
    const segment1 = numero.slice(0, 5);
    const segment2 = numero.slice(5, 7);
    const segment3 = numero.slice(7, 9);
    const segment4 = numero.slice(9, 11);
    const segment5 = numero.slice(11, 13);
    const segment6 = numero.slice(13, 15);
    const numeroFormate = `${segment1} ${segment2} ${segment3} ${segment4} ${segment5} ${segment6}`;
    return numeroFormate;
}
