import { recipes } from "./assets/ts/data/recipes.js";
let preparationTime = document.getElementById("preparationTime");
let cookingTime = document.getElementById("cookingTime");
let search = document.getElementById("search");
let ingredientsIndex = document.getElementById("ingredients");
let filter = document.getElementById("filter");
let recettes = document.getElementById("recettes");
let modal = document.getElementById("modal");
let titre = document.getElementById("titre");
let ingredientModal = document.getElementById("ingredientModal");
let instructionModal = document.getElementById("instruction");
let tabRecipes = [];
let selectedRecipe = tabRecipes[0];
for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        tabRecipes.push(element);
    }
}
console.table(tabRecipes);
window.addEventListener('load', function () {
    console.log("object");
    tabRecipes.forEach(element => {
        createBouton(element);
    });
});
function createBouton(element) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = `${element.name} <hr>`;
    button.className = element === selectedRecipe ? "btn btn-light w-100 my-2" : "btn btn-outline-light w-100 my-2";
    button.innerHTML += `<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime} `;
    button.addEventListener('click', () => {
        selectedRecipe = element;
        console.log(selectedRecipe);
        modal.style.display = "block";
        titre.innerHTML = element.name;
        instructionModal.innerHTML = `${element.instructions}`;
    });
    recettes.appendChild(button);
    button.addEventListener('click', () => {
        selectedRecipe = element;
        console.log(selectedRecipe);
        tabRecipes.forEach(element => {
            const ingredientsList = element.ingredients;
            console.log(ingredientsList.forEach(element => {
                ingredientModal.innerHTML += `${element.name}`;
                ingredientModal.innerHTML += `${element.amount}`;
            }));
        });
        recettes.appendChild(button);
    });
}
;
console.table(selectedRecipe);
//Affichage ingrédient dans la liste
tabRecipes.forEach(element => {
    const ingredientsList = element.ingredients;
    console.log(ingredientsList.forEach(element => {
        let option = document.createElement('option');
        option.innerHTML = `${element.name}`;
        ingredientsIndex.appendChild(option);
    }));
});
