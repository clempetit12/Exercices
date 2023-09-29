import { recipes } from "./assets/ts/data/recipes.js"


let preparationTime = document.getElementById("preparationTime") as HTMLLabelElement
let cookingTime = document.getElementById("cookingTime") as HTMLLabelElement
let search = document.getElementById("search") as HTMLDivElement
let ingredientsIndex = document.getElementById("ingredients") as HTMLSelectElement
let filter = document.getElementById("filter") as HTMLButtonElement
let recettes = document.getElementById("recettes") as HTMLDivElement
let modal = document.getElementById("modal") as HTMLDivElement
let titre = document.getElementById("titre") as HTMLDivElement
let ingredientModal = document.getElementById("ingredientModal") as HTMLDivElement
let instructionModal = document.getElementById("instruction") as HTMLDivElement
let closeModalButon = document.getElementById("closeModalButon")  as HTMLDivElement


interface Recipe {
    id?: string;
    name: string;
    servings: number;
    prepTime: string;
    cookTime: string;
    ingredients: {
        name: string;
        amount: string;
    }[];
    instructions: string[];
}

let tabRecipes: Recipe[] = []
let selectedRecipe = tabRecipes[0];


for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        tabRecipes.push(element)
    }
}


console.table(tabRecipes);

//Chargemnt à 'ouverte de la page des recettes 
window.addEventListener('load', function () {
    console.log("object");
    tabRecipes.forEach(element => {
        createBouton(element)
    });
})

//Fonction pour créer les boutons
function createBouton (element: Recipe) {
    let button = document.createElement('button')
    button.type = 'button';
    button.innerHTML=`${element.name} <hr>` 
    button.className = element === selectedRecipe ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2";
    button.innerHTML +=`<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime} ` 
    button.addEventListener('click', ()=> {
        selectedRecipe= element;
        console.log(selectedRecipe);
        modal.style.display = "block"
        titre.innerHTML = element.name
        instructionModal.innerHTML = `${element.instructions}`
    })
    recettes.appendChild(button);
    button.addEventListener('click', () => {
        selectedRecipe = element
        console.log(selectedRecipe);
        tabRecipes.forEach(element => {
            const ingredientsList = element.ingredients;
            console.log(ingredientsList.forEach(element => {
                ingredientModal.innerHTML += `<li> ${element.name},${element.amount}  </li>`
            }))
        })
       
    })
};


console.table(selectedRecipe);

//Affichage ingrédient dans la liste
tabRecipes.forEach(element => {
    const ingredientsList = element.ingredients;
    console.log(ingredientsList.forEach(element => {
        let option = document.createElement('option')
        option.innerHTML = `${element.name}`
        ingredientsIndex.appendChild(option)
    }));

});

//Croix pour fermer la modal 
closeModalButon.addEventListener('click', () => {
    modal.style.display = "none"
  })