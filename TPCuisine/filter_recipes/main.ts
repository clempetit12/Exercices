import { recipes } from "./assets/ts/data/recipes.js"


let preparationTime = document.getElementById("preparationTime") as HTMLLabelElement
let cookingTime = document.getElementById("cookingTime") as HTMLLabelElement
let search = document.getElementById("search") as HTMLDivElement
let ingredientsIndex = document.getElementById("ingredients") as HTMLSelectElement
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
  
    const ingredient = tabRecipes.map(el => el.ingredients)
  
    console.log(ingredient[0][0].name);

/*     console.log(tabRecipes[0].name);
tabRecipes.forEach(element => {
    for (let i=0; i<ingredients.length; i++) {
        console.log(`${element.ingredients[i]}`);
            }
}); */

       let i =0
            window.addEventListener('load', function() {
                
                tabRecipes.forEach(element => {
                  createBouton(element)
               
                  chargerListeIngredients(element)

                });
            })


    function createBouton (element: Recipe) {
        let button = document.createElement('button')
        button.type = 'button';
        button.innerHTML=`${element.name} <hr>` 
        button.innerHTML +=`<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime} ` 
        button.className = "btn btn-outline-light btn-lg btn-block text-center"
        recettes.appendChild(button);

        
    }
function chargerListeIngredients (element: Recipe ) {
let option = document.createElement('option')
option.innerHTML = `${ingredient[0][0].name }` 
ingredientsIndex.appendChild(option)
}
    

  


   
   
   


 


console.table(tabRecipes);
console.log(tabRecipes[0].name);
