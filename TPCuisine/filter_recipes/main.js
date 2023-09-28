import { recipes } from "./assets/ts/data/recipes.js";
let preparationTime = document.getElementById("preparationTime");
let cookingTime = document.getElementById("cookingTime");
let search = document.getElementById("search");
let ingredientsIndex = document.getElementById("ingredients");
let filter = document.getElementById("filter");
let recettes = document.getElementById("recettes");
let tabRecipes = [];
for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        tabRecipes.push(element);
    }
}
const ingredient = tabRecipes.map(el => el.ingredients);
console.log(ingredient[0][0].name);
/*     console.log(tabRecipes[0].name);
tabRecipes.forEach(element => {
    for (let i=0; i<ingredients.length; i++) {
        console.log(`${element.ingredients[i]}`);
            }
}); */
let i = 0;
window.addEventListener('load', function () {
    tabRecipes.forEach(element => {
        createBouton(element);
        chargerListeIngredients(element);
    });
});
function createBouton(element) {
    let button = document.createElement('button');
    button.type = 'button';
    button.innerHTML = `${element.name} <hr>`;
    button.innerHTML += `<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime} `;
    button.className = "btn btn-outline-light btn-lg btn-block text-center";
    recettes.appendChild(button);
}
function chargerListeIngredients(element) {
    let option = document.createElement('option');
    option.innerHTML = `${ingredient[0][0].name}`;
    ingredientsIndex.appendChild(option);
}
console.table(tabRecipes);
console.log(tabRecipes[0].name);
