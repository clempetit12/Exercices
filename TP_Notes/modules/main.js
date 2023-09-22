import { Student } from "./js/Student.js"
import { Matter } from "./js/Matter.js"

let name = document.getElementById("name")
let firstname = document.getElementById("firstname")
let addStudent = document.getElementById("addStudent")
let matter = document.getElementById("matter")
let addMatter = document.getElementById("addMatter")
let selectMatter = document.getElementById("selectMatter")
let selectMatter2 = document.getElementById("selectMatter2")
let selectStudent = document.getElementById("selectStudent")
let selectStudent2 = document.getElementById("selectStudent2")
let addNote = document.getElementById("addNote")
let tableNotes = document.getElementById("tableNotes")
let bouton = document.querySelector(".bouton")
let addTabNotes = document.getElementById("addTabNotes")
let afficher = document.getElementById("afficher")

let tabEleve = []
let tabMatters = []
let tabNotes = []

let newStudent
addStudent.addEventListener('click', () => {
    let newStudent = new Student(name.value, firstname.value )
    tabEleve.push(newStudent)
    console.table(tabEleve);
    displayStudent(newStudent)
})

addMatter.addEventListener('click', () => {
    let newMatter = new Matter(matter.value)
    console.log(newMatter);
    tabMatters.push(newMatter)
    console.table(tabMatters);
    displayMatter(newMatter)
})

function displayStudent (newStudent) {
    let student =`${newStudent.name + " " + newStudent.firstname}`
    selectStudent.innerHTML += `<option value="">${student}</option>`
    selectStudent2.innerHTML += `<option value="">${student}</option>`
}

function displayMatter (newMatter) {
    selectMatter.innerHTML += `<option value="" id = ${new Date().getTime().toString()}>${newMatter.matterNumero }</option>`
    selectMatter2.innerHTML += `<option value="" id = ${new Date().getTime().toString()}>${newMatter.matterNumero }</option>`
}
const index = 0

afficher.addEventListener('keydown', (event) => {
    if (event.key === 'Enter'){
        console.log(addNote.value );
    }
})

addTabNotes.addEventListener('click', () => {
 let newContact = {"student":`${selectStudent.options[selectStudent.selectedIndex].text}`,"matter":`${selectMatter.options[selectMatter.selectedIndex].text}`, "note" : `${addNote.value}`  }
  tabNotes.push(newContact)
  console.table(tabNotes);
  updateTab()
})

function updateTab() {
  
    // On le rempli des nouvelles valeurs
    for (let i = 0; i < tabNotes.length; i++) {
        tableau.innerHTML += `
        <tr>
            <td>${tabNotes[i].student}</td>
            <td>${tabNotes[i].matter}</td>
            <td>${tabNotes[i].note}</td>
            
        </tr>        
        `
    }
}

function moyenneGenerale (eleve) {
    let somme = 0;
    let count = 0;
    tabNotes.forEach(element => {
        somme += element.value
        count++;
    });

    const moyenne = somme/count;
    return moyenne;
}

console.log(moyenneGenerale());


    

