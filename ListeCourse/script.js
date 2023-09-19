let affichage = document.querySelector("#items")
const input = document.querySelector("#newItem")
const ajouter = document.querySelector("#addItem")
const clearItem= document.querySelector("#clearItem")
const listeCourse = new Array()


ajouter.addEventListener("click", () => {
console.log("bonjour");
const item = input.value
listeCourse.push(item)
console.table(listeCourse);
display(item)
tableauJSON = JSON.stringify(listeCourse)
localStorage.setItem('listeCourseenregistree',tableauJSON)

});

clearItem.addEventListener("click", () => {
    console.log("supprimer");
   affichage.innerHTML = ' '
 
    
    });

function display (item) {
    const taskitem = document.createElement ('li')
    taskitem = `${item} <br>`
    affichage.innerHTML += taskitem
}

console.table(listeCourse);


 let courseStorage = JSON.parse(localStorage.getItem("listeCourseenregistree")) 
console.log(courseStorage);