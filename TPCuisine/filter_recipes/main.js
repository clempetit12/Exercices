import { recipes } from "./assets/ts/data/recipes.js";
let preparationTime = document.getElementById("preparationTime");
let cookingTime = document.getElementById("cookingTime");
let search = document.getElementById("search");
let ingredients = document.getElementById("ingredients");
let filter = document.getElementById("filter");
let recettes = document.getElementById("recettes");
let tabRecipes = [];
for (const key in recipes) {
    if (recipes.hasOwnProperty.call(recipes, key)) {
        const element = recipes[key];
        tabRecipes.push(element);
    }
}
recettes.innerHTML;
tabRecipes.forEach(element => {
    tabRecipes.forEach(element => {
        console.log(tabRecipes[name]);
    });
});
function affichage(cle) {
    let button = document.createElement('button');
    button.textContent =
    ;
}
console.table(tabRecipes);
