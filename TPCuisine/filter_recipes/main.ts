import { recipes } from "./assets/ts/data/recipes.js"


let preparationTime = document.getElementById("preparationTime") as HTMLLabelElement
let cookingTime = document.getElementById("cookingTime") as HTMLLabelElement
let search = document.getElementById("search") as HTMLDivElement
let ingredients = document.getElementById("ingredients") as HTMLSelectElement
let filter = document.getElementById("filter") as HTMLButtonElement
let recettes = document.getElementById("recettes") as HTMLDivElement




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


    for (const key  in recipes) {
        if (recipes.hasOwnProperty.call(recipes, key)) {
            const element = recipes[key];
            tabRecipes.push(element)

          
        }
    }

recettes.innerHTML

tabRecipes.forEach(element => {

tabRecipes.forEach(element => {
    console.log(tabRecipes[name]);
    
});
});

 function affichage (cle: string) {
    let button = document.createElement('button')
    button.textContent = 
}
 
console.table(tabRecipes);
