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
const ingredients = ingredient.find(el =>el == )
/*     window.addEventListener('load', function() {
      console.log("hello");
      for (let i=0; i<tabRecipes.length; i++) {
        for (let j=0; j<ingredient.length; j++) {
          console.log(ingredient[i][j].name);
        }
        
    };}) */
/* 
    tabRecipes.forEach(ingredients => {
      ingredients.forEach((fileItem: {name: string, amount: string}, index: number) => {
        console.log(fileItem.name);
      })
    })
  */
 
  
       
            window.addEventListener('load', function() {
                tabRecipes.forEach(element => {
                  createBouton(element)    
                });
               tabRecipes.forEach(element => {
                    chargerListeIngredients(element)
                  });
            })


    function createBouton (element: Recipe) {
      console.log(element.id);
        let button = document.createElement('button')
        button.type = 'button';
        button.innerHTML=`${element.name} <hr>` 
        button.innerHTML +=`<i class="bi bi-egg-fried"></i>${element.cookTime}  <i class="bi bi-fire"></i>${element.prepTime}  ` 
        button.className = "btn btn-outline-light btn-lg btn-block text-center"
        button.id = `${element.id}`
        recettes.appendChild(button);

        
    }

function chargerListeIngredients (element: Recipe ) {
console.log("charger");
let option = document.createElement('option')
option.innerHTML = `${element.ingredients[0] }` 
ingredientsIndex.appendChild(option)
}
    

  


   
   
   


 


console.table(tabRecipes);
console.log(tabRecipes[0].name);
