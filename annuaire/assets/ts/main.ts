import { Person } from "./classes/Person.js";

let contacts = document.getElementById("contacts") as HTMLElement
let firstname = document.getElementById("firstname") as HTMLInputElement
let lastname = document.getElementById("lastname")as HTMLInputElement
let dateOfBirth = document.getElementById("dateOfBirth") as HTMLInputElement
let email = document.getElementById("email") as HTMLInputElement
let phoneNumber = document.getElementById("phoneNumber") as HTMLInputElement
let buttonContact = document.querySelectorAll(".buttonContact") as NodeListOf<HTMLElement>
let buttonAdd = document.getElementById("openModal") as HTMLElement
let modal = document.getElementById("modal") as HTMLElement
let closeModal = document.getElementById("closeModal") as HTMLElement
let editButton = document.getElementById("edit") as HTMLElement
let deleteButton = document.getElementById("delete") as HTMLElement
let inputElements = document.querySelectorAll("input") 
let formulaire = document.getElementById("formulaire")
let save = document.getElementById("save")
let add = document.getElementById("add")
let firstnameModal = document.getElementById("firstnameModal") as HTMLInputElement
let lastnameModal = document.getElementById("lastnameModal") as HTMLInputElement
let dateOfBirthModal = document.getElementById("dateOfBirthModal") as HTMLInputElement
let emailModal = document.getElementById("emailModal") as HTMLInputElement
let phoneNumberModal = document.getElementById("phoneNumberModal") as HTMLInputElement
let contactAdd = document.getElementById("contactAdd")


let person1:Person
let person2:Person
let person3:Person
let person4:Person

 person1 = new Person ("Albert", "DUPONT","05/05/1992", "albertdupont@gmail.com", "+(33)0645125859")
 person2 = new Person ("John", "SMITH", "12/05/1993", "johnsmith@gmail.com", "+(33)0645125889")
 person3 = new Person ("Clara", "GOMEZ", "12/12/1993", "claragomez@gmail.com", "+(33)064512589")
 person4 = new Person ("Elizabeth", "MARTIN", "12/07/1993", "elizabethmartin@gmail.com", "+(33)0655125859")

let contactsTab: Person[] = [];

// Je crée un tableau de Contacts pour ajouter mes personnes prééxistantes
contactsTab.push(person1,person2,person3,person4)
console.table(contactsTab);

// Je charge mon DOM en créant pour chaque élément du tableau un bouton avec le nom & prénom
document.addEventListener('DOMContentLoaded', function(){
    console.log("bonjour");
   contactsTab.forEach(element => {
    createBouton(element)   
    });
    buttonContact = document.querySelectorAll(".buttonContact") as NodeListOf<HTMLElement>
    console.log(buttonContact);  
    chargerBouton()
    
})

// fonction pour charger les boutons créés et lui associer une fonctionnalité au bouton crée pour afficher contact dans la page à côté 
function chargerBouton (){
    console.log("charger bouton");
buttonContact.forEach(function(bouton) {
    console.log(`le bouton `);
    bouton.addEventListener("click", function() {
        console.log("selecteur");
      const personneTrouve =  contactsTab.filter((personneid)=> Number(bouton.id) == personneid.id)
      console.log(`la personne trouvée est ${personneTrouve[0].firstname}`);
      display(personneTrouve[0])
        
       });
    });}

//fonction pour afficher les éléments de la personne trouvée dans le tableau dans l'encart Détails
function display (personneTrouvee: Person) {
    console.log("display");
    firstname.value = personneTrouvee.firstname
    lastname.value = personneTrouvee.lastname
    const date  = `${personneTrouvee.dateOfBirth.getDate()}`+"/"+`${personneTrouvee.dateOfBirth.getMonth()}`+"/"+`${personneTrouvee.dateOfBirth.getFullYear()}`
    dateOfBirth.value = date
    email.value = personneTrouvee.email
    phoneNumber.value = separationPhoneNumber(personneTrouvee.phoneNumber)
}

// Fonction pour afficher le numéro de téléphone avec le bon format
function separationPhoneNumber (numero) {
    const segment1 = numero.slice(0, 5);
    const segment2 = numero.slice(5, 7);
    const segment3 = numero.slice(7, 9);
    const segment4 = numero.slice(9, 11);
    const segment5 = numero.slice(11, 13);
    const segment6 = numero.slice(13, 15);
    const numeroFormate = `${segment1} ${segment2} ${segment3} ${segment4} ${segment5} ${segment6}`;
    return numeroFormate
}

// Essayer d'afficher la modale mais ça ne fonctionne pas 
buttonAdd.addEventListener('click', ()=> {
    modal.style.display = "block"

})
closeModal.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  //editer bouton mais ça ne fonctionne pas 
  editButton.addEventListener('click', () => {
    console.log("bonjour edit");
    let personneModifieelastname =  lastname.value
    console.log(personneModifieelastname);
    chercherIdParNom(personneModifieelastname)
    console.log(chercherIdParNom(personneModifieelastname));
    editButton.style.display = "none";
    save.style.display = "block";
  })
    
    formulaire.addEventListener("submit", function(event) {
        event.preventDefault(); 
        const nouveauPrenom = firstname.value;
        const nouveauNom = lastname.value;
        console.table(contactsTab);
        updateTab()
       
        editButton.style.display = "block";
        save.style.display = "none";
    })

function updateTab () {
    const nouveauPrenom = firstname.value;
        const nouveauNom = lastname.value;
    let personneModifiee =`${nouveauNom}${nouveauPrenom}`
    console.log(personneModifiee);
        
       }
   

       function chercherIdParNom(personnecherchee) {
        for (let i = 0; i < contactsTab.length; i++) {
            if (contactsTab[i].lastname === personnecherchee) {
                return contactsTab[i].id; 
            }
            return null; 
        }
        
    }

    // Ajouter un nouveau contact à la liste des contacts
    add.addEventListener('click', () => {
        let firstname = firstnameModal.value
        console.log(firstname);
        let lastname = lastnameModal.value
        let dateOfBirth = dateOfBirthModal.value
        let email = emailModal.value
        let phoneNumber = phoneNumberModal.value      
let personAdd = new Person (firstname, lastname, dateOfBirth, email, phoneNumber)
contactsTab.push(personAdd)
console.table(contactsTab);
createBouton(personAdd)
chargerBouton()
    })

// Fonction pour créer un bouton
function createBouton (element) {
    let button = document.createElement('button')
button.type = 'button'
button.id = `${element.id}`
button.innerHTML = `${element.firstname} ${element.lastname}`
button.className = `row btn btn-outline-light btn-lg btn-block buttonContact `
contacts.appendChild(button)   
}
