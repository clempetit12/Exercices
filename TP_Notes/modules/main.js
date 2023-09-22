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
    console.log(student);
    if(!student){
        let newStudent = new Student(name.value, firstname.value )
            tabEleve.push(newStudent)
            console.table(tabEleve)
            displayStudent(newStudent)
        }
        name.value = ''
        firstname.value = ''
    })

//Ajout d'une matière dans le tableau Matières
addMatter.addEventListener('click', () => {
    const matters = tabMatters.find(matters => (matters.matter==matter.value) )
    console.log(matters);
    if(!matters){
        let newMatter = new Matter(matter.value)
            tabMatters.push(newMatter)
            console.table(tabMatters)
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
})

// fonction pour afficher le tableau des élèves avec leurs notes
function updateTab() {
    tableau.innerHTML = '';
    for (let i = 0; i < tabNotes.length; i++) {
        tableau.innerHTML += `
        <tr>
            <td>${tabNotes[i].eleve}</td>
            <td>${tabNotes[i].matiere}</td>
            <td>${tabNotes[i].notes}</td>
            
        </tr>        
        `
    }
}


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

//Sélection et calcul de la moyenne 

    
    //const studentSearched = `${selectStudent2.options[selectStudent2.selectedIndex].text}`
    
// AFFICHAGE DANS LE TABLEAU NOTE DE L'ÉLÈVE SÉLECTIONNÉ

    
function moyenneGenerale (eleve) {
   
        let somme = 0;
        let nombreMatieres = tabNotes.notes.lenght
        console.log(nombreMatieres);
        for (let i = 0; i < nombreMatieres; i++) {
            somme += eleve.notes[i];
        }
        let moyenne = somme/nombreMatieres;
        console.log(moyenne);
        return moyenne
        

}
s
        // Gestionnaire d'événements pour le changement de sélection
        selectStudent2.addEventListener("change", function() {
            let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
            const targetSubjects = tabNotes.filter(function(eleves) {
                return eleves.eleve == prenomSelectionne;
            });
            console.log(targetSubjects);
            affichage(targetSubjects)
       
          
        })

        selectMatter2.addEventListener("change", function() {
            if (selectStudent2.value !== premiereOption.value) {
                let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
                let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
                const targetMatter = tabNotes.filter(function(eleves) {
                    return ((eleves.eleve == prenomSelectionne) && (eleves.matiere == matterSelect))
                });
                console.log(targetMatter);
                affichage(targetMatter)
         
            } else {
                let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
                const targetMatter = tabNotes.filter(function(eleves) {
                    return (eleves.matiere == matterSelect)
                });
                console.log(targetMatter);
                affichage(targetMatter)
            }
        })
    

        function affichage (tabFiltre) {
            if ((tabFiltre) && (tabFiltre.length>0) ) {
                console.log("ff");
                tableau.innerHTML = " "
                let somme =0
                let somme2 = 0
                tabFiltre.forEach(element => {
                    
                    tableau.innerHTML += `
                    <tr>
                        <td>${element.eleve}</td>
                        <td>${element.matiere}</td>
                        <td>${element.notes}</td>
                        
                    </tr>    ` 

                    somme += Number(element.notes)
                    console.log("somme" + somme);
                    somme2++    
                    console.log("somme2" + somme2);
                   
                });    let moyenne = (somme/somme2).toFixed(2)
                console.log(moyenne);
                moyenneAffichage.innerHTML = `La moyenne générale est de : ${moyenne}` 
            }
        }

        function selectValue (eleveSelectionne, matiereSelectionne) {
if ((eleveSelectionne == premiereOptionStudent.value) && (matiereSelectionne == premiereOptionMatter.value) ){
affichage(tabNotes)
} else if ((eleveSelectionne !== premiereOptionStudent.value) && (matiereSelectionne == premiereOptionMatter.value) ){
    let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
    const targetMatter = tabNotes.filter(function(eleves) {
        return (eleves.matiere == matterSelect)
    });
    console.log(targetMatter);
    affichage(targetMatter)
} else if ((eleveSelectionne == premiereOptionStudent.value) && (matiereSelectionne !== premiereOptionMatter.value) ){
    let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
    const targetSubjects = tabNotes.filter(function(eleves) {
        return eleves.eleve == prenomSelectionne;
    });
    console.log(targetSubjects);
    affichage(targetSubjects)
} else {
    let prenomSelectionne = `${selectStudent2.options[selectStudent2.selectedIndex].text}`;
    let matterSelect = `${selectMatter2.options[selectMatter2.selectedIndex].text}`;
    const targetMatter = tabNotes.filter(function(eleves) {
        return ((eleves.eleve == prenomSelectionne) && (eleves.matiere == matterSelect))
    });
    console.log(targetMatter);
    affichage(targetMatter)
} }
