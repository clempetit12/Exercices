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
let addTabNotes = document.getElementById("addTabNotes")
let off1 = document.getElementById("off1")
let off2 = document.getElementById("off2")
let off3 = document.getElementById("off3")
let appears = document.querySelector(".hide")
let appears2 = document.querySelector(".hide2")
let appears3 = document.querySelector(".hide3")
let moyenneAffichage = document.querySelector(".moyenneAffichage")
let premiereOptionStudent = document.getElementById("premiereOptionStudent")
let premiereOptionMatter = document.getElementById("premiereOptionMatter")

let tabEleve = []
let tabMatters = []
let tabNotes = []

//Ajout d'un étudiant dans le tableau Elèves
addStudent.addEventListener('click', () => {
    const student = tabEleve.find(student => ((student.name==name.value) && (student.firstname==firstname.value)))
    if(!student){
        let newStudent = new Student(name.value, firstname.value )
            tabEleve.push(newStudent)
            displayStudent(newStudent)
        }
        name.value = ''
        firstname.value = ''
    })

//Ajout d'une matière dans le tableau Matières
addMatter.addEventListener('click', () => {
    const matters = tabMatters.find(matters => (matters.matter==matter.value) )
    if(!matters){
        let newMatter = new Matter(matter.value)
            tabMatters.push(newMatter)
            displayMatter(newMatter)
        }
        matter.value = ''
    
})

//Fonction pour afficher dans les sélecteurs student 
function displayStudent (newStudent) {
    let student =`${newStudent.name + " " + newStudent.firstname}`
    selectStudent.innerHTML += `<option value="">${student}</option>`
    selectStudent2.innerHTML += `<option value="">${student}</option>`
}

//Fonction pour afficher dans les sélecteurs matières
function displayMatter (newMatter) {
    selectMatter.innerHTML += `<option value="">${newMatter.matter} </option>`
    selectMatter2.innerHTML += `<option value="">${newMatter.matter} </option>`
}



//Création d'un tableau pour ajout d'un élève avec sa note au tableau Notes
addTabNotes.addEventListener('click', () => {
 let newContact = { "eleve":`${selectStudent.options[selectStudent.selectedIndex].text}`,"matiere":`${selectMatter.options[selectMatter.selectedIndex].text}`, "notes" : `${addNote.value}`  }
  tabNotes.push(newContact)
  console.table(tabNotes);
 updateTab()
 addNote.value = " "
})

// Fonctionnalités pour les boutons ON et OFF
let bool = 1
off1.addEventListener('click', () => {
    displayOff(off1, appears)
    
})
off2.addEventListener('click', () => {
    displayOff(off2, appears2)
    }
)
off3.addEventListener('click', () => {
   displayOff(off3, appears3)
})

function displayOff (bouton, clasnames) {
    if (bool === 1){
        clasnames.className = "hide-1"
        bouton.innerHTML = "OFF";
        bool=0
    } else{
        clasnames.className = "hide-2"
        bouton.innerHTML = "ON";   
        bool = 1
    }
}  

        // Gestionnaire d'événements pour le changement de sélection
        selectStudent2.addEventListener("change", function() {
            updateTab();
          
        })

        selectMatter2.addEventListener("change", function() {
            updateTab();
        })
    
// Fonction pour afficher en fonction du filtre tableau
        function affichage (tabFiltre) {
            if ((tabFiltre) && (tabFiltre.length>0) ) {
                console.log("ff");
                tableau.innerHTML = " "
                let sommeNotes =0
                let nombreMatieres = 0
                tabFiltre.forEach(element => {
                    
                    tableau.innerHTML += `
                    <tr>
                        <td>${element.eleve}</td>
                        <td>${element.matiere}</td>
                        <td>${element.notes}</td>
                        
                    </tr>    ` 

                    sommeNotes += Number(element.notes)
                    nombreMatieres++    
                   
                });    let moyenne = (sommeNotes/nombreMatieres).toFixed(2)
                console.log(moyenne);
                moyenneAffichage.innerHTML = `La moyenne générale est de : ${moyenne}` 
            }
        }

        // Fonction affichage du tableau en fonction des sélecteurs
        function selectValue (eleveSelectionne, matiereSelectionne) {
            console.log(eleveSelectionne);
            console.log(matiereSelectionne);
if ((eleveSelectionne == premiereOptionStudent.value) && (matiereSelectionne == premiereOptionMatter.value) ){
    console.log("cas 0 selection");
    affichage(tabNotes)

} else if ((eleveSelectionne != premiereOptionStudent.value) && (matiereSelectionne == premiereOptionMatter.value) ){
    console.log("cas matiere selection");
    console.log("cas personne selection");
    let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
    const targetSubjects = tabNotes.filter(function(eleves) {
        return eleves.eleve == prenomSelectionne;
    });
    console.log(targetSubjects);
    affichage(targetSubjects)
   
} else if ((eleveSelectionne == premiereOptionStudent.value) && (matiereSelectionne != premiereOptionMatter.value) ){
    console.log("cas personne selection");
    let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
    const targetMatter = tabNotes.filter(function(eleves) {
        return (eleves.matiere == matterSelect)
    });
    console.log(targetMatter);
    affichage(targetMatter)
} else {
    console.log("cas tout le monde selection");
    let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
    let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
    const targetMatter = tabNotes.filter(function(eleves) {
        return ((eleves.eleve == prenomSelectionne) && (eleves.matiere == matterSelect))
    });
    console.log(targetMatter);
    affichage(targetMatter)
} }

function updateTab () {
    selectValue(`${selectStudent2.options[selectStudent2.selectedIndex].text}`,`${selectMatter2.options[selectMatter2.selectedIndex].text}`)
}